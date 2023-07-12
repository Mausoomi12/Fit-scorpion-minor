import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

import HeroBannerImage from '../assets/images/banner.png';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '100px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="36px" animation={`${fadeInUp} 1s ease-out`}>Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" animation={`${fadeInUp} 1s 0.25s ease-out`}>
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" animation={`${fadeInUp} 1s 0.5s ease-out`}>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack animation={`${fadeInUp} 1s 0.75s ease-out`}>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" animation={`${fadeInUp} 1s 1s ease-out`} />
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }} animation={`${fadeInUp} 1s 1.25s ease-out`}>
      Exercise
    </Typography>
  </Box>
);

export default HeroBanner;
