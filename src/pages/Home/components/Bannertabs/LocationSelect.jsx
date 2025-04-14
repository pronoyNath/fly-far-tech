import { Box, MenuItem, Select } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const LocationSelect = ({flightData,departureCity,handleDepartureCityChange}) => {
  return (
    <Box className="relative border-none outline-none w-full">
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
          fontSize:"0.8rem",
          color:"secondary.dark",
          width: { xs: '100%' }, // Full width on small screens, auto width on larger
          maxWidth: { xs: 'none', md: '250px' } ,
          "& .MuiSelect-select": {
            py: 0.9,
            px: 2,
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
          <MenuItem  key={city.code} value={city.code}>
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
