import React from 'react';
import ReactDOM from 'react-dom/client';
import { Appointment } from './src/Appointment';

describe("Appointment component", () => {
  
  it("renders the component", () => {
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer}/>
    
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.createRoot(container).render(component);
    
    expect(document.body.textContent).toContain("Welcome to my testing application");
  })
});
