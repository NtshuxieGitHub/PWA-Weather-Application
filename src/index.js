import React from "react";
import ReactDOM from "react-dom/client"; // Use the new `react-dom/client` module
import App from "./App"; // Assuming you have an App component

// Get the root DOM node
const rootElement = document.getElementById("root");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render your App component
root.render(<App />);
