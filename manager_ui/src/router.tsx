// router-logic.tsx -> router.tsx -> App.tsx -> index.html
// App.tsxからルーティングするためのPathとコンポーネントを記載する
import React from 'react'

import { Routes, Route } from "react-router-dom"

import Menu from './components/Menu';
import PartyRegister from './components/PartyRegister';

export const Path = {
    Menu: '/',
    PartyRegister: '/party_register'
};

const router = (
    <Routes>
        <Route path={Path.Menu} element={<Menu/>}></Route>
        <Route path={Path.PartyRegister} element={<PartyRegister/>}></Route>
    </Routes>
)

export default router