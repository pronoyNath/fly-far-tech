import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `৳ ${value.toLocaleString()}`;
}

export default function RangeSlider() {
  // Set the initial value range between 11,128 and 12,001
  const [value, setValue] = React.useState([11128, 12001]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "auto" }}>
      <Slider
        sx={{
          color: "secondary.dark",
        }}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={valuetext}
        min={11128}
        max={12001}
        step={1} 
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <span>৳ {value[0].toLocaleString()}</span>
        <span>৳ {value[1].toLocaleString()}</span> 
      </Box>
    </Box>
  );
}
