import React from "react";
import ReactDOM from "react-dom/client";
import { AppointmentForm } from "./AppointmentForm";

const blankAppointment = {
  service: '',
};
const today = new Date();
const availableTimeSlots = [
  { startsAt: today.setHours(9, 0, 0, 0) },
  { startsAt: today.setHours(9, 30, 0, 0) },
];


ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <AppointmentForm original={blankAppointment} availableTimeSlots={availableTimeSlots} />
);
