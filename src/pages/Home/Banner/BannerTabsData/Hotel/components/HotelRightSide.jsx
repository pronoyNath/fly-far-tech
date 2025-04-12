import { Button, Input, Typography } from "@mui/material";
import React from "react";

const HotelRightSide = () => {
  return (
    <div className="p-5">
      <Typography color="primary" sx={{ mb: 0.5 }}>
        Guests & Rooms
      </Typography>
      <div className="text-gray-600 bg-secondary py-2 px-5 text-xs rounded-lg w-full mt-1 mb-5">
        1 ROOM, 1 GUEST, 1 ADULTS
      </div>
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
        SEARCH FOR HOTEL
      </Button>
    </div>
  );
};

export default HotelRightSide;
