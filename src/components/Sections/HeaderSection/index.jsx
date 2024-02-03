import React from 'react'
import { Text } from '../../../style/common'
import { HeaderContainer, ImageBox, ImageContainer, TextContainer } from './style'
import ManPhoto from '../../../assets/man.png'
import WomenPhoto from '../../../assets/women.png'
import EqualPhoto from '../../../assets/equal.svg'
import CircleBtn from '../../common/CircleBtn'

export default function HeaderSection() {
  return (
    <HeaderContainer>
      <TextContainer>
        <div className='text-line'>
          <Text font={'os'} size={[4,'-0.1132rem + 10.8719vi',16.625]} weight={600} className='animation-text text1'>SPRING,</Text>
        </div>
        <div className='text-line'>
          <Text font={'os'} size={[4,'-0.1132rem + 10.8719vi',16.625]} weight={600} className='animation-text text2'>SUMMER</Text>
          <Text font={'os'} size={[2,'0.5212rem + 2.821vi',3.6]} weight={400} className='col-text'>COLL.</Text>
        </div>
      </TextContainer>
      <ImageContainer>
        <ImageBox className='left'>
          <img src={ManPhoto}/>
          <Text className='photo-number'>(01)</Text>
          <Text className='photo-desc'>MAN</Text>
        </ImageBox>

        <ImageBox className='right'>
          <img src={WomenPhoto}/>
          <Text className='photo-number'>(02)</Text>
          <Text className='photo-desc'>WOMEN</Text>
        </ImageBox>

        <img src={EqualPhoto} className='equal-image'/>
      </ImageContainer>
      <div className='btn-row'>
        <CircleBtn message={'EXPLORE'}/>
      </div>
    </HeaderContainer>
  )
}
