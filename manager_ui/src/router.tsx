import React from 'react'

import { Routes, Route } from "react-router-dom"

import Menu from './components/Menu';
import BodyManage from './components/BodyManage';

export const Path = {
    Menu: '/',
    BodyManage: '/body_manage'
};

const router = (
    <Routes>
        <Route path={Path.Menu} element={<Menu/>}></Route>
        <Route path={Path.BodyManage} element={<BodyManage/>}></Route>
    </Routes>
)

export default router