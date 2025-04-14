import * as React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import FlightDataCard from "../FlightDataCard/FlightDataCard";
import { Typography } from "@mui/material";
import DetailsTable from "./DetailsTable";

export default function FlightDetailsModal() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <div className="">
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "7px",
          //   padding: "15px",
          //   my: "20px",
          px: "20px",
          // minHeight: "100%",
          width: { xs: "450px", sm: "auto" },
        }}
      >
        <FlightDataCard />
        <Box sx={{ backgroundColor: "secondary.main", padding: "5px", width:"100%" }}>
          <Typography fontWeight={"600"} color="primary.main">FARE SUMMERY GBDGB</Typography>
        </Box>
        <Box sx={{marginY: 2}}>
            <DetailsTable/>
        </Box>
      </Box>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        variant="text"
        sx={{
          color: "secondary.dark",
          fontSize: "0.8rem",
          marginTop: "5px",
          padding: "3px 0px",
          width: { xs: "100%", sm: "auto" },
        }}
        endIcon={
          <ArrowRightIcon
            sx={{
              color: "secondary.dark",
              width: "30px",
              height: "30px",
              marginLeft: "-10px",
            }}
          />
        }
      >
        FLIGHT DETAILS
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
