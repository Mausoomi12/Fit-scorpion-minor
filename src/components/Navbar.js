import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BmiCalculator from './BmiCalculator';
import BmrCalculator from './BmrCalculator';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const handleCalculatorOpen = () => {
    setCalculatorOpen(!calculatorOpen);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
    
      <Link
          to="/"
          style={{
            fontFamily : 'Dancing Script, cursive',
            fontSize : 40,
           // font-style: italic;
            /* Other desired styles */
            color: 'black',
            fontWeight: '500',
            textDecoration: 'none',
            
            //color: '#3A1212',
            //borderBottom: '3px solid #FF2625',
          }}
        >
          Fit Scorpion
        </Link>

      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          className="nav-link"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="nav-link"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>

        <span
          className="nav-link"
          style={{
            position: 'relative',
            textDecoration: 'none',
            color: '#3A1212',
            cursor: 'pointer',
          }}
          onClick={handleCalculatorOpen}
        >
          Calculators
        </span>
        {calculatorOpen && (
          <Stack
            direction="row"
            gap="8px"
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="center"
            justifyContent="center"
          >
            <Link
              to="/calculators/bmi"
              className="nav-link"
              style={{ fontSize:"15px",textDecoration: 'none', color: '#3A1212' }}
            >
              BMI
            </Link>
            <Link
              to="/calculators/bmr"
              className="nav-link"
              style={{ fontSize:"15px" ,textDecoration: 'none', color: '#3A1212' }}
            >
              BMR
            </Link>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
