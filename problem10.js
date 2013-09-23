var sieve = function (limit) {
	var list = [];
	var x, y, z;

	for (x = 0; x < limit; x++) {
		list.push(x);
	}

	for (x = 2; x < Math.sqrt(limit); x++) {
		if (list[x]) {
			for (y = 0, z = Math.pow(x, 2); z < limit; y++) {
				list[z] = null;

				z = Math.pow(x, 2) + (y * x);
			}
		}
	}

	var output = list.filter(function (input) {
		if (input) {
			return input;
		};
	});

	return output;
}

var primesBelowTwoMillion = sieve(2000000);

var sumOfPrimes = 0;

var i;

for (i = 0; i < primesBelowTwoMillion.length; i++) {
	sumOfPrimes = sumOfPrimes + primesBelowTwoMillion[i];
}

console.log(sumOfPrimes - 1);