/*
体重管理ページのコンポーネント
*/
import React, { useEffect, useState, useRef } from 'react'

import axios from 'axios';
import { FormControl, InputLabel, Select } from '@mui/material';

import Header from './Header';

type userDataList = {
  id: number,
  weight: number,
  users: string[],
}

const BodyManage = () => {
  
  const [weights, setWeights] = useState(0);
  const [userName, setUserName] = useState<userDataList | never[]>([]);
  const [selectUser, setSelectUser] = useState("");
  const isFirstRender = useRef(false);

  useEffect(()=> {
    isFirstRender.current = true
    userSet();
  }, [])

  useEffect(()=> {
    if(isFirstRender.current) {
      isFirstRender.current = false
    } else {
      weightSearch();
    }
  }, [selectUser])

  const userSet = () => {
    axios.get(process.env.REACT_APP_API_URL + 'history_user/')
    .then(res => {
      const resultList = res.data.records;
      console.log(`axios-SUCCEED:${JSON.stringify(resultList)}`, `型:${typeof(resultList)}`);
      setUserName(resultList);
      console.log(`userName:${JSON.stringify(userName)}`, `型:${typeof(userName)}`);

      // resultList.map((elem: string[]) => setUserName([...userName, elem]))
      // Object.values(resultList).map((elem: any)=> setUserName({...userName, elem}));
    })
    .catch((error) => {
      console.log(`axios-FAILED:${error}`);
    })
  }

  const userChange = (e: any) => {
    console.log(`選択ユーザー名:${e.target.value}`)
    setSelectUser(e.target.value);
  }
 
  const weightSearch = () => {
    const data = {
      user_name: selectUser
    }
    const headers = {
      'Content-Type': 'application/json'
    }  
    axios.post(process.env.REACT_APP_API_URL + 'body_weight/', data, {
      headers: headers
    }).then(res => {
      const resultList = res.data.records;
      console.log(`axios-SUCCEED:${resultList}`, `型:${typeof(resultList)}`)
      setWeights(resultList)
    })
    .catch((error) => {
      console.log(`axios-FAILED:${error}`);
    })
  }
  
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
      value={selectUser}
      >
      {/* {userName.map((value: string, index: number)=><option value={value} key={index}>{value}</option>)} */}
      {Object.values(userName).map((value: any)=> <option>{value}</option>)}
    </Select>
    </FormControl>
    <p>{weights}</p>
    </>
  )
}

export default BodyManage