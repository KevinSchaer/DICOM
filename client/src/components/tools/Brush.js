import React from "react";
import BrushIcon from "@mui/icons-material/Brush";

const Brush = ( onBrushClick ) => {
    return (
    <BrushIcon onClick={onBrushClick} fontSize="medium"  color="primary" />
    )
}

export default Brush;