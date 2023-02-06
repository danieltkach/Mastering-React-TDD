import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from "../src/views/Home";

describe("Home component", () => {
  const container = Document.createElement("div");
  document.body.appendChild(container);
  const component = <Home />
  ReactDOM.createRoot(container).render(component);
  it("renders the home component", () => {
    expect(document.body.textContent).toContain("Welcome to Mentor Blog");
  })
});