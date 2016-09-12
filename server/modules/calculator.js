var calculateMe = function(toCalcObject) {
  console.log('toCalcObject in module=', toCalcObject);

  // toCalcObject structure { x: 3, y: 4, type: Add }

  var finalAnswer;
  var operator = toCalcObject.type;
  var x = Number(toCalcObject.x);
  var y = Number(toCalcObject.y);

  switch (toCalcObject.type) {
    case 'add':
      finalAnswer = x + y;
      break;
    case 'subtract':
      finalAnswer = x - y;
      break;
    case 'multiply':
      finalAnswer = x * y;
      break;
    case 'divide':
      finalAnswer = x / y;
      break;
    default:
      console.log('not a possible operation, sorry');
      finalAnswer = 'operator error';
  }
  return finalAnswer;
};

module.exports = calculateMe;
