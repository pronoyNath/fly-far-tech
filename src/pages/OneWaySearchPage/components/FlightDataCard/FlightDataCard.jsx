// import usBangla from "../../../../assets/useBangla.png";
import bimanBg from "../../../../assets/bimanBG.png";
import { Box, Button, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";

const FlightDataCard = () => {
  return (
    <div className="bg-white px-0 py-3 mt-5 rounded-lg">
      <Box sx={{display: "flex", gap: 0, paddingX: 2 }}>
        <Box
          className=" flex-1 flex-grow px-2"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 4 }}
        >
          <Box    sx={{height:"100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Box>
              <img
                src={bimanBg}
                className="w-[50px] h-[50px] object-cover  rounded-full p-.5 border-2 border-green-600"
                alt=""
              />
              <h3 className="text-sm">US bang airlince</h3>
              <h3 className="text-xs">BS-141</h3>
            </Box>
            <Box className="">
              <Typography className="text-center" sx={{ fontSize: "0.8rem" }}>
                1H 5Min
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                {/* Start circle */}
                <CircleIcon sx={{ fontSize: "8px" }} />

                {/* Line */}
                <Box
                  sx={{
                    height: "1px",
                    width: "7rem",
                    backgroundColor: "gray",
                  }}
                />

                {/* End circle */}
                <CircleIcon sx={{ fontSize: "8px" }} />
              </Box>
              <Typography className="text-center" sx={{ fontSize: "0.8rem" }}>
                NON STOP
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, paddingX: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                justifyContent: "space-between",
                alignItems: "start",
                // border: "1px solid",
              }}
            >
              {/* one-way left side - FROM */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  width: { xs: "100%", md: "auto" },
                  maxWidth: { xs: "none", md: "250px" },
                }}
              >
                <Typography
                  color="primary"
                  sx={{ mb: 0.5, fontSize: "2.5rem" }}
                >
                  DAC
                </Typography>
                <h3 className="text-sm">Hazrat Shahjalal Intl Airport</h3>
                <h3 className="text-sm">07:20</h3>
                <h3 className="text-primary text-xs">Mon 14 Apr 2025</h3>
              </Box>
              {/* one-way middle for icon */}
              <Box className=" mx-auto lg:my-auto hidden md:block">
                <AirplanemodeActiveIcon
                  className=""
                  sx={{
                    transform: "rotate(90deg)",
                    fontSize: "6rem",
                    color: "primary.main",
                  }}
                />
              </Box>
              {/* right side - TO */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  width: { xs: "100%", md: "auto" },
                  maxWidth: { xs: "none", md: "250px" },
                }}
              >
                <Typography
                  color="primary"
                  sx={{ mb: 0.5, fontSize: "2.5rem" }}
                >
                  {/* {departureCity} */}
                  CXB
                </Typography>
                <h3 className="text-sm">COX'S Shahjalal Intl Airport</h3>
                <h3 className="text-sm">07:20</h3>
                <h3 className="text-primary text-xs">Mon 14 Apr 2025</h3>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <h3>Refundable</h3>
              <h3>Economy</h3>
              <Typography sx={{ display: "flex", alignItems: "start", gap: 1 , color:"primary.main"}}>
                <BusinessCenterIcon className="text-primary" />
                20 kg
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* right side  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-between",
            // width: "100%"
            paddingLeft: "30px",
          }}
          className=" border-l border-primary border-dotted"
        >
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "2.5rem",
              }}
            >
              ৳ 5,539
            </Typography>
            <h3 className="line-through text-right text-primary">৳ 6,199</h3>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.dark",
                padding: "3px 10px",
              }}
            >
              Book Now
            </Button>
            <Button
              variant="text"
              sx={{
                // border: "1px solid",
                color: "secondary.dark",
                fontSize: "0.8rem",
                marginTop: "5px",
                padding: "3px 0px",
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
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FlightDataCard;
