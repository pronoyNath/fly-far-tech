import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup } from "@mui/material";

export default function StopsFilter() {
  const [checked, setChecked] = React.useState({
    nonStop: false,
    oneStop: false,
    onePlusStop: false,
  });

  const handleCheckboxChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon fontSize="large" />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography
          sx={{ fontWeight: "600", color: "#32D094" }}
          className="font-bold text-primary"
          component="span"
        >
          Stops
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.nonStop}
                onChange={handleCheckboxChange}
                name="nonStop"
                sx={{
                  color: "#32D094",
                  "&.Mui-checked": {
                    color: "#32D094",
                  },
                }}
              />
            }
            label={<Typography sx={{ color: "#32D094" }}>Non-stop</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.oneStop}
                onChange={handleCheckboxChange}
                name="oneStop"
                sx={{
                  color: "#32D094",
                  "&.Mui-checked": {
                    color: "#32D094",
                  },
                }}
              />
            }
            label={<Typography sx={{ color: "#32D094" }}>One stop</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.onePlusStop}
                onChange={handleCheckboxChange}
                name="onePlusStop"
                sx={{
                  color: "#32D094",
                  "&.Mui-checked": {
                    color: "#32D094",
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: "#32D094" }}>
                One plus stop
              </Typography>
            }
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}
