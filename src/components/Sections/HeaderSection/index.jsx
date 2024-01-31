import React from 'react'
import { Text } from '../../../style/common'
import { HeaderContainer, ImageBox, ImageContainer } from './style'
import ManPhoto from '../../../assets/man.png'
import WomenPhoto from '../../../assets/women.png'
import EqualPhoto from '../../../assets/equal.svg'

export default function HeaderSection() {
  return (
    <HeaderContainer>
      <Text font={'os'} size={133} weight={500}>SPRING</Text>
      <div className='second-line'>
        <Text font={'os'} size={133} weight={500}>SUMMER</Text>
        <Text font={'os'} size={62} weight={400} className='col-text'>COLL.</Text>
      </div>
      <ImageContainer>
        <ImageBox>
          <img src={ManPhoto}/>
          <Text className='photo-number'>(01)</Text>
          <Text className='photo-desc'>MAN</Text>
        </ImageBox>

        <ImageBox>
          <img src={WomenPhoto}/>
          <Text className='photo-number'>(02)</Text>
          <Text className='photo-desc'>WOMEN</Text>
        </ImageBox>

        <img src={EqualPhoto} className='equal-image'/>
      </ImageContainer>
    </HeaderContainer>
  )
}
