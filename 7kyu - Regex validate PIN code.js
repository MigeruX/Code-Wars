function validatePIN (pin) {
  var s = pin.toString();
  if (isNaN(parseInt(s, 10)) == true) {
      return false;
  } else if (isNaN(pin) == true) {
      return false;
  } else if (s.length == 4 || s.length == 6) {
      return true;
  } else {
      return false;
  };
};
