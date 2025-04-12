import { Box, Typography } from "@mui/material";
import React from "react";
import LocationSelect from "../../../components/Bannertabs/LocationSelect";

const TourSection = ({
  departureCity,
  flightData,
  handleDepartureCityChange,
}) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        {/* destination  */}
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
            variant="h7"
            color="secondary.dark"
            sx={{ mb: 0, fontSize: "1rem" }}
          >
            DESTINATION TYPE
          </Typography>

          <Typography color="primary" sx={{ mb: 0.5, fontSize: "2.5rem" }}>
            {departureCity}
          </Typography>
          <LocationSelect
            flightData={flightData}
            selectedCity={departureCity}
            departureCity={departureCity}
            handleDepartureCityChange={handleDepartureCityChange}
          />
        </Box>
        {/* WHERE  */}
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
            variant="h7"
            color="secondary.dark"
            sx={{ mb: 0, fontSize: "1rem" }}
          >
            WHERE ?
          </Typography>

          <Typography color="primary" sx={{ mb: 0.5, fontSize: "2.5rem" }}>
            {departureCity}
          </Typography>
          <LocationSelect
            flightData={flightData}
            selectedCity={departureCity}
            departureCity={departureCity}
            handleDepartureCityChange={handleDepartureCityChange}
          />
        </Box>
        {/* WHEN  */}
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
            variant="h7"
            color="secondary.dark"
            sx={{ mb: 0, fontSize: "1rem" }}
          >
            WHEN ?
          </Typography>

          <Typography color="primary" sx={{ mb: 0.5, fontSize: "2.5rem" }}>
            {departureCity}
          </Typography>
          <LocationSelect
            flightData={flightData}
            selectedCity={departureCity}
            departureCity={departureCity}
            handleDepartureCityChange={handleDepartureCityChange}
          />
        </Box>
      </Box>
    </div>
  );
};

export default TourSection;
