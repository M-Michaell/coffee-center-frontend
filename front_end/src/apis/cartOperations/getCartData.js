export function InitialCartAPI(data,session) {
  const cartItems = data.session.cart_items || [];

  const transformedCartItems = cartItems.map((cartItem) => ({
    product: cartItem.product,
    quantity: cartItem.quantity >= cartItem.product.quantity
      ? cartItem.product.quantity
      : cartItem.quantity,
  }));

  return transformedCartItems;
}
