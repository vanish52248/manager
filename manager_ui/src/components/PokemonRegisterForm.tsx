import React, {useEffect, useState} from 'react'

import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

import '../css/PokemonRegisterForm.css'

export default function PokemonRegisterForm() {

  const [party, setParty] = React.useState('');
  const [party2, setParty2] = React.useState('');
  // DBから取得した性格を格納する配列
  const personalityList: string[] = []

  const handleChange = (event: SelectChangeEvent) => {
    setParty(event.target.value);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setParty2(event.target.value);
  };

  // 初回起動時に読み込む処理
  // useEffect(() => {
  //   getPersonality();
  //   }, [])

  // 性格を取得する処理
  const getPersonality = () => {
    axios.get(process.env.REACT_APP_API_URL + 'personality/')
    .then(response=>{
      window.console.info(`axios-SUCCEED:${JSON.stringify(response.data.records)}`);
      response.data.records.forEach((element: any) => {
        personalityList.push(element.category);
      })
      console.info(personalityList);
    })
    .catch(error=>{
      window.console.info(`axios-FAILED:${error}`);
    })
  }


  return (
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
          <div>
            <div>
                <div>
                    <div className='name_container'>
                      <TextField className='pokemon_name' id="outlined-basic" label="ポケモン" variant="outlined" />
                    </div>
                    <div className='personality_container'>
                      <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-autowidth-label3">レベル</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label3"
                          id="demo-simple-select-autowidth"
                          value={party}
                          onChange={handleChange}
                          label="レベル"
                        >
                          <MenuItem value="">
                            <em>未選択</em>
                          </MenuItem>
                          <MenuItem value={1}>LV: 1</MenuItem>
                          <MenuItem value={50}>LV: 50</MenuItem>
                          <MenuItem value={100}>LV: 100</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">性格</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          value={party2}
                          onChange={handleChange2}
                          label="性格"
                        >
                          <MenuItem value="">
                            <em>未選択</em>
                          </MenuItem>
                          <MenuItem value={100}>{personalityList}</MenuItem>
                          {window.console.info(personalityList)}
                          {/* 性格をDBから取得する */}
                          {()=>getPersonality}
                          {personalityList.forEach((element: string) => {
                            <MenuItem>{element}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                      <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-autowidth-label2">個性</InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label2"
                          id="demo-simple-select-autowidth"
                          value={party}
                          onChange={handleChange}
                          label="個性"
                        >
                          <MenuItem value="">
                            <em>未選択</em>
                          </MenuItem>
                          {/* 個性をDBから取得する */}
                          <MenuItem value={1}>個性1</MenuItem>
                          <MenuItem value={2}>個性2</MenuItem>
                          <MenuItem value={3}>個性3</MenuItem>
                        </Select>
                      </FormControl>
                      <div>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                          <InputLabel id="demo-simple-select-autowidth-label3">持ち物</InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-3"
                            id="demo-simple-select-autowidth"
                            value={party}
                            onChange={handleChange}
                            label="持ち物"
                            >
                            <MenuItem value="">
                              <em>未選択</em>
                            </MenuItem>
                            {/* 個性をDBから取得する */}
                            <MenuItem value={1}>持ち物1</MenuItem>
                            <MenuItem value={2}>持ち物2</MenuItem>
                            <MenuItem value={3}>持ち物3</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className='param_container'>
                      <div className='status_container'>
                        <TextField className='status_box' id="outlined-basic" label="HP" variant="outlined" />
                        <TextField className='status_box' id="outlined-basic" label="攻撃" variant="outlined" />
                        <TextField className='status_box' id="outlined-basic" label="防御" variant="outlined" />
                        <TextField className='status_box' id="outlined-basic" label="特攻" variant="outlined" />
                        <TextField className='status_box' id="outlined-basic" label="特防" variant="outlined" />
                        <TextField className='status_box' id="outlined-basic" label="素早さ" variant="outlined" />
                      </div>
                      <div className='effort_container'>
                        <TextField className='effort_box' id="outlined-basic" label="努力値" variant="outlined" />
                        <TextField className='effort_box' id="outlined-basic" label="努力値" variant="outlined" />
                        <TextField className='effort_box' id="outlined-basic" label="努力値" variant="outlined" />
                        <TextField className='effort_box' id="outlined-basic" label="努力値" variant="outlined" />
                        <TextField className='effort_box' id="outlined-basic" label="努力値" variant="outlined" />
                        <TextField className='effort_box' id="outlined-basic" label="努力値" variant="outlined" />
                      </div>
                    </div>
                </div>
            </div>
          </div>
        <div className='form_btn_container'>
          <Button className='register_btn' variant="contained">登録</Button>
        </div>
      </Paper>
    </Box>
  );
}
