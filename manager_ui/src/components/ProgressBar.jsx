// 読み込み処理中マークのプログレスバーのコンポーネント
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import '../css/ProgressBar.css'

export default function ProgressBar() {
  return (
    <Box className='progress_bar'>
      <CircularProgress size={300} />
    </Box>
  );
}
