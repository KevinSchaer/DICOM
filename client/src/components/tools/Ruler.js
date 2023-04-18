import React from "react";
import StraightenIcon from "@mui/icons-material/Straighten";

const Ruler = ( onRulerClick ) => {
    return (
        <StraightenIcon onClick={onRulerClick} fontSize="medium"  color="primary" />
  )
}

export default Ruler;