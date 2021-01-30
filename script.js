// document
//   .getElementById("firstClassPlusbtn")
//   .addEventListener("click", function () {
//     firstClass(true);
// var setNumberCount = document.getElementById("firstClassInput");
// var setNumberValue = parseInt(setNumberCount.value);
// var setCount = setNumberValue + 1;
// setNumberCount.value = setCount;
// document.getElementById("firstClassInput").innerText = setCount;
//   });
// document
//   .getElementById("firstClassMinusbtn")
//   .addEventListener("click", function () {
//     firstClass(false);
// var setNumberCount = document.getElementById("firstClassInput");
// var setNumberValue = parseInt(setNumberCount.value);
// var setCount = setNumberValue - 1;
// setNumberCount.value = setCount;
// document.getElementById("firstClassInput").innerText = setCount;
//   });
function firstClass(cl, Isincrease) {
  var sitNumberCount = document.getElementById(cl + "ClassInput");
  var sitNumberValue = parseInt(sitNumberCount.value);
  //   var setCount = setNumberValue - 1;
  let sitCount = sitNumberValue;
  if (Isincrease == true) {
    sitCount = sitNumberValue + 1;
  } else if (Isincrease == false && sitCount > 0) {
    sitCount = sitNumberValue - 1;
  }
  sitNumberCount.value = sitCount;
  document.getElementById(cl + "ClassInput").innerText = sitCount;
}
