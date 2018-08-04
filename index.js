var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemObj = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
cart.push(itemObj)
return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}.`
  }
  else {
    for(var i = 0; i < cart.length - 1; i++) {
      var output = [`In your cart, you have `]
      output = output + `${cart[i].itemName} at ${cart[i].itemPrice},`
    }
  } return output
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
