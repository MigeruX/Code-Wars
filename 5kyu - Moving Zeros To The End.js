function moveZeroes(arr) {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		if(arr[i] !== 0) {
			result.push(arr[i]);
		};
	};

	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 0) {
			result.push(arr[i]);
		};
	};

	return result;
};
