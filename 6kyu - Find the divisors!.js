function divisors(integer) {
  var arr = [];
  for (var i = 2; i < integer; i++) {
    if (integer%i == 0) {
      arr.push(i);
    };
  };
  var str = integer + " is prime";
  if (arr == 0) {
    return str;
  } else {
      return arr
    };
};
