// Print something (use instead of console.log)
module.exports.print = function(input) {
	console.log(input);
};

// Remove and item from array (arr = array to remove value from, value = value to remove from the array)
module.exports.removeFromArray = function(arr, value) {
	return arr.filter(function(ele) {
		return ele !== value;
	});
};

// Shuffle the contents of an array into a random order
module.exports.shuffleArray = function(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
	}

	return array;
};

// Merge any two arrays
module.exports.mergeArrays = function(array1, array2) {
	let merged = array1.concat(array2);

	return merged;
};

// Merge any two objects
module.exports.mergeObjects = function(object1, object2) {
	let merged = { ...object1, ...object2 };

	return merged;
};

// Measure the duration it takes to run any function
module.exports.functionDuration = function(function1, function1arguments = [], printResult = false) {
	const start = performance.now();
	const functionResult = function1(...function1arguments);
	const end = performance.now();
	const time = end - start;

	if (printResult) {
		console.log(functionResult);
	}

	return `This function took ${time} milliseconds to operate.`;
};
