import {
  matcherHint,
  printExpected,
  printReceived,
} from "jest-matcher-utils";

export const toContainText = (
  received,
  expectedText,
) => {
  const pass =
    received.textContent.includes(expectedText);

  const message = () =>
    matcherHint(
      "toContainText",
      "element",
      printExpected(expectedText),
      { isNot: pass }
    );

  return { pass, message };
};