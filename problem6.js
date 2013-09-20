var sumOfSquares = function (limit) {
	var sum = 0;
	var x;

	for (x = 0; x <= limit; x++) {
		sum = sum + Math.pow(x, 2);
	}

	return sum;
};

var squareOfSums = function (limit) {
	var sum = 0;
	var x;

	for (x = 0; x <= limit; x++) {
		sum = sum + x;
	}

	return Math.pow(sum, 2);
};

var input = 100;

var difference = squareOfSums(input) - sumOfSquares(input);

console.log(difference);
