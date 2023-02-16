import { equals } from "@jest/expect-utils";

export const toBeRenderedWithProps = (
  mockedComponent,
  expectedProps
) => {
  const mockedCall = mockedComponent.mock.calls[0];
  const actualProps = mockedCall ? mockedCall[0] : null;
  const pass = equals(actualProps, expectedProps);
  return { pass }
};
