import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import DrawingToolbar from "../tools/DrawingToolbar";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      style={{ top: "auto", bottom: 0, background: "#F5F5F5" }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <DrawingToolbar />
      </Toolbar>
    </AppBar>
  );
};

export default Footer
