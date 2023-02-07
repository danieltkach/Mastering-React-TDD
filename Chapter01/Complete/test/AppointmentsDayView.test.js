import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('AppointmentsDayView component', () => {
  let container;

  const render = component => act(() => ReactDOM.createRoot(container).render(component));

  beforeEach(() => {
    container = document.createElement('div');
    document.body.replaceChildren(container);

  });
  it('renders div with correct id', () => {
    render(<AppointmentsDayView data={[]} />);
    expect(document.querySelector('div#appointments-day-container')).notToBe(null);
  });
});