import {MercuryAgeCalculator} from './../src/agecalculator.js';

describe('MercuryAgeCalculator', () => {

	test('should correctly create an age calculator object', () => {
		const mercuryAgeCalculator = new MercuryAgeCalculator(45);
		expect(mercuryAgeCalculator.age).toEqual(45);
	});
});