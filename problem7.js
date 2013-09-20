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

console.log(sieve(1000000)[10001]);
