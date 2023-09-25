import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router5";
import createRouter from "./router/create-router";

const router = createRouter();
const root = ReactDOM.createRoot(document.getElementById("root"));

router.start(() => {
  root.render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
