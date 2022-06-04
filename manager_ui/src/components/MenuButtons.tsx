import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { RoutingLogic } from '../logic/router-logic';

export default function MenuButtons() {

  const router = RoutingLogic()

  const toPartyRegister = () => {
    router.toPartyRegister();
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
          },
        }}
        >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          style={{margin: "0 auto", marginTop: "20px" }}
          >
          <Button
            style={{width: "650px"}}
            key="party_register"
            onClick={toPartyRegister}
            >
            パーティー登録</Button>
          <Button
            style={{width: "650px"}}
            key="props2"
            >hoge</Button>
          <Button
            style={{width: "650px"}}
            key="props3">huga</Button>
          <Button
           style={{width: "650px"}}
           key="props4">piyo</Button>
        </ButtonGroup>
        </Box>
    </>
  );
}