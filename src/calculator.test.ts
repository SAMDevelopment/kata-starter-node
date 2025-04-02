import { Calculator } from "./calculator";

describe("Calculator", () => {
  it("adds two numbers", () => {
    const calc = new Calculator();

    const result = calc.add(2, 3);

    expect(result).toBe(5);
  });
});
