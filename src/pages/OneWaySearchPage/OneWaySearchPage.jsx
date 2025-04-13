import usBangla from "../../assets/useBangla.png";
import bimanBg from "../../assets/bimanBG.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import FilterSide from "./components/FilterSide";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import FlightDataCard from "./components/FlightDataCard/FlightDataCard";
import MobileFilter from "./Filters/MobileFilter/MobileFilter";

const OneWaySearchPage = () => {
  return (
    <div className="max-w-[75rem] mx-auto">
      <Stack direction="row" spacing={2} className="mx-5">
        {/* filter */}
        <Box sx={{display: { xs: "none", lg: "block" },}}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "7px",
              padding: "15px",
              my: "20px",
              // minHeight: "100%",
              width: "230px",
            }}
          >
            <FilterSide />
          </Box>
        </Box>

        {/* search result */}
        <div style={{ flex: 1 }}>
          {" "}
          {/* allows to stretch full width */}
          <Box
            sx={{
              // backgroundColor: "white",
              // borderRadius: "10px",
              // padding: "20px",
              my: "20px",
              // minHeight: "100vh",
              // display: "flex",
              // flexDirection: "column",
            }}
          >
            {/* top bar */}
            <Box
              sx={{
                backgroundColor: "primary.main",
                width: "100%",
                px: "10px",
                py: "7px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <Box>
                  <AirplanemodeActiveIcon
                    className="p-2 rounded-full"
                    sx={{
                      transform: "rotate(45deg)",
                      backgroundColor: "secondary.dark",
                      color: "secondary.main",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </Box>
                <Box color={"white"}>
                  <Typography>
                    DAC - CXB | Total
                    <span className="text-gray-600 mx-2">55</span>
                    Flights
                  </Typography>
                  <Typography>
                    14 Apr 2025 - 16 Apr 2025 | 1 Travelers
                  </Typography>
                </Box>
              </Box>
              <Box
               
                sx={{ display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: {xs:"5px", md:"10px"} }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.dark",
                    color: "white",
                    borderRadius: "7px",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                >
                  MODIFY SEARCH
                </Button>
                {/* Mobile Filter Button */}
                <MobileFilter />
              </Box>
            </Box>

            {/* Add your data/content here */}
            <Box sx={{ flex: 1 }}>{/* Your search result content */}</Box>
          </Box>
          {/* second top bar  */}
          <Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: "100%",
                px: "10px",
                py: "7px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                <img
                  src={usBangla}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
                <Box cllassName="text-xs">
                  <h3 className="text-sm">BS</h3>
                  <h3 className="text-primary text-sm">BDT 5,539</h3>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src={bimanBg}
                  className="w-[30px] h-[30px] object-cover"
                  alt=""
                />
                <Box cllassName="text-xs">
                  <h3 className="text-sm">BG</h3>
                  <h3 className="text-primary text-sm">BDT 5,590</h3>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* data show  */}
          <Box>
            <FlightDataCard />
            <FlightDataCard />
          </Box>
        </div>
      </Stack>
    </div>
  );
};

export default OneWaySearchPage;
