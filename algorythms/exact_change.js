
Array.prototype.xxx = function(price, cash, cid){
    var pay = Math.max(0, cash - price);
    var ans = [];
    var x = {};
    var rate = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN",10],
      ["FIVE",5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
    ];
    for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < rate.length; j++) {
        if(this[i][0]== rate[j][0]){
          //rate[j].push(this[i][1]); //total value
          //rate[j].push(Math.round(this[i][1] / rate[j][1],0)); //units




        }
      }

    }

    console.log(pay);
    return ans;
};


// console.log([["PENNY",1.02],["NICKEL",3.05],["FIVE",15]].xxx());




Array.prototype.toHashMap = function(){
        var _hashMap = {};//, getKey = isFunction(key)?key: function(_obj){return _obj[key];};
        this.forEach(function (obj){
            _hashMap[obj[0]] = obj[1];
        });
        return _hashMap;
};

function checkCashRegister(price, cash, cid) {
   return cid.xxx(Math.max(0,cash - price));


  // cid = cid.toHashMap();

  var rate = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN",10],
    ["FIVE",5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];
  var cidt = cid["PENNY"] +
             cid["NICKEL"] +
             cid["DIME"] +
             cid["QUARTER"] +
             cid["ONE"] +
             cid["FIVE"] +
             cid["TEN"] +
             cid["TWENTY"] +
             cid["ONE HUNDRED"];

  // console.log(cidt);

  var still_owe = Math.max(0,cash - price);
  var change = [];

  for (var i = 0; i < rate.length; i++) {
    var lab  = rate[i][0];
    var dem = rate[i][1];
    var n_in_drawer = Math.round(rate[i][1],2);

    // console.log(lab,dem, n_in_drawer);

    // var n_take_from_drawer = Math.min(n_in_drawer, Math.round(still_owe / dem,2) )

    // if(n_take_from_drawer > 0){
      // change.push([dem, n_take_from_drawer * dem]);
      // still_owe =- n_take_from_drawer * dem;
    // }
    if (cash - price - still_owe == 0){
      // return change;
    }

  }

  if(cash - price - still_owe < 0){
    return "Insufficient funds";
  }
  if(cash - price - still_owe == 0){
    return "Closed";
  }

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

//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return an array.
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return a string.
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return a string.
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return [["QUARTER", 0.50]].
// console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Insufficient Funds".
//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Insufficient Funds".
//console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return "Closed".
