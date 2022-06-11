// ポケモン登録画面のコンポーネント
import React from 'react'

import Header from './Header'
import ComponentTitle from './ComponentTitle'
import PokemonRegisterForm from './PokemonRegisterForm'

const PokemonRegister = () => {
  return (
    <>
      <Header />
      <ComponentTitle title="ポケモン登録" />
      <PokemonRegisterForm/>
    </>
  )
}

export default PokemonRegister