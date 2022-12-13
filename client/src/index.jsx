import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store, { persistor } from "./utils/redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode> Makes the React to render twice
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>
  //</React.StrictMode>
);
