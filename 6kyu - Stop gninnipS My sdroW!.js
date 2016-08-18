function spinWords(str) {
	var words = str.split(' ');
	var arr = [];

	for (var i = 0; i < words.length; i++) {
		if(words[i].length < 5) {
			arr.push(words[i]);
		} else {
			arr.push(words[i].split('').reverse().join(''));
		}
	}

	return (arr.toString().split(',').join(' '));
};
