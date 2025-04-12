import { Button } from "@mui/material";
import React from "react";

const TourRightSide = () => {
  return (
    <div className="">
      <div className="space-y-2  h-full mt-0 md:mt-16">
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
        SEARCH ALL TOURS
      </Button>
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
        SEARCH FOR TOUR
      </Button>
      </div>
    </div>
  );
};

export default TourRightSide;
