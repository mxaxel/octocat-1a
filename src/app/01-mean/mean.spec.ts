import { mean } from "./mean";

describe('mean', () => {
    it("'Should calculate the mean of a set of 10 integer values [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]'", () => {
        const result = mean([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
        expect(result).toBe(550.6);
    });

    it("'Should calculate the mean of a set of 10 decimal values [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]'", () => {
        const result = mean([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
        expect(result).toBe(60.32);
    });
});