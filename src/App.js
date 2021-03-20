import React from "react";
import { Router } from "@reach/router";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./pages/Home";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
}
