// http://www.robertdickau.com/manhattan.html

var factorial = function (n) {
	//console.log('n: ' + n);

	if (n === 1) {
		return n;
	} else {
		return n * factorial(n - 1);
	}
}


var centralBinomialCoefficient = function (n) {
	return factorial(2 * n) / Math.pow(factorial(n), 2);
}

console.log(centralBinomialCoefficient(20));