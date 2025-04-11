import bannerImg from '../../../assets/mainbannerimg.webp';
import BannerTabs from '../components/Bannertabs/BannerTabs';
import { Box } from '@mui/material';

const Banner = () => {
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
      
    </div>
    );
};

export default Banner;