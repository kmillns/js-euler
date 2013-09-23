
var productOfTriples = function (limit) {
	var a, b, c, n, m, product;

	for (n = 0; n < limit; n++) {
		for (m = n + 1; m < limit; m++) {
			a = Math.pow(m, 2) - Math.pow(n, 2);
			b = 2 * m * n;
			c = Math.pow(m, 2) + Math.pow(n, 2);

			//console.log('[a, b, c] : [' + a + ', ' + b + ', ' + c + ']');

			if (a + b + c === limit) {
				return a * b * c;
			}
		}
	}
}

console.log(productOfTriples(1000));