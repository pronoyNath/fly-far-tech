import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import FilterSide from "../../FilterSide";

export default function MobileFilter() {
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
          padding: "15px",
          my: "20px",
          px: "20px",
          // minHeight: "100%",
          width: { xs: "250px", sm: "350px" },
        }}
      >
        <FilterSide />
      </Box>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        variant="contained"
        sx={{
          display: { xs: "block", lg: "none" },
          backgroundColor: "secondary.dark",
          color: "white",
          width: "100%",
          borderRadius: "7px",
          "&:hover": {
            backgroundColor: "secondary.dark",
          },
        }}
      >
        FILTER
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
