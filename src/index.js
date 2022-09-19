import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Application from "./application";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
