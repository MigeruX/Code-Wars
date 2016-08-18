function digitalRoot(number) {
	var arr = number.toString().split('').map(Number);
	var resultado = 0;

	do {
		resultado = arr.reduce(function(a, b) {
			return a + b;
		}, 0);
		
		arr = resultado.toString().split('').map(Number);
	} while (resultado > 9);
	
return resultado;
};
