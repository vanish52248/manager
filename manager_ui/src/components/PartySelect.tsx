// パーティー選択のプルダウンのコンポーネント
import * as React from 'react';
import { useEffect } from 'react';

import axios from 'axios';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';

export default function PartySelect(props: any) {
  // DBから取得した登録済みパーティー名を格納する配列
  const [partyList, setPartyList] = React.useState<any[]>([]);

  // ダイアログオープン時に毎回最初に起動させる処理
  useEffect(() => {
    getPartyList()
    },[])

  // グリッド内の値を初期化する処理
  const initialGrid = () => {
    props.setCurrentSelectPokemon1();
    props.setCurrentSelectPokemon2();
    props.setCurrentSelectPokemon3();
    props.setCurrentSelectPokemon4();
    props.setCurrentSelectPokemon5();
    props.setCurrentSelectPokemon6();
  }
    
  // プルダウンを切り替えた時のパーティー取得処理
  const handleChange = (event: any) => {
    axios.get(process.env.REACT_APP_API_URL + 'party_name_pokemon/', {
      params: {
        party_name: event.target.value,
      }
    })
    .then(response=>{
      // パーティー切り替え前にグリッドを全て初期化する
      initialGrid();
      response.data.records.forEach((element: any, index: number) => {
        console.info(`element:${JSON.stringify(element)},  index:${index}`);
        // ループ前の配列を分解して新たにループ後のパーティー名を一つずつ格納する
        if (index === 0) {
          props.setCurrentSelectPokemon1(element.poke_name_id);
        } else if (index === 1) {
          props.setCurrentSelectPokemon2(element.poke_name_id);
        } else if (index === 2) {
          props.setCurrentSelectPokemon3(element.poke_name_id);
        } else if (index === 3) {
          props.setCurrentSelectPokemon4(element.poke_name_id);
        } else if (index === 4) {
          props.setCurrentSelectPokemon5(element.poke_name_id);
        } else if (index === 5) {
          props.setCurrentSelectPokemon6(element.poke_name_id);
        }
      })
    })
    .catch(error=>{
      window.console.error(`axios-FAILED:${error}`);
    })
  };

    // 登録済みパーティー一覧をDBから取得する処理
    const getPartyList = () => {
      axios.get(process.env.REACT_APP_API_URL + 'party_list/')
      .then(response=>{
        // 重複がない値のみを格納する配列
        const uniqueList: any[] = [];
        response.data.records.forEach((element: any) => {
          // ループごとの現在のパーティー名を設定する変数
          const currentValue = element.party_name;
          // 重複がない値ならループ前の配列を分解して新たにループ後のパーティー名を一つずつ格納する
          if (!uniqueList.includes(currentValue)) {
            uniqueList.push(currentValue);
            setPartyList((prevState) => ([ ...prevState, element.party_name ]));
          }
        })
      })
      .catch(error=>{
        window.console.error(`axios-FAILED:${error}`);
      })
    }
  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 500 }}>
        <InputLabel id="demo-simple-select-autowidth-label">パーティー選択</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          label="パーティー選択"
        >
          <MenuItem value="">
            <em>未選択</em>
          </MenuItem>
          {/* Party名をDBから取得する */}
          {partyList.map((element: string, index: number) => (
            <MenuItem
              value={element} 
              key={index}
              onChange={(e)=>handleChange(e)}
            >
            {element}
            </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}