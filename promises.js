var amount = 0;
console.log("amount", amount);

setTimeout(function () {
  var COLLECTED_AMOUNT = 3000;
  amount = amount + COLLECTED_AMOUNT;
}, 2000)

setTimeout(function () {
  var COLLECTED_AMOUNT = 5000;
  amount = amount + COLLECTED_AMOUNT;
}, 5000)

function collectAmount(amount, time) {
  return new promise(function (successor, failure) {
    setTimeout(function () {
      successor(amount)
    }, time)
  })
}
collectAmounnt(8000, 2000).then(function (successvalue) {
  console.log("amount", successvalue)
})
console.log("amount", amount);