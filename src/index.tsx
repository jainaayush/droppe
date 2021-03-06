import React,{ Suspense } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal"
import "./index.css";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import * as serviceWorker from "./serviceWorker";
const ShopApp = React.lazy(()=>import("./containers/shopApp/ShopApp").then(({ShopApp}) => ({default: ShopApp})))
Modal.setAppElement("#root")

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div><Spinner className="spinnerloader"/></div>}>
    <ShopApp />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
