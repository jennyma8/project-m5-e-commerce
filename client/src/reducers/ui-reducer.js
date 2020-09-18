import produce from "immer";

const initialState = {
  ScrollButton: false,
  toggle: false,
  status: "idle",
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SCROLL_BUTTON": {
      return produce(state, (draftState) => {
        draftState.ScrollButton = action.bool;
      });
    }
    default: {
      return state;
    }
  }
}
