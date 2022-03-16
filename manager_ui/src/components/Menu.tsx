import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Header from './Header';
import '../css/Menu.css';
import MenuButtons from './MenuButtons';

export default function Menu() {

  return (
    <>
      <Header />
      <Grid container spacing={0} justifyContent="center" alignItems="center"className='grid_wrapper'>
      <Grid item xs={4}>
          <Grid container alignContent={"center"} justifyContent="center">
              <Grid item >
              <Paper sx={{ height: 350, width: 700 }} >
                <MenuButtons />
              </Paper >
              </Grid>
          </Grid>
      </Grid>
      </Grid>
    </>
  );
}

