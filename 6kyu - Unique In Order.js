var uniqueInOrder=function(iterable){
  var result = []
  var last
  
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i])
    }
  }
  
  return result
};
