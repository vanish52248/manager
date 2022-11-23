// メニュー画面でのメニュー項目ボタンのコンポーネント
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { RoutingLogic } from '../logic/router-logic';
import Paper from '@mui/material/Paper';

import '../css/MenuButton.css';

export default function MenuButtons() {

  const router = RoutingLogic()

  // パーティー登録画面
  const toPartyRegister = () => {
    router.toPartyRegister();
  }

  // ポケモン登録画面
  const toPokemonRegister = () => {
    router.toPokemonRegister();
  }

  // バトル戦績画面
  const toBattleRecord = () => {
    router.toBattleRecord();
  }

  // ポケモン選出率画面
  const toPokemonSelectionRate = () => {
    router.toPokemonSelectionRate();
  }

  return (
    <>
      <Box
        className='button_container'
        sx={{
          '& > *': {
            m: 4,
          },
        }}
        >
        <Paper elevation={3}>
          <Button
            className='button'
            style={{width: "100%"}}
            key="pokemon_register"
            onClick={toPokemonRegister}
          >
            ポケモン登録
          </Button>
        </Paper>
        <Paper elevation={3}>
          <Button
            className='button'
            style={{width: "100%"}}
            key="party_register"
            onClick={toPartyRegister}
          >
            パーティー登録
          </Button>
        </Paper>
        <Paper elevation={3}>
          <Button
            className='button'
            style={{width: "100%"}}
            key="battle_record"
            onClick={toBattleRecord}
          >
            バトル戦績
          </Button>
        </Paper>
        <Paper elevation={3}>
          <Button
            className='button'
           style={{width: "100%"}}
           key="pokemon_selection_rate"
           onClick={toPokemonSelectionRate}
          >
            ポケモン選出率
          </Button>
        </Paper>
        <Box sx={{ flexGrow: 2 }} className="how_to_use_box">
          {/* <h2 className='how_to_use_title'>使い方</h2> */}
          <p className='how_to_use_text'>
          下記手順でポケモン・パーティー登録から選出率の確認まで行ってください。<br />
          1. ポケモン登録<br />
          2. パーティー登録<br />
          3. バトル戦績登録<br />
          4. ポケモン選出率確認<br />
          </p>
        </Box>
        </Box>
    </>
  );
}
