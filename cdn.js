// Print something (use instead of console.log)
print = function(input) {
	console.log(input);
};

// Remove and item from array (arr = array to remove value from, value = value to remove from the array)
removeFromArray = function(arr, value) {
	return arr.filter(function(ele) {
		return ele !== value;
	});
};

// Shuffle the contents of an array into a random order
shuffleArray = function(array) {
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
