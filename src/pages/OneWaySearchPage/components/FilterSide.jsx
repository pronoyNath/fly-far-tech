import { Box, Button, Stack, Typography } from "@mui/material";
import AccordionFilterList from "./AccordionFilterList/AccordionFilterList";

const FilterSide = () => {
  return (
    <div className=" ">
      <Stack direction={"row"} spacing={1} width={"100%"}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>FILTER</Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "2px",
              // px: "10px",
              py: "4px",
              width: "100%",
              mt: "15px",
            }}
            color="primary"
          >
            CHEAPEST
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Typography>RESET</Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "2px",
              //   px: "10px",
              py: "4px",
              width: "100%",
              mt: "15px",
            }}
            color="secondary"
          >
            FATEST
          </Button>
        </Box>
      </Stack>

      {/* accordion filter list  */}
      <Box className="mt-5">
        <AccordionFilterList />
      </Box>
    </div>
  );
};

export default FilterSide;
