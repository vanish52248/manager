// ポケモン登録画面のフォームのコンポーネント
import React, {useEffect, useState} from 'react'

import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { SnackBar } from './SnackBar';
import '../css/PokemonRegisterForm.css'

export default function PokemonRegisterForm() {

  //  スナックバーに表示するメッセージの変数
  const [messageState, setMessage] = useState<any>("");
  // スナックバーの色を判定する変数
  const [severity, setSeverity] = useState<any>("");

  // DBから取得した性格を格納する配列
  const [personalityList, setPersonalityList] = useState<any[]>([]);
  // DBから取得した個性を格納する配列
  const [identityList, setIdentityList] = useState<any[]>([]);
  // DBから取得した持ち物を格納する配列
  const [itemList, setItemList] = useState<any[]>([]);

  // ポケモン名を格納する変数
  const [pokemonName, setPokemonName] = useState<string>();
  // LVを格納する変数
  const [level, setLevel] = useState<number>();
  // 性格を格納する変数
  const [personality, setPersonality] = useState<string>();
  // 個性を格納する変数
  const [identity, setIdentity] = useState<string>();
  // 持ち物を格納する変数
  const [item, setItem] = useState<string>();
  // HPを格納する変数
  const [hp, setHp] = useState<number>();
  // 攻撃を格納する変数
  const [attack, setAttack] = useState<number>();
  // 防御を格納する変数
  const [defence, setDefence] = useState<number>();
  // 特殊攻撃を格納する変数
  const [specialAttack, setSpecialAttack] = useState<number>();
  // 特殊防御を格納する変数
  const [specialDefence, setSpecialDefence] = useState<number>();
  // 素早さを格納する変数
  const [speed, setSpeed] = useState<number>();
  // HP努力値を格納する変数
  const [hpEffort, setHpEffort] = useState<number>();
  // 攻撃努力値を格納する変数
  const [attackEffort, setAttackEffort] = useState<number>();
  // 防御努力値を格納する変数
  const [defenceEffort, setDefenceEffort] = useState<number>();
  // 特殊攻撃努力値を格納する変数
  const [specialAttackEffort, setSpecialAttackEffort] = useState<number>();
  // 特殊防御努力値を格納する変数
  const [specialDefenceEffort, setSpecialDefenceEffort] = useState<number>();
  // 素早さ努力値を格納する変数
  const [speedEffort, setSpeedEffort] = useState<number>();

  // 初回起動時に非同期で読み込む処理
    useEffect(() => {
      (async () => {
        getPersonality();
        getIdentity();
        getItem();
      })();
    }, []);

    // APIへ渡すデータの定義
    const data = {
      pokemonName: pokemonName,
      level: level,
      personality: personality,
      identity: identity,
      item: item,
      hp: hp,
      attack: attack,
      defence: defence,
      specialAttack: specialAttack,
      specialDefence: specialDefence,
      speed: speed,
      hpEffort: hpEffort,
      attackEffort: attackEffort,
      defenceEffort: defenceEffort,
      specialAttackEffort: specialAttackEffort,
      specialDefenceEffort: specialDefenceEffort,
      speedEffort: speedEffort,
    }

    // 登録ボタンクリック時にAPIへ入力データを渡す処理
    const pokemonClickRegister = () => {
      axios.post(process.env.REACT_APP_API_URL + 'pokemon_register/', data,)
      .then(response=>{
        // window.console.info(`axios-SUCCEED:${JSON.stringify(response.data.records)}`);
        setSeverity("success");
        setMessage("ポケモンの登録が完了しました。");
      })
      .catch(error=>{
        // error.response.dataの中にAPIからraiseしてきたJSONの値が格納されている
        window.console.info(`axios-FAILED:${JSON.stringify(error.response.data.error_message)}`);
        setSeverity("error");
        setMessage(error.response.data.error_message);
      })
    }

    // APIへ渡したデータをクリアする処理
    // const clearData = () => {
    //   setPokemonName(null);
    //   setLevel(null);
    //   setPersonality(null);
    //   setIdentity(null);
    //   setItem(null);
    //   setHp(null);
    //   setAttack(null);
    //   setDefence(null);
    //   setSpecialAttack(null);
    //   setSpecialDefence(null);
    //   setSpeed(null);
    //   setHpEffort(null);
    //   setAttackEffort(null);
    //   setDefenceEffort(null);
    //   setSpecialAttackEffort(null);
    //   setSpecialDefenceEffort(null);
    //   setSpeedEffort(null);
    // }

    // 性格一覧をDBから取得する処理
    const getPersonality = () => {
      axios.get(process.env.REACT_APP_API_URL + 'personality/')
      .then(response=>{
        // window.console.info(`axios-SUCCEED:${JSON.stringify(response.data.records)}`);
        response.data.records.forEach((element: any) => {
          // ループ前の配列を分解して新たにループ後の性格を一つずつ格納する
          setPersonalityList((prevState) => ([ ...prevState, element.category ]));
        })
      })
      .catch(error=>{
        window.console.info(`axios-FAILED:${error}`);
      })
    }

    // 個性一覧をDBから取得する処理
    const getIdentity = () => {
      axios.get(process.env.REACT_APP_API_URL + 'identity/')
      .then(response=>{
        // window.console.info(`axios-SUCCEED:${JSON.stringify(response.data.records)}`);
        response.data.records.forEach((element: any) => {
          // ループ前の配列を分解して新たにループ後の個性を一つずつ格納する
          setIdentityList((prevState) => ([ ...prevState, element.category ]));
        })
      })
      .catch(error=>{
        window.console.info(`axios-FAILED:${error}`);
      })
    }

    // 持ち物一覧をDBから取得する処理
    const getItem = () => {
      axios.get(process.env.REACT_APP_API_URL + 'item/')
      .then(response=>{
        // window.console.info(`axios-SUCCEED:${JSON.stringify(response.data.records)}`);
        response.data.records.forEach((element: any) => {
          // ループ前の配列を分解して新たにループ後の持ち物を一つずつ格納する
          setItemList((prevState) => ([ ...prevState, element.category ]));
        })
      })
      .catch(error=>{
        window.console.info(`axios-FAILED:${error}`);
      })
    }

    // テキストエリアで変更したポケモン名を保持する処理
    const pokemonChange = (event: any) => {
      setPokemonName(() => event.target.value);
      // console.info(`event:${JSON.stringify(pokemonName)}`);
    };

    // プルダウンで変更したLVを保持する処理
    const levelChange = (event: any) => {
      setLevel(() => event.target.value);
      // console.info(`event:${JSON.stringify(level)}`);
    };

    // プルダウンで変更した性格を保持する処理
    const personalityChange = (event: any) => {
      setPersonality(() => event.target.value);
      // console.info(`event:${JSON.stringify(personality)}`);
    };

    // プルダウンで変更した個性を保持する処理
    const identityChange = (event: any) => {
      setIdentity(() => event.target.value);
      // console.info(`event:${JSON.stringify(identity)}`);
    };

    // プルダウンで変更した持ち物を保持する処理
    const itemChange = (event: any) => {
      setItem(() => event.target.value);
      // console.info(`event:${JSON.stringify(item)}`);
    };

    // テキストエリアで変更したHPを保持する処理
    const hpChange = (event: any) => {
      setHp(() => event.target.value);
      // console.info(`event:${JSON.stringify(hp)}`);
    };

    // テキストエリアで変更した攻撃を保持する処理
    const attackChange = (event: any) => {
      setAttack(() => event.target.value);
      // console.info(`event:${JSON.stringify(attack)}`);
    };

    // テキストエリアで変更した防御を保持する処理
    const defenceChange = (event: any) => {
      setDefence(() => event.target.value);
      // console.info(`event:${JSON.stringify(defence)}`);
    };

    // テキストエリアで変更した特殊攻撃を保持する処理
    const specialAttackChange = (event: any) => {
      setSpecialAttack(() => event.target.value);
      // console.info(`event:${JSON.stringify(specialAttack)}`);
    };

    // テキストエリアで変更した特殊防御を保持する処理
    const specialDefenceChange = (event: any) => {
      setSpecialDefence(() => event.target.value);
      // console.info(`event:${JSON.stringify(specialDefence)}`);
    };

    // テキストエリアで変更した素早さを保持する処理
    const speedChange = (event: any) => {
      setSpeed(() => event.target.value);
      // console.info(`event:${JSON.stringify(speed)}`);
    };

    // テキストエリアで変更したHP努力値を保持する処理
    const hpEffortChange = (event: any) => {
      setHpEffort(() => event.target.value);
      // console.info(`event:${JSON.stringify(hpEffort)}`);
    };

    // テキストエリアで変更した攻撃努力値を保持する処理
    const attackEffortChange = (event: any) => {
      setAttackEffort(() => event.target.value);
      // console.info(`event:${JSON.stringify(attackEffort)}`);
    };

    // テキストエリアで変更した防御努力値を保持する処理
    const defenceEffortChange = (event: any) => {
      setDefenceEffort(() => event.target.value);
      // console.info(`event:${JSON.stringify(defenceEffort)}`);
    };

    // テキストエリアで変更した特殊攻撃努力値を保持する処理
    const specialAttackEffortChange = (event: any) => {
      setSpecialAttackEffort(() => event.target.value);
      // console.info(`event:${JSON.stringify(specialAttackEffort)}`);
    };

    // テキストエリアで変更した特殊防御努力値を保持する処理
    const specialDefenceEffortChange = (event: any) => {
      setSpecialDefenceEffort(() => event.target.value);
      // console.info(`event:${JSON.stringify(specialDefenceEffort)}`);
    };

    // テキストエリアで変更した素早さ努力値を保持する処理
    const speedEffortChange = (event: any) => {
      setSpeedEffort(() => event.target.value);
      // console.info(`event:${JSON.stringify(speedEffort)}`);
    };

  return (
    <>
    {/* success/errorメッセージがstateに設定されたらスナックバーをそれぞれの色で描画 */}
      {messageState !== "" ? <SnackBar severity={severity} message={messageState}/> : null}
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
                  <TextField
                    className='pokemon_name'
                    id="outlined-basic"
                    label="ポケモン"
                    variant="outlined"
                    // ポケモン名テキストエリアの値
                    onChange={pokemonChange}
                    value={pokemonName}
                  />
                </div>
                <div className='personality_container'>
                  <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-autowidth-label3">レベル</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label3"
                      id="demo-simple-select-autowidth"
                      onChange={levelChange}
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
                      onChange={personalityChange}
                      label="性格"
                    >
                      <MenuItem value="">
                        <em>未選択</em>
                      </MenuItem>
                      {/* DBから取得した性格一覧をプルダウンに表示する */}
                      {personalityList.map((element: string, index: number) => (
                        <MenuItem value={element} key={index}>{element}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-autowidth-label2">個性</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label2"
                      id="demo-simple-select-autowidth"
                      onChange={identityChange}
                      label="個性"
                    >
                      <MenuItem value="">
                        <em>未選択</em>
                      </MenuItem>
                      {/* DBから取得した個性一覧をプルダウンに表示する */}
                      {identityList.map((element: string, index: number) => (
                        <MenuItem value={element} key={index}>{element}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <InputLabel id="demo-simple-select-autowidth-label3">持ち物</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-3"
                        id="demo-simple-select-autowidth"
                        onChange={itemChange}
                        label="持ち物"
                        >
                        <MenuItem value="">
                          <em>未選択</em>
                        </MenuItem>
                      {/* DBから取得した持ち物一覧をプルダウンに表示する */}
                      {itemList.map((element: string, index: number) => (
                        <MenuItem value={element} key={index}>{element}</MenuItem>
                      ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className='param_container'>
                  <div className='status_container'>
                    <TextField
                     className='status_box'
                     id="outlined-basic"
                     label="HP"
                     variant="outlined"
                     // HPテキストエリアの値
                     value={hp}
                     onChange={hpChange}
                    />
                    <TextField
                     className='status_box'
                     id="outlined-basic"
                     label="攻撃"
                     variant="outlined"
                     // 攻撃テキストエリアの値
                     value={attack}
                     onChange={attackChange}
                    />
                    <TextField
                     className='status_box'
                     id="outlined-basic"
                     label="防御"
                     variant="outlined"
                     // 防御テキストエリアの値
                     value={defence}
                     onChange={defenceChange}
                    />
                    <TextField
                     className='status_box'
                     id="outlined-basic"
                     label="特攻"
                     variant="outlined"
                     // 特殊攻撃テキストエリアの値
                     value={specialAttack}
                     onChange={specialAttackChange}
                    />
                    <TextField
                     className='status_box'
                     id="outlined-basic"
                     label="特防"
                     variant="outlined"
                     // 特殊防御テキストエリアの値
                     value={specialDefence}
                     onChange={specialDefenceChange}
                    />
                    <TextField
                     className='status_box'
                     id="outlined-basic"
                     label="素早さ"
                     variant="outlined"
                     // 素早さテキストエリアの値
                     value={speed}
                     onChange={speedChange}
                    />
                  </div>
                  <div className='effort_container'>
                    <TextField
                     className='effort_box'
                     id="outlined-basic"
                     label="努力値"
                     variant="outlined"
                     // HP努力値テキストエリアの値
                     value={hpEffort}
                     onChange={hpEffortChange}
                    />
                    <TextField
                     className='effort_box'
                     id="outlined-basic"
                     label="努力値"
                     variant="outlined"
                     // 攻撃努力値テキストエリアの値
                     value={attackEffort}
                     onChange={attackEffortChange}
                    />
                    <TextField
                     className='effort_box'
                     id="outlined-basic"
                     label="努力値"
                     variant="outlined"
                     // 防御努力値テキストエリアの値
                     value={defenceEffort}
                     onChange={defenceEffortChange}
                    />
                    <TextField
                     className='effort_box'
                     id="outlined-basic"
                     label="努力値"
                     variant="outlined"
                     // 特殊攻撃努力値テキストエリアの値
                     value={specialAttackEffort}
                     onChange={specialAttackEffortChange}
                    />
                    <TextField
                     className='effort_box'
                     id="outlined-basic"
                     label="努力値"
                     variant="outlined"
                     // 特殊防御努力値テキストエリアの値
                     value={specialDefenceEffort}
                     onChange={specialDefenceEffortChange}
                    />
                    <TextField
                     className='effort_box'
                     id="outlined-basic"
                     label="努力値"
                     variant="outlined"
                     // 素早さ努力値テキストエリアの値
                     value={speedEffort}
                     onChange={speedEffortChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className='form_btn_container'>
          <Button
           className='register_btn'
           variant="contained"
           onClick={pokemonClickRegister}
          //  disabled={pokemonName === "" ? false : true}
          >登録
          </Button>
        </div>
      </Paper>
    </Box>
    </>
  );
}
