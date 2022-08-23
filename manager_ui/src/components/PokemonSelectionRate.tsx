// ポケモン選出率画面のコンポーネント
import React from 'react'

import Header from './Header'
import ComponentTitle from './ComponentTitle'
import PokemonSelectionRateForm from './PokemonSelectionRateForm'

const PokemonSelectionRate = () => {
  return (
    <>
      <Header />
      <ComponentTitle title="ポケモン選出率" />
      <PokemonSelectionRateForm />
    </>
  )
}

export default PokemonSelectionRate