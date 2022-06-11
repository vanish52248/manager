// パーティー登録画面のコンポーネント
import React from 'react'

import Header from './Header'
import ComponentTitle from './ComponentTitle'
import PartyGrid from './PartyGrid'

const PartyRegister = () => {
  return (
    <>
      <Header />
      <ComponentTitle title="パーティー登録" />
      <PartyGrid />
    </>
  )
}

export default PartyRegister