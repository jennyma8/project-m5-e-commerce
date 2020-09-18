import produce from "immer";

const initialState = {
  currentCart: [
    { name: "Watch 1", id: "6654", quantity: 1 },
    { name: "Watch 2", id: "6654", quantity: 1 },
  ],
  // currentCart: [],
  status: "idle",
  purchasing: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CART_DRAWER": {
      console.log(action);
      return produce(state, (draftState) => {
        draftState.purchasing = !draftState.purchasing;
      });
    }

    default: {
      return state;
    }
  }
}
