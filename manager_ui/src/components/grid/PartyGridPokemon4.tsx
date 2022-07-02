// // グリッドごと(*6)に表示するポケモン情報のコンポーネント
import React, { useState, useEffect } from 'react'

import axios from 'axios'

import '../../css/PartyGridPokemon.css';

const PartyGridPokemon4 = (props: any) => {
    // // DBから取得したダイアログごとに表示するポケモン情報を格納する配列
    const [pokemonValueList, setPokemonValueList] = useState<any>([]);

    // ダイアログからポケモン情報取得時に毎回最初に起動させる処理
    useEffect(() => {
        getPokemonList()
    },[])
        
    // グリッド毎に一致したポケモン情報をDBから取得する処理
    // GETの場合はクエリストリングにパラメータ乗せるか"option"でパラメータつける方法で使用
    const getPokemonList = () => {
      axios.get(process.env.REACT_APP_API_URL + 'party_grid/', {
        params: {
            // ポケモンの名前とグリッドの番号をパラメータとしてAPIに渡す
            pokemon_name4: (props.currentSelectPokemon4),
            index: props.index,
        }
      })
      .then(response=>{
            window.console.info(`axios-SUCCEED:${JSON.stringify(response.data.records[0])}`);
            if (props.index === 3) {
                const keyLst = [];
                const valueLst = [];
                for (const [key, value] of Object.entries(response.data.records[0])) {
                  keyLst.push(key);
                  valueLst.push(value);
                }
                setPokemonValueList(valueLst);
            }
        })
        .catch(error=>{
            window.console.info(`axios-FAILED:${error}`);
        })
    }

  return (
      <div className='total_container'>
        <div className='key_container'>
          <div>
            <p>ID</p>
            <p>名前</p>
            <p>レベル</p>
            <p>性格</p>
            <p>個性</p>
            <p>持ち物</p>
            <p>HP</p>
            <p>攻撃</p>
            <p>防御</p>
            <p>特攻</p>
            <p>特防</p>
            <p>素早さ</p>
            <p>HP努力値</p>
            <p>攻撃努力値</p>
            <p>防御努力値</p>
            <p>特攻努力値</p>
            <p>特防努力値</p>
            <p>素早さ努力値</p>
            <p>作成日時</p>
            <p>更新日時</p>
          </div>
        </div>
        <div className='value_container'>
          {pokemonValueList.map((row: any) => (
            <p>{row === null ? "-" : row}</p>
          ))}
        </div>
      </div>
  )
}

export default PartyGridPokemon4