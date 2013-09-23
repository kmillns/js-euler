var nthTriangleNumber = function (n) {
	return n * (n + 1) / 2;
};

var i, j;
var triangleNumber;
var countOfFactors = 0;

//for (i = 0; i < 10; i++) {
i = 0;
while (countOfFactors < 500) {
	triangleNumber = nthTriangleNumber(i);
	console.log('nthTriangleNumber(' + i + '): ' + triangleNumber);

	countOfFactors = 0;

	for (j = 1; j < Math.sqrt(triangleNumber); j++) {
		//console.log('factor: ' + j);

		if (triangleNumber % j === 0) {
			countOfFactors = countOfFactors + 2;
		}
	}

	console.log('countOfFactors: ' + countOfFactors);

	i++;
}
