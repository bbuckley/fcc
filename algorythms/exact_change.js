Array.prototype.toHashMap = function(){
        var _hashMap = {};//, getKey = isFunction(key)?key: function(_obj){return _obj[key];};
        this.forEach(function (obj){
            _hashMap[obj[0]] = obj[1];
        });
        return _hashMap;
};

function checkCashRegister(price, cash, cid) {
  cid = cid.toHashMap();

  // var change = cid;

  var rate = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  };
  //  0.01 * cid["PENNY"] +
  //            0.05 * cid["NICKEL"] +
  //            0.1 * cid["DIME"] +
  //            0.1 * cid["DIME"] +
  //            0.25 * cid["QUARTER"] +
  //            1 * cid["ONE"] +
  //            5 * cid["FIVE"] +
  //            10 * cid["TEN"] +
  //            20 * cid["TWENTY"] +
  //            100 * cid["ONE HUNDRED"];
  //            console.log(cidt, cid["PENNY"] );

  var cidt = cid["PENNY"] +
             cid["NICKEL"] +
             cid["DIME"] +
             cid["QUARTER"] +
             cid["ONE"] +
             cid["FIVE"] +
             cid["TEN"] +
             cid["TWENTY"] +
             cid["ONE HUNDRED"];

  var change = Math.max(0,cash - price);

  Object.keys(rate).forEach(function (key) {
               var n = rate[key] / change;
               change =- n * rate[key];
               console.log(n,change);
             });

  if(cash - price - cidt < 0){
    return "Insufficient funds";
  }
  if(cash - price - cidt == 0){
    return "Closed";
  }


  change = 888;
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QåUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return an array.
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return a string.
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return a string.
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return [["QUARTER", 0.50]].
// console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Insufficient Funds".
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Insufficient Funds".
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Closed".
