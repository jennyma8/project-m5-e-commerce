import React from "react";
import Layout from "../components/Layout";
import GlobalStyles from "../components/GlobalStyles";
import { Provider } from "react-redux";

import configureStore from "./store";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Layout />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
