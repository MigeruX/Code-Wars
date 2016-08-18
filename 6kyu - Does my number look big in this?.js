function narcissistic( value ) {
  var fin = [];
  var sum = 0;
  var str = value.toString();
  var arr = str.split('');
  for (i=0; i<arr.length; i++) {
  fin.push(Math.pow(parseInt(arr[i]), arr.length));
  };
  for (var j=0; j<fin.length; j++) {
  sum += fin[j];
  };
  if (sum == value){
    return true;
  } else {
      return false;
    };
};
