import React from 'react';
import { Tooltip, Typography } from '@mui/material';

import '../css/Header.css';
import { RoutingLogic } from '../logic/router-logic';
import HomeIcon from '../images/to_home.jpg';

const Header = () => {
  const router = RoutingLogic();

  const toMenu = () => {
    router.toMenu();
  }

  return (
    <>
      <div className="header_wrapper">
        <div onClick={toMenu}>
          <Tooltip title={<Typography style={{fontSize: "15px"}}>メニュー選択へ戻る</Typography>}>
            <img src={HomeIcon} style={{width: "50px", cursor: "pointer"}} />
          </Tooltip>
        </div>
        <div>
        ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域ここはヘッダー領域
        </div>
      </div>
    </>
  )
};

export default Header;
