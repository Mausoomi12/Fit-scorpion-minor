import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';

import Footer from './components/Footer';

import Navbar from './components/Navbar';
import BmiCalculator from './components/BmiCalculator';
import BmrCalculator from './components/BmrCalculator';




const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar/>

  

   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      
      <Route path="/calculators/bmi" element ={<BmiCalculator/>} />
      <Route path="/calculators/bmr" element ={<BmrCalculator/>} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
