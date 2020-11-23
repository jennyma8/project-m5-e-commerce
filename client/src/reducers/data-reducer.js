import produce from "immer";

const initialState = {
  allProducts: null,
  currentProduct: null,
  categories: null,
  status: "idle",
  companies: null,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    // ####################### ALL COMPANIES #########################

    case "REQUEST_COMPANIES_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_COMPANIES_DATA": {
      // console.log("[CURRENT STATE]", state);

      //I want an array of data to be attached to the initialState
      //not another object i.e. initialState.companies.companies
      // const data = Object.values(action.companies);
      // const data = action.companies;

      // console.log("[DATA]", data);
      const results = produce(state, (draftState) => {
        if (!draftState.companies) {
          draftState.companies = {};
        }
        // draftState.companies = Object.values(action.companies);
        draftState.companies = action.companies.companies;
        draftState.status = "idle";
      });
      // console.log("[NEW STATE]", results);

      return results;
    }

    case "REQUEST_COMPANIES_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    // ############################ ALL ITEMS ###########################

    case "REQUEST_ITEMS_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_ITEMS_DATA": {
      // const data = action.items.items;
      // console.log("[DATA] received is:", data);
      // const categories = [...new Set(data.map((i) => i.category))];
      // console.log("the categories are:", categories);

      const results = produce(state, (draftState) => {
        if (!draftState.allProducts) {
          draftState.allProducts = {};
        }
        draftState.allProducts = action.items;
        // draftState.categories = categories;
        draftState.status = "idle";
      });

      // console.log("[NEW STATE]:", results);
      return results;
    }

    case "REQUEST_ITEMS_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    // ############################ SINGLE PRODUCT #######################

    case "REQUEST_PRODUCT_ITEM_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_PRODUCT_ITEM_DATA": {
      const data = action.productItem.item;
      const company = action.productItem.company;
      const results = produce(state, (draftState) => {
        if (!draftState.currentProduct) {
          draftState.currentProduct = {};
        }
        draftState.currentProduct = data[0];
        draftState.currentProduct.company = company[0];
        draftState.status = "idle";
      });
      return results;
    }

    case "REQUEST_PRODUCT_ITEM_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    // ######################### ALL CATEGORIES #####################

    case "REQUEST_CATEGORIES_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_CATEGORIES_DATA": {
      const data = action.categories;
      // console.log("[RECEIVE CATEGORIES DATA]", data);
      const results = produce(state, (draftState) => {
        if (!draftState.categories) {
          draftState.categories = {};
        }
        draftState.categories = data;
        draftState.status = "idle";
      });
      // console.log("[RECEIVE CATEGORIES NEW STATE]", results);
      return results;
    }

    case "REQUEST_CATEGORIES_DATA_ERROR": {
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
