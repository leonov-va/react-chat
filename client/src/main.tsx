import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../src/store";
import App from "./App";
import "./index.css";
import Modal from "react-modal";

const appElement = document.getElementById("root") as HTMLElement;

Modal.setAppElement(appElement);

ReactDOM.createRoot(appElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
