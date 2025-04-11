import bannerImg from "../../assets/mainbannerimg.webp";
import Box from "@mui/material/Box";
import BannerTabs from "./components/Bannertabs/BannerTabs";

const Home = () => {
  return (
    <div className="max-w-[72rem] mx-auto px-4">
      <Box
        sx={{
          backgroundImage: `url(${bannerImg})`, // Path to your image
          backgroundSize: "cover",
          // backgroundPosition: 'center',
          minHeight: "400px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        {/* You can add content here if needed */}
        <BannerTabs/>
      </Box>
      <div className="bg-red-400 min-h-screen"></div>
    </div>
  );
};

export default Home;
