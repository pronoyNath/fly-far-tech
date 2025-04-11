import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Box
        sx={{
          backgroundColor: "#EDF2F6",
          minHeight: "100vh",
        }}
      >
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Outlet />
        <div>
          <Footer />
        </div>
      </Box>
    </div>
  );
};

export default MainLayout;
