// メニュー画面のコンポーネント
import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Header from './Header';
import '../css/Menu.css';
import MenuButtons from './MenuButtons';

export default function Menu() {

  return (
    <>
      <Grid container justifyContent="center" className='grid_wrapper'>
      <Header />
      <Grid item xs={4} className='menu_grid_item'>
          <Grid container alignContent={"center"} justifyContent="center">
              <Grid item >
              <Paper sx={{ height: 250, width: 700 }} >
                <MenuButtons />
              </Paper >
              </Grid>
          </Grid>
      </Grid>
      </Grid>
    </>
  );
}

