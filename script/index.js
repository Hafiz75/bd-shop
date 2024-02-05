/* this function gain name and value from element */
function gainNameAndValue(name, price) {
  let itemName = document.getElementById(name).textContent;
  let itemPrice = document.getElementById(price).textContent;
  return [itemName, itemPrice];
}
/* this function gain value from element */
function gainValue(price) {
  let totalPriceContainer = document.getElementById(price);
  let totalPriceString = totalPriceContainer.textContent;
  let totalPriceNumber = parseFloat(totalPriceString);
  return totalPriceNumber;
}
/* collect value and calculation then push it */
function setValue(whoseElement, value) {
  let element = document.getElementById(whoseElement);
  /* here collect previous value for calculation */
  let stringValueOfElement = element.textContent;
  let numberValueFromElement = parseFloat(stringValueOfElement);
  let total = numberValueFromElement + value;
  element.innerText = total.toFixed(2);
  let returnValue = numberValueFromElement + value;
  return returnValue;
}
/* disabled button related task and its wrap by a function bcz we call this condition just call to the function */
function disabledBtn(totalPriceFromListener) {
  if (totalPriceFromListener >= 200) {
    let applyBtn = document.getElementById("applyBtn");
    applyBtn.removeAttribute("disabled");
  }
}

/* this variable use for update the number of item list */
var itemNumber = 0;
/* this function is update to the product list container */
function productList(where, itemNumber, product) {
  let productListContainer = document.getElementById(where);
  let createList = document.createElement("li");
  createList.textContent += itemNumber + ". " + product;
  productListContainer.appendChild(createList);
}

// <<<<<<<<<<<<<<<,,,,,,,,,,,,,>>>>>>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<<<<,,,,,,,,,,,,,>>>>>>>>>>>>>>>>>>>>>>
//            start of discount related task

/* this variable use for gaining totalPrice from listener  */
let totalPriceFromListener;
/* this function use for gaining totalPrice from Listener */
function collectValueFromListener(value) {
  totalPriceFromListener = value;
  return totalPriceFromListener;
}

/* this function collect coupon code and discount calculate */
function calculateDiscount(inpCoupon, where) {
  let coupon = document.getElementById(inpCoupon);
  let couponString = coupon.value;
  let discountDis = document.getElementById(where);
  let calculateDiscountAmount;
  if (couponString === "SELL200") {
    /* discount calculation */
    calculateDiscountAmount = (totalPriceFromListener * 20) / 100;
    discountDis.textContent = calculateDiscountAmount.toFixed(2);
    /* calculate total price after discount */
    /* select total price container */
    let totalPrice = gainValue("totalPrice");
    let priceAfterDiscount = totalPrice - calculateDiscountAmount;
    /* and push it in total price container */
    document.getElementById("total").textContent =
      priceAfterDiscount.toFixed(2);

      coupon.value = ''
  }
}

/* this listener is calculate discount */
document.getElementById("applyBtn").addEventListener("click", function () {
  let val = calculateDiscount("couponCode", "discountContainer");
});

// <<<<<<<<<<<<<<<,,,,,,,,,,,,,>>>>>>>>>>>>>>>>>>>>>>
// <<<<<<<<<<<<<<<,,,,,,,,,,,,,>>>>>>>>>>>>>>>>>>>>>>
//            end of discount related task

/* this function execute all event task.this argument value pass in when the function call on onclick event in html */
function Listener(arguItemName, arguItemPrice) {
  /* this variable use for update number of item list */
  itemNumber++;
  /* result is an array, definition from gainNameAndValue function.This array contain item name and price */
  let result = gainNameAndValue(arguItemName, arguItemPrice);
  let itemName = result[0];
  let itemPrice = parseFloat(result[1]);

  /* set update price in calculate container */
  let total = setValue("total", itemPrice);
  let totalPrice = setValue("totalPrice", itemPrice);
  /* disable button enable */
  disabledBtn(total);
  /* update product list container */
  productList("productListContainer", itemNumber, itemName);
  /* this function use for discount calculate and update */
  collectValueFromListener(totalPrice);
}
/* page reload  */
function goHome() {
  window.location.href = "index.html";
}
