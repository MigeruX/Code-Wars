function reverseByCenter(str) {
	evenArr = [];
	oddArr = [];
	var middle = Math.floor(str.length / 2);

	if (str.length % 2 == 0) {
		evenArr.push(str.slice(0, middle));
		evenArr.push(str.slice(middle));
		return evenArr.reverse().join('');
	} else {
		oddArr.push(str.slice(0, middle));
		oddArr.push(str.slice(middle, -middle));
		oddArr.push(str.slice(middle + 1));
		return oddArr.reverse().join('');
	};
};
