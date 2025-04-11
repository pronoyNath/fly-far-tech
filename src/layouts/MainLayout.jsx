import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <div className="">
      <Box
        sx={{
          backgroundColor: "#EDF2F6",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </div>
  );
};

export default MainLayout;
