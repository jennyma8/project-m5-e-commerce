import produce from "immer";

const initialState = {
  data: null,
  status: "idle",
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_COMPANIES_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_COMPANIES_DATA": {
      console.log("[CURRENT STATE]", state);

      //I want an array of data to be attached to the initialState
      //not another object i.e. initialState.companies.companies
      // const data = Object.values(action.companies);
      const data = action.companies;

      // console.log("[DATA]", data);
      const results = produce(state, (draftState) => {
        if (!draftState.data) {
          draftState.data = {};
        }
        // draftState.companies = Object.values(action.companies);
        draftState.data = action.companies;
        draftState.status = "idle";
      });
      console.log("[NEW STATE]", results);

      return results;
    }

    case "REQUEST_COMPANIES_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    case "REQUEST_ITEMS_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_ITEMS_DATA": {
      const data = action.items.items;
      console.log("[DATA] received is:", data);
      const categories = [...new Set(data.map((i) => i.category))];
      console.log("the categories are:", categories);

      const results = produce(state, (draftState) => {
        if (!draftState.data) {
          draftState.data = {};
        }
        draftState.data = action.items;
        draftState.data.categories = categories;
        draftState.status = "idle";
      });

      console.log("[NEW STATE]:", results);
      return results;
    }

    case "REQUEST_ITEMS_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    case "REQUEST_PRODUCT_ITEM_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_PRODUCT_ITEM_DATA": {
      const data = action.productItem.item;
      console.log("[DATA] received is:", data);

      const results = produce(state, (draftState) => {
        if (!draftState.data) {
          draftState.data = {};
        }
        draftState.data.currentProduct = data[0];
        draftState.status = "idle";
      });

      console.log("[NEW STATE]:", results);
      return results;
    }

    case "REQUEST_PRODUCT_ITEM_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    default: {
      return state;
    }
  }
}
