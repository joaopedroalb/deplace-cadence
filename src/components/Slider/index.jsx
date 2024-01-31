import React from 'react'
import { SliderContainer } from './style'
import { Text } from '../../style/common'

export default function Slider() {

  const Slide = () => {
    return (
        <div div class="slide">
          <Text className='textSlide dot' font={'sr'}>DEPLACE SHOP</Text>
          <Text className='textSlide' font={'sr'}>DO NOT SCROLL</Text>
        </div>
    )
  }

  return (
    <SliderContainer>
      <div className='firstLine'>
        <Slide/>  
        <Slide/>  
      </div>
      <div className='secondLine'>
        <Slide/>  
        <Slide/>  
      </div>
    </SliderContainer>
  )
}
