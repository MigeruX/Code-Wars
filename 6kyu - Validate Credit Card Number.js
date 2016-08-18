function validate(number) {
	var inputArr = number.toString().split('').map(Number);
	var booleanSwitch = true;

	if (inputArr.length % 2 == 0) {
		var result = inputArr.map(function(theNumber) {
			theNumber = booleanSwitch ? theNumber * 2 : theNumber;
			booleanSwitch = !booleanSwitch;
			return theNumber;
		});
	} else {
		var result = inputArr.map(function(theNumber) {
			theNumber = booleanSwitch ? theNumber : theNumber * 2;
			booleanSwitch = !booleanSwitch;
			return theNumber;
		});
	};

	for (var i = 0; i < result.length; i++) {
		result[i] > 9 ? result[i] = result[i] - 9 : result[i];
	};

	result = result.map(Number).reduce((x, y) => x + y);

	return result % 10 == 0 ? true : false;
};
