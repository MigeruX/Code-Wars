function groupByCommas(n) {
	var arr = [];
	var inverso = n.toString().split('').reverse().join('');
	
	for (var i = 0; i < inverso.length; i += 3) {
		arr.push(inverso.substr(i, 3));
	};

	var result = arr.join(',').split('').reverse().join('');

	return result;
};
