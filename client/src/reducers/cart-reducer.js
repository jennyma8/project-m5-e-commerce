import produce from "immer";

const initialState = {
  // currentCart: [
  //   { name: "Watch 1", id: "6654", quantity: 1 },
  //   { name: "Watch 2", id: "6654", quantity: 1 },
  // ],
  totalPrice: 0,
  totalQuantity: 0,
  currentCart: [],
  status: "idle",
  purchasing: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CART_DRAWER": {
      return produce(state, (draftState) => {
        draftState.purchasing = !draftState.purchasing;
      });
    }

    // ######################## REQUEST CART ITEMS ##################

    case "REQUEST_CART_ITEMS": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_CART_ITEMS": {
      // console.log("[GET CART]:", action.items);

      // const itemToAdd = Object.values(action.items.CART);
      const newTotal = action.items.totalPrice;
      const newQuantity = action.items.totalQuantity;
      const results = produce(state, (draftState) => {
        if (action.items.CART) {
          draftState.currentCart = Object.values(action.items.CART);
        }
        draftState.totalPrice = newTotal;
        draftState.totalQuantity = newQuantity;
        draftState.status = "idle";
      });

      return results;
    }

    case "REQUEST_CART_ITEMS_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    // ######################### MODIFY CART ITEMS ##################

    case "ADD_CART_ITEM": {
      return state;
    }

    case "UPDATE_CART_ITEM": {
      return state;
    }

    case "DELETE_CART_ITEM": {
      return state;
    }

    case "DELETE_ALL_CART_ITEMS": {
      return state;
    }

    // Really didnt need to use this since receiving the new cart
    // items already updates the redux store
    case "POST_CART_ITEM": {
      // console.log("[INCOMING CART ITEM]", action.item);
      const itemToAdd = action.item.CART;
      const newTotal = action.item.totalPrice;
      const newQuantity = action.item.totalQuantity;
      // console.log("[ITEM TO ADD]", itemToAdd);
      const results = produce(state, (draftState) => {
        draftState.currentCart = itemToAdd;
        draftState.totalPrice = newTotal;
        draftState.totalQuantity = newQuantity;
      });
      // console.log("[NEW CURRENT CART]", results);
      return results;
    }

    default: {
      return state;
    }
  }
}
