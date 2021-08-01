import LifeExpectancyCalc from './../src/lifeexpectancy.js';

describe ('LifeExpectancyCalc', () => {

	test('should properly create a life expectancy calc object', () => {
		const lifeExpectancyCalc = new LifeExpectancyCalc(80);
		expect(lifeExpectancyCalc.calculate()).toEqual(0);
	});
});