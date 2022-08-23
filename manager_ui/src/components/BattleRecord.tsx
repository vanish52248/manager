// バトル戦績画面のコンポーネント
import React from 'react'

import Header from './Header'
import ComponentTitle from './ComponentTitle'
import BattleRecordForm from './BattleRecordForm'

const BattleRecord = () => {
  return (
    <>
      <Header />
      <ComponentTitle title="バトル戦績" />
      <BattleRecordForm/>
    </>
  )
}

export default BattleRecord