// パーティーグリッドパネルのコンポーネント
import * as React from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import PartySelect from './PartySelect';
import '../css/PartyGrid.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PartyGrid() {
  return (
    <div style={{margin: "0 8px"}}>
      <PartySelect />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={3} sm={2} md={4} key={index}>
                {/* DBからのポケモンを表示する */}
                <Item sx={{ height: 250 }} className='party_grid_item'>
                    models/Partyに登録したポケモンの情報
                    <Tooltip title={<Typography style={{fontSize: "15px"}}>ポケモンを追加</Typography>}>
                      <AddIcon fontSize='large' className='add_icon'/>
                    </Tooltip>
                    <Tooltip title={<Typography style={{fontSize: "15px"}}>ポケモンを削除</Typography>}>
                      <DeleteOutlineIcon fontSize='large' className='delete_icon'/>
                    </Tooltip>
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
      <div className='btn_container'>
        <TextField className='party_name' id="standard-basic" label="パーティー名" variant="standard" />
        <Button className='register_btn' variant="contained">登録</Button>
      </div>
    </div>
  );
}
