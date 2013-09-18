var factors = [];

var split = function (input) {
	console.log('input: ' + input);
	var x;
	var factor;

	for (x = 2; x < input / 2; x++) {
		console.log('x: ' + x);
		if (input % x === 0) {
			factor = x;
			console.log('factor: ' + factor);
			break;
		}
	}

	if (factor)	{
		factors.push(factor);
		console.log('input / factor: ' + input / factor);
		split(input / factor);
	} else {
		factors.push(input);
	}
};

split(600851475143);

console.log(factors);




