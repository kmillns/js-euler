var smallestMultiple = function (maxDivisor) {
	var output;
	var evenlyDivisible;
	var x;

	var multiple = maxDivisor;

	while (!output) {
		evenlyDivisible = true;
		x = 1;

		while ((x <= maxDivisor) && evenlyDivisible) {
			if (multiple % x !== 0) {
				evenlyDivisible = false;
			}

			x++;
		}

		if (evenlyDivisible) {
			output = multiple;
		} else {
			multiple++;
		}
	}

	console.log(output);
};

smallestMultiple(20);
