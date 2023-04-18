import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Circle = ( onCircleClick ) => {
    return (
    <AddCircleOutlineIcon onClick={onCircleClick} fontSize="medium"  color="primary" />
    )
}

export default Circle;