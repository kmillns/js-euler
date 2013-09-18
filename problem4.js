var x, y;
var product;
var stringProduct;

var isPalindrome = function (input) {
	var start = input.substr(0, input.length / 2);
	var end = input.substr(input.length / 2, input.length);
	var reversedEnd = end.split('').reverse().join('');

	return start === reversedEnd;
};

var findPalindromic = function () {
	var greatestPalindrome = 0;

	for (x = 1000; x > 100; x--) {
		for (y = 1000; y > 100; y --) {
			product = x * y;
			stringProduct = product.toString();
			
			if (isPalindrome(stringProduct) && product > greatestPalindrome) {
				greatestPalindrome = product;
			}

		}
	}

	return greatestPalindrome;
};

console.log(findPalindromic());