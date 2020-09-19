export const toggleCartDrawer = () => ({
  type: "TOGGLE_CART_DRAWER",
});

export const addCartItem = (item) => ({
  type: "ADD_CART_ITEM",
  item,
});

export const postCartItem = () => ({
  type: "POST_CART_ITEM",
});

export const getCartItems = () => ({
  type: "GET_CART_ITEM",
});
