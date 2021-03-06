import {AgeCalculator} from './../src/agecalculator.js';

describe('AgeCalculator', () => {

	test('should correctly create an age calculator object', () => {
		const ageCalculator = new AgeCalculator(45);
		expect(ageCalculator.age).toEqual(45);
	});

	test('should correctly calculate Mercury age', () => {
		const mercuryAge = new AgeCalculator(45);
		expect(mercuryAge.calculateMercuryAge()).toEqual(187);
	});

	test('should correctly calculate Venus age', () => {
		const venusAge = new AgeCalculator(45);
		expect(venusAge.calculateVenusAge()).toEqual(72);
	});

	test('should correctly calculate Mars age', () => {
		const marsAge = new AgeCalculator(45);
		expect(marsAge.calculateMarsAge()).toEqual(23);
	});

	test('should correctly calculate Jupiter age', () => {
		const jupiterAge = new AgeCalculator(45);
		expect(jupiterAge.calculateJupiterAge()).toEqual(3);
	});
});