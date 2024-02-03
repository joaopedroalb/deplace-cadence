import React from 'react'
import { Text } from '../../../style/common'
import { HeaderContainer, ImageBox, ImageContainer } from './style'
import ManPhoto from '../../../assets/man.png'
import WomenPhoto from '../../../assets/women.png'
import EqualPhoto from '../../../assets/equal.svg'
import CircleBtn from '../../common/CircleBtn'

export default function HeaderSection() {
  return (
    <HeaderContainer>
      <Text font={'os'} size={[4,'-0.1132rem + 10.8719vi',16.625]} weight={500}>SPRING</Text>
      <div className='second-line'>
        <Text font={'os'} size={[4,'-0.1132rem + 10.8719vi',16.625]} weight={500}>SUMMER</Text>
        <Text font={'os'} size={[2,'0.6212rem + 4.521vi',8.25]} weight={400} className='col-text'>COLL.</Text>
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
      <div className='btn-row'>
        <CircleBtn message={'EXPLORE'}/>
      </div>
    </HeaderContainer>
  )
}
