import React from 'react';
import { Stack } from '@mui/material';
import { PropagateLoader  }  from 'react-spinners';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <PropagateLoader   color="#f44336" />
  </Stack>
);

export default Loader;