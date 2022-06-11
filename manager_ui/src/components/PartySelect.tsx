// パーティー選択のプルダウンのコンポーネント
import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function PartySelect() {
  const [party, setParty] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setParty(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 500 }}>
        <InputLabel id="demo-simple-select-autowidth-label">パーティー選択</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={party}
          onChange={handleChange}
          autoWidth
          label="パーティー選択"
        >
          <MenuItem value="">
            <em>未選択</em>
          </MenuItem>
          {/* Party名をDBから取得する */}
          <MenuItem value={1}>Party1</MenuItem>
          <MenuItem value={2}>Party2</MenuItem>
          <MenuItem value={3}>Party3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}