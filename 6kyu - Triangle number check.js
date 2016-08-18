function isTriangleNumber(number) {
	var condition = (8 * number) + 1;
	return Math.sqrt(condition) % 1 == 0 ? true : false;
};
