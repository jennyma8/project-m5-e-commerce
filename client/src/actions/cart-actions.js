export const toggleCartDrawer = () => ({
  type: "TOGGLE_CART_DRAWER",
});

// export const addCartItem = (item) => ({
//   type: "ADD_CART_ITEM",
//   item,
// });

// ################## FETCH CART ITEMS ###########################

export const requestCartItems = () => ({
  type: "REQUEST_CART_ITEMS",
});

export const receiveCartItems = (items) => ({
  type: "RECEIVE_CART_ITEMS",
  items,
});

export const requestCartItemsError = () => ({
  type: "REQUEST_CART_ITEMS_ERROR",
});

// ################## MODIFY CART ITEMS ###########################

export const addCartItem = (item) => ({
  type: "POST_CART_ITEM",
  item,
});
