// import {formatNumberToString} from './Counter.util'

import { formatNumberToString } from "./Counter.util";

describe("Unit::Counter.util", () => {
  describe("formatNumberToString", () => {
    it("should format number to string", () => {
      expect(formatNumberToString(1)).toBe("1");
    });
  });
});
