import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ImageListShow from "./ImageList";

export default function HotDeals() {
  const [value, setValue] = React.useState("1");
  const [activeTab, setActiveTab] = React.useState("flights");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="max-w-[75rem] mx-auto"
      sx={{ width: "100%", typography: "body1" }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <h3 className="font-semibold text-2xl">Hot Deals</h3>
          </Box>
          <TabList
            onChange={handleChange}
            aria-label="hot deals tabs"
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "9999px",
              padding: "4px",
              minHeight: "unset",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              label="FLIGHT"
              value="1"
              sx={{
                color: "white",
                textTransform: "none",
                minHeight: "unset",
                padding: "6px 16px",
                margin: "0 2px",
                borderRadius: "9999px",
                minWidth: "unset",
                "&.Mui-selected": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            />
            <Tab
              label="GROUP FARE"
              value="2"
              sx={{
                color: "white",
                textTransform: "none",
                minHeight: "unset",
                padding: "6px 16px",
                margin: "0 2px",
                borderRadius: "9999px",
                minWidth: "unset",
                "&.Mui-selected": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            />
            <Tab
              label="TOUR"
              value="3"
              sx={{
                color: "white",
                textTransform: "none",
                minHeight: "unset",
                padding: "6px 16px",
                margin: "0 2px",
                borderRadius: "9999px",
                minWidth: "unset",
                "&.Mui-selected": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            />
            <Tab
              onClick={() => setActiveTab("tours")}
              label="VISA"
              value="4"
              sx={{
                color: "white",
                textTransform: "none",
                minHeight: "unset",
                padding: "6px 16px",
                margin: "0 2px",
                borderRadius: "9999px",
                minWidth: "unset",
                "&.Mui-selected": {
                  backgroundColor: "secondary.dark",
                  color: "white",
                },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ImageListShow activeTab={"flights"} />
        </TabPanel>
        <TabPanel value="2">
          <ImageListShow activeTab={"tours"} />
        </TabPanel>
        <TabPanel value="3">
          {" "}
          <ImageListShow activeTab={"flights"} />
        </TabPanel>
        <TabPanel value="4">
          <ImageListShow activeTab={"tours"} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
