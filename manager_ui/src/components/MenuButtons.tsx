// メニュー画面でのメニュー項目ボタンのコンポーネント
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { RoutingLogic } from '../logic/router-logic';
import Paper from '@mui/material/Paper';

import '../css/MenuButton.css';

export default function MenuButtons() {

  const router = RoutingLogic()

  const toPartyRegister = () => {
    router.toPartyRegister();
  }

  const toPokemonRegister = () => {
    router.toPokemonRegister();
  }

  return (
    <>
      <Box
        className='button_container'
        sx={{
          '& > *': {
            m: 2,
          },
        }}
        >
        <Paper elevation={3}>
          <Button
            className='button'
            style={{width: "100%"}}
            key="pokemon_register"
            onClick={toPokemonRegister}
            >ポケモン登録
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
            key="props3">バトル戦績
          </Button>
        </Paper>
        <Paper elevation={3}>
          <Button
            className='button'
           style={{width: "100%"}}
           key="props4">ポケモン選出率
          </Button>
        </Paper>
        </Box>
    </>
  );
}