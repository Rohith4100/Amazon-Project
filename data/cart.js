export const cart =[];

export function addToCart(productId){
  let matchingItem;

    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem=cartItem;
      }
    });
    let value=+document.querySelector(`.js-quantity-selector-${productId}`).value;
    console.log(value);
    if(matchingItem){
      matchingItem.quantity +=value;
    } else{
    cart.push({
      productId: productId,
      quantity: value
    });
  }
  let cartQuantity=0;
  cart.forEach((cartItem) => {
  cartQuantity+=cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
}