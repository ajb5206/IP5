export function AgeCalculator(age){
	this.age = age;
}

AgeCalculator.prototype.calculateMercuryAge = function() {
	return parseInt(((this.age*365)/(0.24*365)).toFixed(1), 10);
};

AgeCalculator.prototype.calculateVenusAge = function() {
	return parseInt(((this.age*365)/(0.62*365)).toFixed(1), 10);
};

AgeCalculator.prototype.calculateMarsAge = function() {
	return parseInt(((this.age*365)/(1.88*365)).toFixed(1), 10);
};

AgeCalculator.prototype.calculateJupiterAge = function() {
	return parseInt(((this.age*365)/(11.86*365)).toFixed(1), 10);
};