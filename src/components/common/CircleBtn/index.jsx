import React from 'react'
import Arrow from '../../../assets/arrow.svg'
import Circle from '../../../assets/circle.svg'
import { CircleBtnContainer, CircleContent, MessageBtn } from './style'

export default function CircleBtn({message}) {
  return (
    <CircleBtnContainer>
      <MessageBtn>{message}</MessageBtn>
      <CircleContent>
        <img  id='arrow-btn' src={Arrow}/>
        <img  id='circle-btn' src={Circle}/>
      </CircleContent>
    </CircleBtnContainer>
  )
}
