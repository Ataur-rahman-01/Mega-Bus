// SIT CONTROL
function sitChange(Class, Isincrease) {
  var sitNumberCount = document.getElementById(Class + "ClassInput");
  var sitNumberValue = parseInt(sitNumberCount.value);
  let sitCount = sitNumberValue;
  if (Isincrease == true) {
    sitCount = sitNumberValue + 1;
  } else if (Isincrease == false && sitCount > 0) {
    sitCount = sitNumberValue - 1;
  }
  sitNumberCount.value = sitCount;
  document.getElementById(Class + "ClassInput").innerText = sitCount;
  calculateTotal();
}

// CALCULATION
function calculateTotal() {
  const first = document.getElementById("firstClassInput").value;
  const sitFirstClass = parseInt(first);
  const ecomony = document.getElementById("economyClassInput").value;
  const sitEconomyClass = parseInt(ecomony);
  var totalSub = sitFirstClass * 150 + sitEconomyClass * 100;
  document.getElementById("subTotal").innerText = totalSub;
  var vat = totalSub * 0.1;
  document.getElementById("vat").innerText = vat;
  var total = totalSub + vat;
  document.getElementById("total-cost").innerText = total;
}
// HIDE SECTION
document.getElementById("bookNow").addEventListener("click", function () {
  document.getElementById("mainSection").style.display = "none";
  document.getElementById("thankSection").style.display = "block";
});
