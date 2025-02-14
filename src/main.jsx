import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// import Errorboundry from "./Errorboundry.jsx";
import ErrorboundryClass from "./ErrorboundryClass.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorboundryClass>
        <App />
      </ErrorboundryClass>
    </BrowserRouter>
  </StrictMode>
);
