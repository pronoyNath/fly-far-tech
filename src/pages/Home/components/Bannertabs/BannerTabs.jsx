import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

import { Select, Typography, MenuItem, TextField } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationSelect from "./LocationSelect";

const flightData = [
  {
    city: "Cox's Bazar",
    country: "Bangladesh",
    airport: "Cox's Bazar Airport",
    code: "CXB",
  },
  {
    city: "Jashore",
    country: "Bangladesh",
    airport: "Jashore Airport",
    code: "JSR",
  },
  {
    city: "Barishal",
    country: "Bangladesh",
    airport: "Barishal Airport",
    code: "BZL",
  },
  {
    city: "Rajshahi",
    country: "Bangladesh",
    airport: "Shah Makhdum Airport",
    code: "RJH",
  },
  {
    city: "Saidpur",
    country: "Bangladesh",
    airport: "Saidpur Airport",
    code: "SPD",
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    airport: "Hazrat Shahjalal Intl Airport",
    code: "DAC",
  },
];

export default function BannerTabs() {
  const [value, setValue] = React.useState("1");
  const [tripType, setTripType] = React.useState("round");
  const [departureCity, setDepartureCity] = React.useState("DAC"); // Initialize with a default value
  const [arrivalCity, setArrivalCity] = React.useState("CXB"); // Initialize with a default value
  const [departureDate, setDepartureDate] = React.useState(new Date()); // Initialize with current date
  const [returnDate, setReturnDate] = React.useState(new Date()); // Initialize with current date

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleDepartureCityChange = (event) => {
    setDepartureCity(event.target.value);
  };

  const handleArrivalCityChange = (event) => {
    setArrivalCity(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
    console.log(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };
  const buttonSx = (tabValue) => ({
    flex: 1,
    textTransform: "none",
    fontWeight: 600,
    borderRadius: "50px",
    borderColor: "primary.main",
    bgcolor: value === tabValue ? "primary.main" : "transparent",
    px: { xs: 0.5, sm: 0.5, md: 0.5 },
    py: { xs: 0.5, sm: 0.5, md: 0.5 },
    color: value === tabValue ? "white" : "primary.main",
    "&:hover": {
      bgcolor: value === tabValue ? "primary.dark" : "action.hover",
    },
    mx: { xs: 0.1, md: 0.5 },
  });

  const iconSx = (tabValue) => ({
    fontSize: "25px",
    padding: "0",
    margin: "0",
    color: value === tabValue ? "white" : "secondary.dark",
    ...(tabValue === "1" ? { transform: "rotate(45deg)" } : {}),
  });

  return (
    <Box sx={{ width: "100%", my: 4, mx: "auto" }}>
      <div className="py-10">
        <TabContext value={value}>
          <div className="max-w-[80%] md:max-w-[60%] rounded-full mx-auto bg-white">
            <Box
              sx={{
                display: "flex",
                px: { xs: 0.5, sm: 0.5, md: 0.5 },
                padding: { xs: 0.5, sm: 0.5, md: 0.5 },
              }}
            >
              <Button
                onClick={() => handleChange("1")}
                startIcon={<AirplanemodeActiveIcon sx={iconSx("1")} />}
                value="1"
                sx={buttonSx("1")}
              >
                FLIGHT
              </Button>
              <Button
                onClick={() => handleChange("2")}
                startIcon={<HomeWorkOutlinedIcon sx={iconSx("2")} />}
                value="2"
                sx={buttonSx("2")}
              >
                HOTEL
              </Button>
              <Button
                onClick={() => handleChange("3")}
                startIcon={<TravelExploreOutlinedIcon sx={iconSx("3")} />}
                value="3"
                sx={buttonSx("3")}
              >
                TOUR
              </Button>
              <Button
                onClick={() => handleChange("4")}
                startIcon={<AirplaneTicketIcon sx={iconSx("4")} />}
                value="4"
                sx={buttonSx("4")}
              >
                VISA
              </Button>
            </Box>
          </div>
          <div className="mt-4 px-2 md:px-7">
            <Box
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: { xs: "15px", sm: "20px", md: "30px" },
              }}
            >
              <TabPanel value="1" sx={{ p: 0 }}>
                <FormControl component="fieldset" fullWidth>
                  <RadioGroup
                    row
                    aria-label="trip-type"
                    name="trip-type"
                    value={tripType}
                    onChange={handleTripTypeChange}
                    sx={{
                      gap: { xs: 0.5, sm: 2 },
                      flexWrap: "nowrap",

                      "& .MuiFormControlLabel-label": {
                        fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        color: "primary.main",
                        fontWeight: 500,
                      },
                    }}
                    
                  >
                    <FormControlLabel
                      value="round"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "primary.main",
                            "&.Mui-checked": {
                              color: "primary.main",
                            },
                            padding: { xs: "4px", sm: "8px" },
                          }}
                        />
                      }
                      label="ROUND-TRIP"
                    />
                    <FormControlLabel
                      value="one"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "primary.main",
                            "&.Mui-checked": {
                              color: "primary.main",
                            },
                            padding: { xs: "4px", sm: "8px" },
                          }}
                        />
                      }
                      label="ONE-WAY"
                    />
                    <FormControlLabel
                      value="multi"
                      control={
                        <Radio
                          size="small"
                          sx={{
                            color: "primary.main",
                            "&.Mui-checked": {
                              color: "primary.main",
                            },
                            padding: { xs: "4px", sm: "8px" },
                          }}
                        />
                      }
                      label="MULTI-CITY"
                    />
                  </RadioGroup>
                </FormControl>

                {tripType === "round" && (
                  <Box
                    mt={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* left side  */}
                    <Box
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h7"
                        color="secondary.dark"
                        sx={{ mb: 0.5 }}
                      >
                        FROM
                      </Typography>

                      <Typography variant="h3" color="primary" sx={{ mb: 0.5 }}>
                        {departureCity}
                      </Typography>
                      {/* location select  */}
                      <LocationSelect
                        flightData={flightData}
                        departureCity={departureCity}
                        handleDepartureCityChange={handleDepartureCityChange}
                      />
                      {/* calender select  */}
                      <Box
                        className="relative border-none outline-none mx-auto mt-3 text-center "
                        sx={{ width: "92%" }}
                      >
                        {/* Icon container (matches your select design) */}
                        <Box
                          className="absolute left-10 bottom-0 top-0 flex items-center justify-center mx-auto  rounded-l-md pl-2 bg-primary text-white break-words border-none outline-none z-10"
                          sx={{ width: "40px" }}
                        >
                          <CalendarMonthIcon color="white" sx={{ mr: 1 }} />
                        </Box>

                        {/* Native date input (visible and styled) */}
                        <TextField
                          type="date"
                          variant="filled"
                          value={departureDate.toISOString().split("T")[0]}
                          onChange={handleDepartureDateChange}
                          sx={{
                            "& .MuiFilledInput-root": {
                              backgroundColor: "secondary.main",
                              borderRadius: "7px",
                              pl: 5, // Make space for the icon
                            },
                            "& .MuiFilledInput-input": {
                              py: 0.6, // Adjust padding for better visibility
                              pr: 2,
                            },
                            "&:before, &:after, &:hover:not(.Mui-disabled):before":
                              {
                                borderBottom: "none",
                              },
                            width: "80%",
                            margin: "0 auto",
                            "& .MuiInputAdornment-root": {
                              display: "none", // Hide default calendar icon
                            },
                          }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </Box>
                    </Box>
                    {/* middle for icon  */}
                    <Box
                      className="relative"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AirplanemodeActiveIcon
                        className="absolute -top-[3.2rem]"
                        sx={{
                          transform: "rotate(90deg)",
                          fontSize: "6rem",
                          color: "primary.main",
                        }}
                      />
                      <AirplanemodeActiveIcon
                        sx={{
                          transform: "rotate(-90deg)",
                          fontSize: "6rem",
                          color: "primary.main",
                          stroke: "currentColor",
                          strokeWidth: 0.5,
                          fill: "none",
                        }}
                      />
                    </Box>
                    {/* right side  */}
                    <Box
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h7"
                        color="secondary.dark"
                        sx={{ mb: 0.5 }}
                      >
                        TO
                      </Typography>

                      <Typography variant="h3" color="primary" sx={{ mb: 0.5 }}>
                        {departureCity}
                      </Typography>
                      {/* location select  */}
                      <LocationSelect
                        flightData={flightData}
                        departureCity={departureCity}
                        handleDepartureCityChange={handleDepartureCityChange}
                      />
                      {/* calender select  */}
                      <Box
                        className="relative border-none outline-none mx-auto mt-3 text-center "
                        sx={{ width: "92%" }}
                      >
                        {/* Icon container (matches your select design) */}
                        <Box
                          className="absolute left-10 bottom-0 top-0 flex items-center justify-center mx-auto  rounded-l-md pl-2 bg-primary text-white break-words border-none outline-none z-10"
                          sx={{ width: "40px" }}
                        >
                          <CalendarMonthIcon color="white" sx={{ mr: 1 }} />
                        </Box>

                        {/* Native date input (visible and styled) */}
                        <TextField
                          type="date"
                          variant="filled"
                          value={departureDate.toISOString().split("T")[0]}
                          onChange={handleDepartureDateChange}
                          sx={{
                            "& .MuiFilledInput-root": {
                              backgroundColor: "secondary.main",
                              borderRadius: "7px",
                              pl: 5, // Make space for the icon
                            },
                            "& .MuiFilledInput-input": {
                              py: 0.6, // Adjust padding for better visibility
                              pr: 2,
                            },
                            "&:before, &:after, &:hover:not(.Mui-disabled):before":
                              {
                                borderBottom: "none",
                              },
                            width: "80%",
                            margin: "0 auto",
                            "& .MuiInputAdornment-root": {
                              display: "none", // Hide default calendar icon
                            },
                          }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
                {tripType === "one" && (
                  <Box mt={2}>
                    <p>One way content: Select only departure date</p>
                  </Box>
                )}
                {tripType === "multi" && (
                  <Box mt={2}>
                    <p>
                      Multi-city content: Add multiple destinations and dates
                    </p>
                  </Box>
                )}
              </TabPanel>
              <TabPanel value="2">hi content</TabPanel>
              <TabPanel value="3">hol content</TabPanel>
              <TabPanel value="4">noo content</TabPanel>
            </Box>
          </div>
        </TabContext>
      </div>
    </Box>
  );
}
