var limit = 4000000;

var last = 1;
var current = 1;

var fib = function (last, current) {
	var next = last + current;

	var addition = 0;

	if (next % 2 === 0) {
		addition = next;
	}

	if (next < limit) {
		return fib(current, next) + addition;
	} else {
		return addition;
	}
};

console.log(fib(last, current));
