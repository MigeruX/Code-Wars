function rgb(r, g, b){
	var i, j, k = "";

	var x = r.toString(16).toUpperCase();
	var y = g.toString(16).toUpperCase();
	var z = b.toString(16).toUpperCase();

	x.length == 1 ? i = "0" + x : i = x;
	y.length == 1 ? j = "0" + y : j = y;
	z.length == 1 ? k = "0" + z : k = z;

	if (i < 0) {i = "00"};
	if (j < 0) {j = "00"};
	if (k < 0) {k = "00"};

	if (r > 255) {i = "FF"};
	if (g > 255) {j = "FF"};
	if (b > 255) {k = "FF"};

	return (i+j+k);
};
