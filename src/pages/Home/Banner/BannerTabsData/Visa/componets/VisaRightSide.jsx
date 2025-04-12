import { Button } from "@mui/material";
import React from "react";

const VisaRightSide = () => {
  return (
    <div className="mt-0 md:mt-24">
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          py: 1,
          borderRadius: "4px",
          fontSize: "0.875rem",
          fontWeight: "400",
          textTransform: "none",
        }}
      >
        SEARCH FOR VISA
      </Button>
    </div>
  );
};

export default VisaRightSide;
