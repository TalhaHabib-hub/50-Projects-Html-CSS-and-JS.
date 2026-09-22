import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import counterStore from './store/index.js'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/*  to provider Talha you have to give the store */}
    <Provider store = {counterStore}>
      <App />
    </Provider>
  </StrictMode>,
);
