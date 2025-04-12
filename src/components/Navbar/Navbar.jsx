import logo from "../../assets/companylogo.webp";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: isScrolled ? "#ffffff" : "#EDF2F6",
          color: "#000000",
          pt: 2,
          pb:1,
          px: 5,
          transition: "background-color 0.3s ease",
          zIndex: 1100,
          "@media (max-width: 600px)": {
            padding: "9px 18px 0px 18px",
            fontSize: "0.8rem",
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
         <Link to={"/"}>
         <img
            src={logo}
            alt="FlyFar Logo"
            className="cursor-pointer"
            style={{ height: "60px", objectFit: "contain" }}
          />
         </Link>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "4px 16px",
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
                padding: "4px 16px",
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
