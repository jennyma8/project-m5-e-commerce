export const toggleCartDrawer = () => ({
  type: "TOGGLE_CART_DRAWER",
});

export const addCartItem = (item) => ({
  type: "ADD_CART_ITEM",
  item,
});
