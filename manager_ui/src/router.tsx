// router-logic.tsx -> router.tsx -> App.tsx -> index.html
// App.tsxからルーティングするためのPathとコンポーネントを記載する
import React from 'react'

import { Routes, Route } from "react-router-dom"

import Menu from './components/Menu';
import PartyRegister from './components/PartyRegister';
import PokemonRegister from './components/PokemonRegister';

export const Path = {
    Menu: '/',
    PartyRegister: '/party_register',
    PokemonRegister: '/pokemon_register'
};

const router = (
    <Routes>
        <Route path={Path.Menu} element={<Menu/>}></Route>
        <Route path={Path.PartyRegister} element={<PartyRegister/>}></Route>
        <Route path={Path.PokemonRegister} element={<PokemonRegister/>}></Route>
    </Routes>
)

export default router