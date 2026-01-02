import React from 'react';
import Slider from 'react-slick';

import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const CarouselComponent = ({ images }) => {
  const arrowWidthSize = useBreakpointValue({ base: '30px', md: '60px' }); // Responsive arrow size
  const arrowHeightSize = useBreakpointValue({ base: '40px', md: '80px' }); // Responsive arrow size
  const arrowPosition = useBreakpointValue({ base: '10px', md: '5px' }); // Responsive arrow position
  const textSizeHeader = useBreakpointValue({
    base: '1rem', // default value for smaller screens
    sm: '1.25rem',
    md: '1.5rem',
    lg: '2rem',
  });
  const headerMargin = useBreakpointValue({ base: '1rem', md: '4rem' });

  //Common styles for arrows
  const arrowStyles = {
    display: 'block',
    position: 'absolute',
    color: 'white',
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    width: arrowWidthSize,
    height: arrowHeightSize,
  };

  // Custom arrow components using react-slick's props
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <ChevronRightIcon
        style={{
          ...arrowStyles,
          right: arrowPosition,
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <ChevronLeftIcon
        style={{
          ...arrowStyles,
          left: arrowPosition,
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3, // Show 3 slides at a time by default
    responsive: [
      {
        breakpoint: 1024, // At 1024px viewport width or less
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 600, // At 600px viewport width or less
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <Box
      id="home"
      maxWidth="100%"
      px={{ base: '4', md: '6', lg: '8' }}
      margin="4vh auto"
    >
      <Box maxWidth="100%" mx="auto" overflow="hidden">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <Box
              key={idx}
              height={{ base: '50vh', md: '60vh', lg: '70vh' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              px="2px"
            >
              <Image
                src={img.url}
                alt={`Slide ${idx + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
                objectPosition="center"
                sx={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CarouselComponent;
