import usBangla from "../../../../assets/useBangla.png";
// import bimanBg from "../../../../assets/bimanBG.png";
import { Box, Button, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useState } from "react";

const FlightDataCard = () => {
  const [flightsData, setFlightsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./mockData/ONEWAY.json")
      .then((res) => res.json())
      .then((data) => {
        setFlightsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white px-0 py-3 mt-5 rounded-lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          paddingX: 2,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "start", lg: "center" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              // border: "dotted 1px",
              display: "flex",
              flexDirection: { xs: "row", lg: "column" },
              justifyContent: "space-between",
              alignItems: { xs: "center", lg: "flex-start" },
              width: { xs: "100%", md: "auto" },
              height: { xs: "auto", lg: "100%" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", lg: "column" },
                alignItems: { xs: "center", lg: "flex-start" },
                gap: { xs: 1 },
                textAlign: { xs: "left" },
              }}
            >
              <img
                src={usBangla}
                className="w-[50px] h-[50px] object-cover rounded-full p-.5 border-2 border-green-600"
                alt=""
              />
              <Box>
                <h3 className="text-sm">{flightsData?.careerName}</h3>
                <h3 className="text-xs">{flightsData?.career}-141</h3>
              </Box>
            </Box>
            <Box sx={{}}>
              <Typography className="text-center" sx={{ fontSize: "0.8rem" }}>
                {flightsData?.goflightduration}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <CircleIcon sx={{ fontSize: "8px" }} />
                <Box
                  sx={{
                    height: "1px",
                    width: { xs: "4rem", sm: "7rem" },
                    backgroundColor: "gray",
                  }}
                />
                <CircleIcon sx={{ fontSize: "8px" }} />
              </Box>
              <Typography className="text-center" sx={{ fontSize: "0.8rem" }}>
                NON STOP
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, paddingX: { xs: 0, sm: 2 }, width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row" },
                gap: 2,
                justifyContent: "space-between",
                alignItems: { xs: "center", md: "start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {/* one-way left side - FROM */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  width: "100%",
                }}
              >
                <Typography
                  color="primary"
                  sx={{ mb: 0.5, fontSize: "2.5rem" }}
                >
                  {flightsData?.godeparture}
                </Typography>
                <h3 className="text-sm">
                  {flightsData?.segments.go[0]?.departureAirport}
                </h3>
                <h3 className="text-sm">
                  {flightsData?.segments.go[0]?.departureTime && (
                    <span>
                      {new Date(
                        flightsData.segments.go[0].departureTime
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  )}
                </h3>
                <h3 className="text-primary text-xs">
                  {flightsData?.segments.go[0]?.departureTime && (
                    <span>
                      {(() => {
                        const date = new Date(
                          flightsData.segments.go[0].departureTime
                        );
                        const weekday = date.toLocaleDateString("en-US", {
                          weekday: "short",
                        });
                        const day = date.getDate().toString().padStart(2, "0");
                        const month = date.toLocaleDateString("en-US", {
                          month: "short",
                        });
                        const year = date.getFullYear();
                        return `${weekday} ${day} ${month} ${year}`;
                      })()}
                    </span>
                  )}
                </h3>
              </Box>
              {/* one-way middle for icon */}
              <Box sx={{ my: "auto" }}>
                <AirplanemodeActiveIcon
                  sx={{
                    transform: "rotate(90deg)",
                    fontSize: { xs: "2rem", sm: "6rem" },
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
                  alignItems: { xs: "center", md: "flex-end" },
                  width: "100%",
                }}
              >
                <Typography
                  color="primary"
                  sx={{ mb: 0.5, fontSize: "2.5rem" }}
                >
                  {flightsData?.goarrival}
                </Typography>
                <h3 className="text-sm">
                  {flightsData?.segments.go[0]?.arrivalAirport}
                </h3>
                <h3 className="text-sm">
                  {flightsData?.segments.go[0]?.arrivalTime && (
                    <span>
                      {new Date(
                        flightsData.segments.go[0].arrivalTime
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  )}
                </h3>
                <h3 className="text-primary text-xs">
                  {flightsData?.segments.go[0]?.arrivalTime && (
                    <span>
                      {(() => {
                        const date = new Date(
                          flightsData.segments.go[0].arrivalTime
                        );
                        const weekday = date.toLocaleDateString("en-US", {
                          weekday: "short",
                        });
                        const day = date.getDate().toString().padStart(2, "0");
                        const month = date.toLocaleDateString("en-US", {
                          month: "short",
                        });
                        const year = date.getFullYear();
                        return `${weekday} ${day} ${month} ${year}`;
                      })()}
                    </span>
                  )}
                </h3>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                // flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                marginTop: 4,
                gap: 1,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <h3>{flightsData?.refundable}</h3>
              <h3>{flightsData?.class}</h3>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-end" },
                  gap: 1,
                  color: "primary.main",
                }}
              >
                <BusinessCenterIcon className="text-primary" />
                {flightsData?.bags} kg
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* right side  */}
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-end" },
            justifyContent: "space-between",
            paddingLeft: { xs: 0, md: "30px" },
            borderLeft: { xs: "none", md: "dotted 1px" },
            borderColor: "#32D094",
            borderTop: { xs: "dotted 1px", md: "none" },
            pt: { xs: 2, md: 0 },
            mt: { xs: 2, md: 0 },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              textAlign: { xs: "center", md: "right" },
              mb: { xs: 2, md: 0 },
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
            <h3
              className="line-through text-primary"
              style={{ textAlign: "inherit" }}
            >
              ৳ 6,199
            </h3>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.dark",
                padding: "3px 10px",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Book Now
            </Button>
            <Button
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
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default FlightDataCard;
