import { formatNumberToString } from "./Counter.util";

describe("Unit::Counter.util", () => {
  describe("formatNumberToString", () => {
    it("should convert Number to String", () => {
      const number = 123;
      const expectResult = "123";
      const result = formatNumberToString(number);

      expect(result).toBe(expectResult);
    });

    it("should convert negative Number to String", () => {
      const number = -123;
      const expectResult = "-123";
      const result = formatNumberToString(number);

      expect(result).toBe(expectResult);
    });
  });
});
