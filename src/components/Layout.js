import * as React from "react";
import { Navbar } from "./Navbar";
import "../styles/global.css";

export const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="content">{children}</div>
    <footer>
      <p>Copyright 2024 Michał</p>
    </footer>
  </div>
);
