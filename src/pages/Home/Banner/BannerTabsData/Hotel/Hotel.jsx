import { Box, TextField, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationSelect from "../../../components/Bannertabs/LocationSelect";

const Hotel = ({
  departureCity,
  flightData,
  handleDepartureCityChange,
  departureDate,
  handleDepartureDateChange,
}) => {
  return (
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
          FROM
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
      {/* check in  */}
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
          CHECK IN
        </Typography>

        <Typography color="primary" sx={{ mb: 0.5, fontSize: "2.5rem" }}>
          {new Date(departureDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </Typography>
        <Box
          className="relative border-none outline-none mx-auto  text-center "
          sx={{ width: "100%" }}
        >
          <Box
            className="absolute left-0 bottom-0 top-0 flex items-center justify-center mx-auto  rounded-l-md pl-2 bg-primary text-white break-words border-none outline-none z-10"
            sx={{ width: "40px" }}
          >
            <CalendarMonthIcon color="white" sx={{ mr: 1 }} />
          </Box>
          <TextField
            type="date"
            variant="filled"
            value={departureDate.toISOString().split("T")[0]}
            onChange={handleDepartureDateChange}
            sx={{
              width: "100%",
              "& .MuiFilledInput-root": {
                backgroundColor: "secondary.main",
                borderRadius: "7px",
                pl: 5,
              },
              "& .MuiFilledInput-input": {
                py: 0.6,
                pr: 2,
              },
              "&:before, &:after, &:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              margin: "0 auto",
              "& .MuiInputAdornment-root": {
                display: "none",
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
      </Box>
      {/* checkout  */}
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
          FROM
        </Typography>

        <Typography color="primary" sx={{ mb: 0.5, fontSize: "2.5rem" }}>
          {new Date(departureDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </Typography>
        <Box
          className="relative border-none outline-none mx-auto text-center "
          sx={{ width: "100%" }}
        >
          <Box
            className="absolute left-0 bottom-0 top-0 flex items-center justify-center mx-auto  rounded-l-md pl-2 bg-primary text-white break-words border-none outline-none z-10"
            sx={{ width: "40px" }}
          >
            <CalendarMonthIcon color="white" sx={{ mr: 1 }} />
          </Box>
          <TextField
            type="date"
            variant="filled"
            value={departureDate.toISOString().split("T")[0]}
            onChange={handleDepartureDateChange}
            sx={{
              width: "100%",
              "& .MuiFilledInput-root": {
                backgroundColor: "secondary.main",
                borderRadius: "7px",
                pl: 5,
              },
              "& .MuiFilledInput-input": {
                py: 0.6,
                pr: 2,
              },
              "&:before, &:after, &:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              margin: "0 auto",
              "& .MuiInputAdornment-root": {
                display: "none",
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hotel;
