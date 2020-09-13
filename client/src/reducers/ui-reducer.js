import produce from "immer";

const initialState = {
  toggle: false,
  status: "idle",
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
