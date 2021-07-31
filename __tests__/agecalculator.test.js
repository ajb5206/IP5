import {AgeCalculator} from './../src/agecalculator.js';

describe('AgeCalculator', () => {

	test('should correctly create an age calculator object', () => {
		const ageCalculator = new AgeCalculator(45);
		expect(ageCalculator.age).toEqual(45);
	});
});