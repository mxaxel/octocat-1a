import { standardDeviation } from "./standard_deviation";

describe('standard_deviation', () => {
    it("'Should calculate the standard deviation of a set of 10 integer values [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]'", () => {
        const result = standardDeviation([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
        expect(result).toBe(542.67.toFixed(2));
    });

    it("'Should calculate the standard deviation of a set of 10 decimal values [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]s'", () => {
        const result = standardDeviation([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
        expect(result).toBe(59.06.toFixed(2));
    });
}); 