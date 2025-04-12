import { Box, Stack } from "@mui/material";
import FilterSide from "./components/FilterSide";

const OneWaySearchPage = () => {
  return (
    <div className=" max-w-[75rem] mx-auto">
      <Stack direction="row" spacing={2} className="mx-5">
      {/* filter  */}
        <div>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "7px",
              padding: "15px",
              my: "20px",
              minHeight: "100vh",
              width: "230px",
            }}
          >
            <FilterSide/>
          </Box>
        </div>
        {/* search result [data]*/}
        <div>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              my: "20px",
              height: "100vh",
              width: "100%",
            }}
          >
           lorem1000 
          </Box>
        </div>
      </Stack>
    </div>
  );
};

export default OneWaySearchPage;
