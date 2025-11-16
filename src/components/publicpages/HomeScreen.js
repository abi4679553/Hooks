import React, { useContext } from 'react'
import { DContext } from '../../store/DataProvider'

export const HomeScreen = () => {
    const {sra , friendInfromation , numbers ,myinfo} = useContext(DContext)
  return (
    <div>
        {`Hi my name is ${sra.name} , my age is ${sra.age}`}
    </div>
  )
}
