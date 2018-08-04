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
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else {
    var output = `In your cart, you have `
    for(var i = 0; i < cart.length; i++) {
      if(i < cart.length - 1){
      output += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    } else {
      output += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  } return output
}
}

function total() {
  var totalValue = 0
  for(var i = 0; i < cart.length; i++) {
    totalValue = totalValue + cart[i].itemPrice
  } return totalValue
}

function removeFromCart(item) {
  if (cart.includes(item)===false){
    return `That item is not in your cart.`
  } else {
  for (var i = 0; i < cart.length; i++){
    var removed = cart.splice(i,2)
  }
} return cart
}


function placeOrder(cardNumber) {
  // write your code here
}
