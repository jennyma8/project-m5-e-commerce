import produce from "immer";

const initialState = {
  // currentCart: [
  //   { name: "Watch 1", id: "6654", quantity: 1 },
  //   { name: "Watch 2", id: "6654", quantity: 1 },
  // ],
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

    case "ADD_CART_ITEM": {
      console.log(action);
      return produce(state, (draftState) => {
        draftState.currentCart.push(action.item);
      });
    }

    case "POST_CART_ITEM": {
      console.log("[CART ITEM ADDED]", action);
      const data = action.item;
      console.log("[CART ITEM DATA]", data);
      return produce(state, (draftState) => {
        draftState.currentCart.push(data);
      });
    }

    case "REQUEST_CART_ITEMS": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_CART_ITEMS": {
      console.log("[CART ITEMS RECEIVED]", action);
      const data = action.items.CART;
      return produce(state, (draftState) => {
        draftState.currentCart = data;
        draftState.status = "loading";
      });
    }

    default: {
      return state;
    }
  }
}
