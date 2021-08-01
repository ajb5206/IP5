export default class LifeExpectancyCalc {
	constructor(timeLeft) {
		this.timeLeft = timeLeft;
	}

	calculate() {
		let clock = (80 - this.timeLeft);
		return clock;
	}
} 