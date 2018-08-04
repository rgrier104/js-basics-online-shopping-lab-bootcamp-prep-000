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
  } else {
    for(var i = 0; i < cart.length - 1; i++) {
      var item = cart[i]
      console.log(item)
      var output = `In your cart, you have `
      for (var itemName in item) {
        output = output + `${item[itemName]} at ,`
      }
    } return output
  }
}
console.log(item)

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
