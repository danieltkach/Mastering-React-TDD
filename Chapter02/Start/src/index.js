import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppointmentsDayView } from './Appointment';
import { sampleAppointments } from './sampleData';

const root = document.getElementById('root');
const component =  <AppointmentsDayView appointments={sampleAppointments} />;

ReactDOM.createRoot(root).render(component);
