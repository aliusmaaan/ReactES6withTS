import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes.jsx";


const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<AppRouter />, wrapper) : false;
