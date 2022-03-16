import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { RoutingLogic } from '../logic/router-logic';

export default function MenuButtons() {

  const router = RoutingLogic()

  const toBodyManage = () => {
    router.toBodyManage();
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
            key="body_weight"
            onClick={toBodyManage}
            >
            体重管理</Button>
          <Button
            style={{width: "650px"}}
            key="props2"
            >排泄管理</Button>
          <Button
            style={{width: "650px"}}
            key="props3">運動管理</Button>
          <Button
           style={{width: "650px"}}
           key="props4">TODO</Button>
          <Button
            style={{width: "650px"}}
            key="props5">日記</Button>
          </ButtonGroup>
        </Box>
    </>
  );
}