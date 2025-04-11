import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Import your images
import flight1 from "../../../../assets/hotDealsImg/flight1.webp";
import flight2 from "../../../../assets/hotDealsImg/flight2.webp";
import flight3 from "../../../../assets/hotDealsImg/flight3.webp";
import tour1 from "../../../../assets/hotDealsImg/tour1.webp";
import tour2 from "../../../../assets/hotDealsImg/tour2.webp";
import tour3 from "../../../../assets/hotDealsImg/tour3.webp";

const ImageListShow = ({ activeTab = "flights" }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Define your image data
  const flightData = [
    {
      img: flight1,
      title: "Flight Deal 1",
    },
    {
      img: flight2,
      title: "Flight Deal 2",
    },
    {
      img: flight3,
      title: "Flight Deal 3",
    },
  ];

  const tourData = [
    {
      img: tour1,
      title: "Tour Package 1",
    },
    {
      img: tour2,
      title: "Tour Package 2",
    },
    {
      img: tour3,
      title: "Tour Package 3",
    },
  ];

  // Determine which data to show based on active tab
  const currentData =
    activeTab === "flights"
      ? flightData
      : activeTab === "tours"
      ? tourData
      : [];

  return (
    <ImageList 
      sx={{ 
        width: "100%", 
        height: isSmallScreen ? 'auto' : 250,
        margin: 0,
      }} 
      cols={isSmallScreen ? 1 : 3} 
      rowHeight={isSmallScreen ? 'auto' : 164}
      gap={isSmallScreen ? 8 : 4}
    >
      {currentData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%',
              height: isSmallScreen ? 200 : 'auto',
              objectFit: 'cover',
            //   borderRadius: '8px'
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageListShow;