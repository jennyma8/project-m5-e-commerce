export const toggleCartDrawer = () => ({
  type: "TOGGLE_CART_DRAWER",
});
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

export const postCartItem = (item) => ({
  type: "POST_CART_ITEM",
  item,
});

export const addCartItem = () => ({
  type: "ADD_CART_ITEM",
});

export const updateCartItem = () => ({
  type: "UPDATE_CART_ITEM",
});

export const deleteAllCartItems = () => ({
  type: "DELETE_ALL_CART_ITEMS",
});

export const deleteCartItem = () => ({
  type: "DELETE_CART_ITEM",
});
