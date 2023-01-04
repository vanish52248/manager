// ポケモン選出率画面のフォームのコンポーネント
import React, { useState, useEffect } from 'react'

import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// ①ユニバーサルクッキーをインポート
import Cookies from 'universal-cookie';

import { RoutingLogic } from '../logic/router-logic';
import '../css/PokemonSelectionRateForm.css';


export default function PokemonSelectionRateForm() {
  // DBから取得した登録済みパーティー名を格納する配列
  const [partyList, setPartyList] = React.useState<any[]>([]);
  // DBから取得した自分が選出したパーティーを格納する配列
  const [myPokemonList, setMyPokemonList] = React.useState<any[]>([]);
  // DBから取得した相手が選出したパーティーを格納する配列
  const [enemyPokemonList, setEnemyPokemonList] = React.useState<any[]>([]);
  // パーティー名を格納する変数
  const [partyName, setPartyName] = useState<any>();
  // ラジオボタンのチェック時の値を格納する連想配列
  const [checkedPokemons, setCheckedPokemons] = useState<any>({})
  // 相手側 選出ポケモンランキングの1位を格納する配列
  const [enemyPokemonFirstPlace, setEnemyPokemonFirstPlace] = React.useState<any[]>([]);
  // 相手側 選出ポケモンランキングの2位を格納する配列
  const [enemyPokemonSecondPlace, setEnemyPokemonSecondPlace] = React.useState<any[]>([]);
  // 相手側 選出ポケモンランキングの3位を格納する配列
  const [enemyPokemonThirdPlace, setEnemyPokemonThirdPlace] = React.useState<any[]>([]);
  // ②cookieを取得するインスタンスの作成
  const cookies = new Cookies();

  const router = RoutingLogic()

  // トークン認証時間切れの処理
  const toNotTokenAuthentication = () => {
    router.toNotTokenAuthentication();
  }

  // 初回起動時に非同期で読み込む処理
  useEffect(() => {
    (async () => {
      getPartyList();
    })();
  }, []);

  // チェックボックスをチェック後に読み込む処理
  useEffect(() => {
    pokemonJudgeEffectHook();
  }, [checkedPokemons]);

  // 相手側選出ポケモンが変更されるたびに読み込む処理
  useEffect(() => {
    getEnemyPokemonRanking();
  }, [enemyPokemonList]);

  // 登録済みパーティー一覧をDBから取得する処理
  const getPartyList = () => {
    // ③axios.get()のAPI取得のURLがクッキー認証が通ったもののみ取得する為、localhost:8000/v1/~
    axios.get(process.env.REACT_APP_API_URL + 'v1/party_list/', {
      // ④header情報にcookieのアクセストークンを載せて通信する
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${cookies.get('accesstoken')}`
      }
    })
      .then(response => {
        // 重複がない値のみを格納する配列
        const uniqueList: any[] = [];
        response.data.records.forEach((element: any) => {
          // ループごとの現在のパーティー名を設定する変数
          const currentValue = element.party_name;
          // 重複がない値ならループ前の配列を分解して新たにループ後のパーティー名を一つずつ格納する
          if (!uniqueList.includes(currentValue)) {
            uniqueList.push(currentValue);
            setPartyList((prevState) => ([...prevState, element.party_name]));
          }
        })
      })
      .catch(error=>{
        // Token認証時間切れ時の処理→ログイン画面へ遷移
        if (error.response.status === 401){
          toNotTokenAuthentication();
        } else {
          window.console.error(`axios-FAILED:${error}`);
        }
      })
  }

  // プルダウンを切り替えた時の選出した自分のポケモンをDBから取得する処理
  const handleChange = (event: any) => {
    // 前回選択時の相手パーティーをまず初期化
    setEnemyPokemonList([]);
    // 前回選択時の選出ポケモンランキングをまず初期化
    setEnemyPokemonFirstPlace([]);
    setEnemyPokemonSecondPlace([]);
    setEnemyPokemonThirdPlace([]);
    // パーティー名を選択したものに設定する
    setPartyName(event.target.value)
    // ③axios.get()のAPI取得のURLがクッキー認証が通ったもののみ取得する為、localhost:8000/v1/~
    axios.get(process.env.REACT_APP_API_URL + 'v1/select_pokemon_list/', {
      params: {
        party_name: event.target.value,
      },
      // ④header情報にcookieのアクセストークンを載せて通信する
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${cookies.get('accesstoken')}`
      }
    })
      .then(response => {
        // 前回選択時のパーティーをまず初期化してから処理開始
        setMyPokemonList([]);
        response.data.records.forEach((element: any) => {
          // ループごとの現在のパーティー名を設定する変数
          setMyPokemonList((prevState) => ([...prevState, element.my_pokemon]));
        })
      })
      .catch(error=>{
        // Token認証時間切れ時の処理→ログイン画面へ遷移
        if (error.response.status === 401){
          toNotTokenAuthentication();
        } else {
          window.console.error(`axios-FAILED:${error}`);
        }
      })
  };

  // チェックボックスをチェック/非チェックした際の処理
  const pokemonJudge = (e: any) => {
    //checkedPokemonsのstateをセット
    setCheckedPokemons({
      ...checkedPokemons,
      [e.target.value]: e.target.checked
    })
  };

  // チェックボックスチェック後にuseEffectによって呼び出される処理
  const pokemonJudgeEffectHook = () => {
    // ③axios.get()のAPI取得のURLがクッキー認証が通ったもののみ取得する為、localhost:8000/v1/~
    axios.get(process.env.REACT_APP_API_URL + 'v1/select_pokemon_list/', {
      params: {
        party_name: partyName,
        select_pokemon: checkedPokemons,
      },
      // ④header情報にcookieのアクセストークンを載せて通信する
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${cookies.get('accesstoken')}`
      }
    })
      .then(response => {
        // 前回選択時のパーティーをまず初期化してから処理開始
        setEnemyPokemonList([]);
        response.data.records.forEach((element: any) => {
          // ループごとの現在の相手選出ポケモンを設定する
          setEnemyPokemonList((prevState) => ([...prevState, element.enemy_pokemon]));
        })
      })
      .catch(error=>{
        // Token認証時間切れ時の処理→ログイン画面へ遷移
        if (error.response.status === 401){
          toNotTokenAuthentication();
        } else {
          window.console.error(`axios-FAILED:${error}`);
        }
      })
  }

  // 相手側選出ポケモン変更後にuseEffectによって呼び出される処理
  const getEnemyPokemonRanking = () => {
    // 相手側の選出ポケモン一覧を一度文字列型の配列→文字列→配列に再変換する
    const tmp = enemyPokemonList.join(",") + ",";
    const tmpList = tmp.split(",");
    const countItem: any = {};
    // 相手側の選出ポケモンの一覧をカウントする
    for (var i = 0; i < tmpList.length; i++) {
      var elm = tmpList[i];
      // 処理上含まれてしまうからの文字列以外をカウントするようにする
      if (elm !== "") {
        countItem[elm] = (countItem[elm] || 0) + 1;
      }
    }
    const countDict: any = {};
    // 相手側の選出ポケモンの一覧が出た分だけ追加していく
    for (let [key, value] of Object.entries(countItem)) {
      if (countDict[key]) {
        countDict[key] += 1
      } else {
        countDict[key] = value
      }
    }
    // 相手の選出されたポケモンの1位2位3位の出現数を設定
    var max_: any = 0;
    var second: any = 0;
    var third: any = 0;
    // チェック/非チェック時に、まず選出ポケモンランキングを初期化してから処理開始
    setEnemyPokemonFirstPlace([]);
    setEnemyPokemonSecondPlace([]);
    setEnemyPokemonThirdPlace([]);    
    for (let i of Object.values(countDict)) {
      // 1位の設定
      if (max_ < Number(i)) {
        max_ = Number(i);
      // 2位の設定
      } else if (second < Number(i)) {
        second = Number(i);
      // 3位の設定
      } else if (third < Number(i)) {
        third = Number(i);
      }
    }
    // 再度相手側の選出ポケモンをループさせて出現数が多い順で1位2位3位を設定する
    const firstList: any = [];
    const secondList: any = [];
    const thirdList: any = [];
    for (let [key, value] of Object.entries(countDict)) {
      // 一番多い数と一致しているので1位に設定
      if (Number(value) === max_) {
        firstList.push(key + ",");
        setEnemyPokemonFirstPlace(firstList);
      // 2番目に多い数と一致しているので2位に設定
      } else if (Number(value) < max_ && Number(value) === second) {
        secondList.push(key + ",");
        setEnemyPokemonSecondPlace(secondList);
      // 3番目に多い数と一致しているので3位に設定
      } else if (Number(value) < second && Number(value) === third) {
        thirdList.push(key + ",");
        setEnemyPokemonThirdPlace(thirdList);
      }
    }
  }

  return (
    <>
      <Box
        style={{ margin: "0 8px" }}
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
          <FormControl sx={{ m: 1, minWidth: 500 }} >
            <InputLabel id="demo-simple-select-autowidth-label">パーティー選択</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                >
                  {element}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className='party_select_container'>
            <Box
              sx={{
                width: 700,
                height: 450,
                backgroundColor: '#fff',
              }}
              className='party_selection_box'
            >
              <Typography variant="body1" fontSize={"25px"} className='win_rate_text' >
                自分側 選出パーティー
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                  {myPokemonList.map((value: any, index: number) => (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                      <div className='grid_container'>
                        <FormGroup>
                          <FormControlLabel control={
                            <Checkbox
                              id={`id_${index}`}
                              key={index}
                              value={value}
                              onChange={pokemonJudge}
                              checked={checkedPokemons[value.id]}
                            />
                            // labelで表示するテキスト(そのテキスト範囲内でもチェック可能にする)
                          } label={value + ''} />
                        </FormGroup>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
            <Box
              sx={{
                width: 700,
                height: 450,
                backgroundColor: '#fff',
              }}
              className='party_selection_box'
            >
              <Typography variant="body1" fontSize={"25px"} className='win_rate_text' >
                相手側 選出パーティー
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                  {enemyPokemonList.map((value: any, index: number) => (
                    <Grid item md={12} key={index}>
                      <div className='grid_container'>
                        {value + ''}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </div>
          <div className="select_enemy_ranking_wrapper">
            <h3>相手側 選出ポケモンランキング</h3>
            <p>🥇 1位：{enemyPokemonFirstPlace}</p>
            <p>🥈 2位：{enemyPokemonSecondPlace}</p>
            <p>🥉 3位：{enemyPokemonThirdPlace}</p>
          </div>
        </Paper>
      </Box>
    </>
  );
}
