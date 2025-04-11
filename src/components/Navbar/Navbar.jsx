import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#EDF2F6",
          color: "#000000",
          py: 2,
          px: 5,
          "@media (max-width: 600px)": {
            padding: "9px 18px",
            fontSize: "0.8rem",
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img
            src="https://cdn.flyfarint.com/WL/B2C/FFA2654/companylogo.webp?t=1744358987733"
            alt="FlyFar Logo"
            style={{ height: "60px", objectFit: "contain" }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                // Default size
                padding: "8px 16px",
                // Responsive: make button smaller on small screens
                "@media (max-width: 600px)": {
                  padding: "6px 8px",
                  fontSize: "0.8rem",
                },
              }}
            >
              TRAVEL AGENCY
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.dark",
                color: "white",
                padding: "8px 16px",
                "@media (max-width: 600px)": {
                  padding: "6px 8px",
                  fontSize: "0.8rem",
                },
              }}
              color="secondary"
            >
              LOGIN/ SIGNUP
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
