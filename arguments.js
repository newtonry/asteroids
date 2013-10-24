var sum = function() {
  var total = 0;

  for(i=0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
};


// console.log(sum(1, 2, 3, 10))


Function.prototype.myBind = function(obj) {
  var theFunction = this;

  var args = Array.prototype.slice.call(arguments, 1);

  return function() {
    return theFunction.apply(obj, args);
  };
}

// console.log(Math.max.myBind(Math, 1,2,3,200,9,6)());

var curriedSum = function (numArgs) {
  var numbers = []
  var _curriedSum = function(number) {
    numbers.push(number);

    if (numbers.length == numArgs) {
      var total = 0;

      for(i=0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    }
    else return _curriedSum;
  }
  return _curriedSum;
}

//currysum = curriedSum(4);
//console.log(currysum(5)(2)(2)(2));

Function.prototype.curry = function(numArgs) {
  var args = [];
  var that = this;

  var _curry = function (arg) {
    args.push(arg);

    if (args.length == numArgs) {
      return that.apply(that, args);
    }
    else {
      return _curry;
    }
  }
  return _curry;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

//console.log(sumThree.curry(3)(4)(20)(2)); // == 26