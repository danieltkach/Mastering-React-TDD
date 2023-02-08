import { toContainText } from './toContainText';

describe('toContainText matcher', () => {
  const stripTerminalColor = (text) =>
    text.replace(/\x1B\[\d+m/g, "");

  it('returns pass is true when text is found in the given DOM element', () => {
    const domElement = {
      textContent: 'text to find'
    };
    const result = toContainText(domElement, 'text to find');
    expect(result.pass).toBe(true);
  });

  it('returns a message that contains the source line if no match', () => {
    const domElement = { textContent: '' };
    const result = toContainText(domElement, 'text to find');
    expect(
      stripTerminalColor(result.message())
    ).toContain(
      `expect(element).toContainText("text to find")`
    );
  });
});
