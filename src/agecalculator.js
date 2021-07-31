export function AgeCalculator(age){
	this.age = age;
}

AgeCalculator.prototype.calculateMercuryAge = function() {
	return (this.age*365)/(0.24*365);
};

AgeCalculator.prototype.calculateVenusAge = function() {
	return parseInt(((this.age*365)/(0.62*365)).toFixed(1), 10);
};