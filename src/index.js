import React from "react";
import ReactDOM from "react-dom";

const myStyle = {
  color: "green",
  // CSS = kebab-cased / JS = CamelCased
  fontSize: "3rem",
  border: "1px solid black"
};

// update of color (on the fly)
myStyle.color = "blue";

ReactDOM.render(
  <h1 style={myStyle}>Hello World!</h1>,
  document.getElementById("root")
);
