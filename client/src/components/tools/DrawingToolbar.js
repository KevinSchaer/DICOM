import React from "react";
import Box from '@mui/system/Box';
import Brush from "./Brush";
import Circle from "./Circle";
import Ruler from "./Ruler";

const DrawingToolbar = () => {
  return (
    <Box>
      <Brush />
      <Circle />
      <Ruler />
    </Box>
  );
};

export default DrawingToolbar;
