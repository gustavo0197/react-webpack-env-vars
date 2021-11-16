import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Create the div element to mount the chat app
const element = document.createElement("div");
element.setAttribute("id", "chat-app"); // Set an id
const body = document.getElementsByTagName("body")[0];

body.appendChild(element);

ReactDOM.render(<App />, document.getElementById("chat-app"));
