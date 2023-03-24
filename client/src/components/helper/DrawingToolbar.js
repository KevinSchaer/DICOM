import React from "react";
import Toolbar from "@mui/material/Toolbar";
import BrushIcon from "@mui/icons-material/Brush";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StraightenIcon from "@mui/icons-material/Straighten";

const DrawingToolbar = ({ onBrushClick, onCircleClick, onRulerClick }) => {
  return (
    <Toolbar>
      <BrushIcon onClick={onBrushClick} fontSize="medium" />
      <AddCircleOutlineIcon onClick={onCircleClick} fontSize="medium" />
      <StraightenIcon onClick={onRulerClick} fontSize="medium" />
    </Toolbar>
  );
}

export default DrawingToolbar;
