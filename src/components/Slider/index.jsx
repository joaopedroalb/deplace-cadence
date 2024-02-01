import React from 'react'
import { SliderContainer } from './style'
import { Text } from '../../style/common'

export default function Slider() {

  const IS_MOBILE = window.innerWidth <= 885

  console.log({
    widht: window.innerWidth,
    IS_MOBILE
  })

  const Slide = () => {
    return (
        <div div class="slide">
          <Text className='textSlide dot' font={'sr'}>DEPLACE SHOP</Text>
          <Text className='textSlide' font={'sr'}>DO NOT SCROLL</Text>
        </div>
    )
  }

  return (
    <SliderContainer isMobile={IS_MOBILE}>
      <div className='firstLine'>
        <Slide/>  
        {!IS_MOBILE && <Slide/>}
      </div>
      <div className='secondLine'>
        <Slide/>  
        {!IS_MOBILE && <Slide/>}  
      </div>
    </SliderContainer>
  )
}
