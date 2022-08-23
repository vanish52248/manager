// router-logic.tsx -> router.tsx -> App.tsx -> index.html
// App.tsxからルーティングするためのPathとコンポーネントを記載する
import React from 'react'

import { Routes, Route } from "react-router-dom"

import Menu from './components/Menu';
import PartyRegister from './components/PartyRegister';
import PokemonRegister from './components/PokemonRegister';
import BattleRecord from './components/BattleRecord';
import PokemonSelectionRate from './components/PokemonSelectionRate';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';

export const Path = {
    // ログイン画面
    Login: '/',
    // ログアウト画面
    Logout: '/logout',
    // サインアップ画面
    Signup: '/Signup',
    // メニュー画面
    Menu: '/menu',
    // パーティー登録画面
    PartyRegister: '/party_register',
    // ポケモン登録画面
    PokemonRegister: '/pokemon_register',
    // バトル戦績画面
    BattleRecord: '/battle_record',
    // ポケモン選出率画面
    PokemonSelectionRate: '/pokemon_selection_rate',
};

const router = (
    <Routes>
        {/* ログイン画面 */}
        <Route path={Path.Login} element={<Login/>}></Route>
        {/* ログアウト画面 */}
        <Route path={Path.Logout} element={<Logout/>}></Route>
        {/* サインアップ画面 */}
        <Route path={Path.Signup} element={<Signup/>}></Route>
        {/* メニュー画面 */}
        <Route path={Path.Menu} element={<Menu/>}></Route>
        {/* パーティー登録画面 */}
        <Route path={Path.PartyRegister} element={<PartyRegister/>}></Route>
        {/* ポケモン登録画面 */}
        <Route path={Path.PokemonRegister} element={<PokemonRegister/>}></Route>
        {/* バトル戦績画面 */}
        <Route path={Path.BattleRecord} element={<BattleRecord/>}></Route>
        {/* ポケモン選出率画面 */}
        <Route path={Path.PokemonSelectionRate} element={<PokemonSelectionRate/>}></Route>
    </Routes>
)

export default router
