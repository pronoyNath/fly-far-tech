import { Box, MenuItem, Select } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const LocationSelect = ({flightData,departureCity,handleDepartureCityChange}) => {
  return (
    <Box className="relative border-none outline-none">
      <Box className="absolute left-0 bottom-0 top-0 flex items-center justify-center mx-auto rounded-l-md pl-2 bg-primary text-white break-words border-none outline-none z-10">
        <FmdGoodOutlinedIcon color="white" sx={{ mr: 1 }} />
      </Box>
      <Select
        variant="filled"
        className="bg-secondary"
        value={departureCity}
        onChange={handleDepartureCityChange}
        displayEmpty
        sx={{
          "& .MuiSelect-select": {
            py: 0.5,
            ml: 4,
            backgroundColor: "secondary.main",
            borderRadius: "7px",
          },
          "&:before, &:after, &:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
            {
              borderBottom: "none",
            },
          borderRadius: "7px",
          "& .MuiFilledInput-root": {
            borderRadius: "7px",
            backgroundColor: "transparent",
          },
        }}
        renderValue={(selected) => {
          if (!selected) return <em>Select location</em>;
          const selectedCity = flightData.find(
            (city) => city.code === selected
          );
          return `${selectedCity.airport}, (${selectedCity.code})`;
        }}
      >
        {flightData && flightData.map((city) => (
          <MenuItem key={city.code} value={city.code}>
            <Box>
              <Box>
                {city.airport}, ({city.code})
              </Box>
              <Box
                sx={{
                  fontSize: "0.75rem",
                  color: "text.secondary",
                  mt: 0.5,
                }}
              >
                {city.city}, {city.country}
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default LocationSelect;
