export function AgeCalculator(age){
	this.age = age;
}

AgeCalculator.prototype.calculateMercuryAge = function() {
	return (this.age*365)/(0.24*365);
};