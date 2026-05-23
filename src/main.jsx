import React from "react";
import { createRoot } from "react-dom/client";
import FlamingoGuestHouse from "./FlamingoGuestHouse.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FlamingoGuestHouse />
  </React.StrictMode>,
);
