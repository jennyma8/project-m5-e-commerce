import produce from "immer";

const initialState = {
  // currentCart: [item1: {id: "6654", quantity: 1}, item2,item3]
  status: "idle",
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
