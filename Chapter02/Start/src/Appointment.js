import React from "react";

export const Appointment = ({ customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => {
  function appointmentTimeOfDay(startsAt) {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
  }

  return (
    <div id="appointmentsDayView">
      <ol>
        {
          appointments.map(appointment =>
            <li key={appointment.startsAt}>
              <button type="button">{appointmentTimeOfDay(appointment.startsAt)}</button>
            </li>)
        }
        {
          appointments.length === 0
            ? <p>There are no appointments scheduled for today.</p>
            : <Appointment {...appointments[0]} />
        }
      </ol>
    </div>
  );
};