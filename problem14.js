var longestSeed;

var currentValue;

var longestSeedCount = 0;
var seedCount;

var i;

var collatz = function (input) {
	if (input % 2 === 0) {
		return input / 2;
	} else {
		return (3 * input) + 1;
	}
}

for (i = 999999; i > 1; i--) {
//for (i = 13; i > 1; i--) {
	//console.log('input: ' + i);

	seedCount = 1;
	currentValue = i;

	while (currentValue > 1) {
		currentValue = collatz(currentValue);
		seedCount++;

		//console.log('currentValue: ' + currentValue);
	}

	//console.log('seedCount: ' + seedCount);

	if (seedCount > longestSeedCount) {
		longestSeedCount = seedCount;
		longestSeed = i;
	}
}

console.log(longestSeed);
