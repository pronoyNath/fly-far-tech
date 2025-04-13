import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RangeSlider from "../RangeSlider";
import FundBox from "../Filters/FundBox";
import StopsFilter from "../Filters/StopsFilter";
import DepartureTimeBox from "../Filters/DepartureTImes";
import ArrivalTimeBox from "../Filters/ArrivalTimes";
import LayoverTime from "../Filters/LayoverTIme";
import LayoverAirportBox from "../Filters/LayoverAirport";
import BaggageBox from "../Filters/Baggage";

export default function AccordionFilterList() {
  return (
    <div>
      <Accordion defaultExpanded className="border-0 shadow-none">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon fontSize="large" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="border-0 shadow-none"
        >
          <Typography
            sx={{ fontWeight: "600", color: "#32D094" }}
            className="font-bold text-primary"
            component="span"
          >
            Price Range
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RangeSlider />
        </AccordionDetails>
      </Accordion>
      <FundBox />
      <StopsFilter />
      <DepartureTimeBox />
      <ArrivalTimeBox />
      <LayoverTime />
      <LayoverAirportBox />
      <BaggageBox />
    </div>
  );
}
