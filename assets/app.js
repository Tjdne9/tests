import "./app.css";

console.log("hello, world!");
document.getElementById("webpack").innerHTML = "Hello from Webpack!";

export function greet(text) {
    alert('greet with text' + text);
}

import("./chunk");
