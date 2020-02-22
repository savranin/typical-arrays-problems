
exports.min = function min(array) {
  let res = 0;
  if (array === undefined || array.length == 0) {
    return res;
  }
  for (let element of array) {
    res = Math.min(res, element);
  }
  return res;
}

exports.max = function max(array) {
  let res = 0;
  if (array === undefined || array.length == 0) {
    return res;
  }
  for (let element of array) {
    res = Math.max(res, element);
  }
  return res;
}

exports.avg = function avg(array) {
  let res = 0;
  let sum = 0;
  if (array === undefined || array.length == 0) {
    return res;
  }
  for (let element of array) {
    sum = sum + element;
  }
  res = sum / array.length;
  return res;
}


