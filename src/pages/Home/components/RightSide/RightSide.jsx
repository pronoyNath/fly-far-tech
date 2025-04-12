import { Box, MenuItem, Select, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const RightSide = ({ tripType, handleAddMulticity }) => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [seatClass, setSeatClass] = useState("Economy");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "250px",
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        gap: 2,
      }}
    >
      <Box>
        {/* Dropdowns Row - always in row, full width */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            width: "100%",
            "& > *": {
              flex: 1, // Makes each dropdown take equal space
            },
          }}
        >
          <Select
            value={adultCount}
            onChange={(e) => setAdultCount(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
              borderRadius: "4px",
              fontSize: "0.875rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <MenuItem
                key={`adult-${num}`}
                value={num}
                sx={{ fontSize: "0.875rem" }}
              >
                {num} Adult{num !== 1 ? "s" : ""}
              </MenuItem>
            ))}
          </Select>

          <Select
            value={childCount}
            onChange={(e) => setChildCount(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
              borderRadius: "4px",
              fontSize: "0.875rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((num) => (
              <MenuItem
                key={`child-${num}`}
                value={num}
                sx={{ fontSize: "0.875rem" }}
              >
                {num} Child{num !== 1 ? "ren" : ""}
              </MenuItem>
            ))}
          </Select>

          <Select
            value={infantCount}
            onChange={(e) => setInfantCount(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
              borderRadius: "4px",
              fontSize: "0.875rem",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "divider",
              },
            }}
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <MenuItem
                key={`infant-${num}`}
                value={num}
                sx={{ fontSize: "0.875rem" }}
              >
                {num} Infant{num !== 1 ? "s" : ""}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Select
          value={seatClass}
          onChange={(e) => setSeatClass(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            width: "100%",
            backgroundColor: "secondary.main",
            borderRadius: "4px",
            fontSize: "0.875rem",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "divider",
            },
            marginTop: 2,
          }}
        >
          {[
            "Economy",
            "Premium Economy",
            "Business",
            "Premium Business",
            "First Class",
          ].map((num) => (
            <MenuItem
              key={`infant-${num}`}
              value={num}
              sx={{ fontSize: "0.875rem" }}
            >
              {num}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Search Button - fixed at bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
        }}
      >
        <Link to={"/one-way-search"}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              py: 1,
              borderRadius: "4px",
              fontSize: "0.875rem",
              fontWeight: "400",
              textTransform: "none",
            }}
          >
            SEARCH FOR FLIGHT
          </Button>
        </Link>
        {tripType == "multi" && (
          <Button
            onClick={handleAddMulticity}
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              py: 1,
              mt: 2,
              borderRadius: "4px",
              fontSize: "0.875rem",
              fontWeight: "400",
              textTransform: "none",
            }}
          >
            ADD CITY
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default RightSide;
