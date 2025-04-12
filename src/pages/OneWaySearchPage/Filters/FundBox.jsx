import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup } from "@mui/material";

export default function FundBox() {
  const [checked, setChecked] = React.useState({
    refundable: false,
    nonRefundable: false,
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
          component="span"
        >
          Fare Type
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.refundable}
                onChange={handleCheckboxChange}
                name="refundable"
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
                Refundable
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.nonRefundable}
                onChange={handleCheckboxChange}
                name="nonRefundable"
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
                Non-refundable
              </Typography>
            }
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}
