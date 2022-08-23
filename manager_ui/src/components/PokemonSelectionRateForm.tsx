// ポケモン選出率画面のフォームのコンポーネント
import React from 'react'

import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PokemonSelectionRateForm() {
    return (
        <>
          <Box
            style={{margin: "0 8px"}}
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 2000,
              height: 750,
              },
            }}
          >
            <Paper className='form_wrapper' elevation={3}>
                PokemonSelectionRateForm
            </Paper>
          </Box>
        </>
    );
}
