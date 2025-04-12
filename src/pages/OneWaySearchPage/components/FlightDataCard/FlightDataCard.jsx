// import usBangla from "../../../assets/useBangla.png";
import bimanBg from "../../../../assets/bimanBG.png";
import { Box, Button, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const FlightDataCard = () => {
  return (
    <div className="bg-white p-5 mt-5 rounded-lg">
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box className="flex-1 flex-grow" sx={{flexGrow:1 ,display: "flex", alignItems: "center", gap: 4 }}>
          <Box>
            <img
              src={bimanBg}
              className="w-[50px] h-[50px] object-cover border-2 rounded-full border-green-600"
              alt=""
            />
            <h3 className="text-sm">US bang airlince</h3>
            <h3 className="text-xs">BS-141</h3>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                justifyContent: "space-between",
                alignItems: "start",
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
              <Box className="mx-auto lg:my-auto hidden md:block">
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
                  alignItems: "right",
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
                marginTop: 2,
              }}
            >
              <h3>Refundable</h3>
              <h3>Economy</h3>
              <Typography sx={{ display: "flex", alignItems: "start", gap: 1 }}>
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
            paddingX: "30px"
          }}
          className=" border-l border-primary border-dotted"
        >
          <Box sx={{
            flexGrow: 1
          }}>
            <Typography
              sx={{
                color: "primary",
                fontSize: "2.5rem",
              }}
            >
              ৳ 5,539
            </Typography>
            <h3 className="line-through">৳ 6,199</h3>
          </Box>
          <Box sx={{display:"flex", flexDirection: "column", alignItems: "end"}}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.dark",
              }}
            >
              Book Now
            </Button>
            <Button
              variant="text"
              sx={{
                color: "secondary.dark",
                fontSize: "0.8rem",
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
