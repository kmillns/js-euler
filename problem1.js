var limit = 1000;

var sum = 0;

var x = 0;

for (x = 3; x < limit; x = x + 3) {
	sum = sum + x;
}

for (x = 5; x < limit; x = x + 5) {
	if (x % 3 !== 0) {
		sum = sum + x;
	}
}

console.log(sum);