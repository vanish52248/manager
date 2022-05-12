/*
体重管理ページのコンポーネント
*/
import React, { useEffect, useState, useRef } from 'react'

import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import Header from './Header';

type dataList = {
  users: string,
}

const BodyManage = () => {
  // -------------------------------------------------------------------
  // useState
  const [weights, setWeights] = useState(0);
  const [userName, setUserName] = useState<dataList[]>([]);
  const [selectUser, setSelectUser] = useState("");
  const isFirstRender = useRef(false);
  // -------------------------------------------------------------------

  // -------------------------------------------------------------------
  // 初回読み込み時のみ走るuseEffect
  useEffect(()=> {
    isFirstRender.current = true
    userSet();
  }, [])
  // -------------------------------------------------------------------

  // -------------------------------------------------------------------
  // ユーザーが変更された際の体重取得のuseEffect
  useEffect(()=> {
    if(isFirstRender.current) {
      isFirstRender.current = false
    } else {
      weightSearch();
    }
  }, [selectUser])
  // -------------------------------------------------------------------


  // -------------------------------------------------------------------
  // userをプルダウンにセットする処理
  const userSet = () => {
    axios.get(process.env.REACT_APP_API_URL + 'history_user/')
    .then(res => {
      const resultList = res.data.records;
      console.log(`axios-SUCCEED:${JSON.stringify(resultList)}`, `型:${typeof(resultList)}`);
      setUserName(resultList);
    })
    .catch((error) => {
      console.log(`axios-FAILED:${error}`);
    })
  }
  // -------------------------------------------------------------------


  // -------------------------------------------------------------------
  // プルダウンが選択されたユーザーに変更する処理
  const userChange = (e: any) => {
    console.log(`選択ユーザー名:${e.target.value}`)
    // selectboxのvalue={}の値をsetSelectUserする
    setSelectUser(e.target.value);
  }
  // -------------------------------------------------------------------


  // -------------------------------------------------------------------
  // プルダウンが選択されたユーザーの体重を取得する処理
  const weightSearch = () => {    
    axios.post(process.env.REACT_APP_API_URL + 'body_weight/', {
      // TODO viewsに渡らない
      user_name : selectUser
    }, {
      withCredentials: true
    }).then(res => {
      const resultList = res.data.records;
      console.log(`axios-SUCCEED:${resultList}`, `型:${typeof(resultList)}`)
      setWeights(resultList)
    })
    .catch((error) => {
      console.log(`axios-FAILED:${error}`);
    })
  }
  // -------------------------------------------------------------------


  // -------------------------------------------------------------------
  // JSX
  return (
    <>
    <Header />
    <h1>体重管理ページ</h1>
    <FormControl style={{width: "300px"}}>
    <InputLabel id="demo-simple-select-label">ユーザー名</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="ユーザー名"
      onChange={userChange}
      >
      {/* selectboxの中身をDBからの値で動的に更新する */}
      {userName.map((row, index) => (
        <MenuItem key={index} value={row.users}>{row.users}</MenuItem>
      ))}
    </Select>
    </FormControl>
    <p>{weights}</p>
    </>
  )
}
// -------------------------------------------------------------------

export default BodyManage