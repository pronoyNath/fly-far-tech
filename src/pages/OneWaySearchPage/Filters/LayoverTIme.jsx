import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Stack } from "@mui/material";

export default function LayoverTime() {
  const timeRanges = [
    "0H - 5H",
    "5H - 10H",
    "10H - 15H",
    "15H - 20H",
  ];

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
          Layover Time
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>
          {timeRanges.map((range, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                backgroundColor: "#F5F5F5", // secondary bg
                p: 1.5,
                borderRadius: 2,
              }}
            >
              <AccessTimeIcon sx={{ color: "#32D094" }} />
              <Typography sx={{ fontWeight: 500 }}>{range}</Typography>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
