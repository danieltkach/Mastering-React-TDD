import React from 'react';
import ReactDOM from 'react-dom/client';
import { Appointment } from './src/Appointment';
import { act } from 'react-dom/test-utils';

describe("Appointment component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = component => act(() => ReactDOM.createRoot(container).render(component));
  
  const assert = customer => {
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain(customer.firstName);
  };

  it("renders a customer's firstname", () => {
    const customer = { firstName: "Ashley" };
    assert(customer);
  });

  it("renders another customer's firstname", () => {
    const customer = { firstName: "Cody" };
    assert(customer);

  });

});
