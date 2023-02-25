import React from "react";
import * as ReactDOMClient from "react-dom/client";

const inputClick = () => console.log("Click");
const mouseOver = () => console.log("Mouse Over");

const helpText = "Help text!";

const root = document.getElementById("root");
const input = (
  <div className="name">
    <h1>{helpText}</h1>
    <input
      placeholder={helpText}
      onClick={inputClick}
      onMouseEnter={mouseOver}
    />
    <p>{helpText == "Help text!" ? "Yes" : "No"}</p>
  </div>
);

const app = ReactDOMClient.createRoot(root);
app.render(input);
