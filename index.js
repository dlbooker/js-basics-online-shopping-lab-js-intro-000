var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: price});
  console.log(item + ' has been added to your cart.');//this will not work if interpolate item as ${item}
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
      for (var item in cart) {
        console.log('In your cart you have ' + Object.keys(item) + ' at ' + cart[item] + '.');
      }
   return cart;
  }
  else {
    console.log('Your shopping cart is empty.')
    }
}

function removeFromCart(item) {
      for (var item in cart) {
        if (cart.hasOwnProperty(item)) {
        delete cart[item];
        return cart;
        }
        else {
          console.log('That item is not in your cart.');
        }
      }
}

/*function placeOrder(cardNumber) {
  if cardNumber.isNaN() {
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
  else {
    console.log('Your total cost is $${total()}, which will be charged to the card ${cardNumber}.');
    cart = [];
    return cart;
  }
}
*/
