import produce from "immer";

const initialState = {
  currentCart: null,
  status: "idle",
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
