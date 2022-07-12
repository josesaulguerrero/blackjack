export class NumberUtils {
	static isBetweenRange(value, lowerLimit, upperLimit) {
		if (upperLimit < lowerLimit)
			throw new Error(
				"The upper limit must be greater than the lower limit"
			);
		return value >= lowerLimit && value <= upperLimit;
	}

	static isGreaterThanOrEqual(value, base) {
		return value >= base;
	}

	static randomBetweenInclusiveRange(lowerLimit, upperLimit) {
		possibleELements = upperLimit - lowerLimit + 1;
		return Math.floor(Math.random() * possibleELements + lowerLimit);
	}
}
