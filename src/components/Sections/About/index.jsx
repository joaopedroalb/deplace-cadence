import React from 'react'
import { Text } from '../../../style/common'
import { AboutContainer, TextContainer } from './style'


export default function About() {
  return (
    <AboutContainer>
      <TextContainer>
        <Text className='title'>WHO WE ARE</Text>
        <Text size={[1.5,'1.3535rem + 0.7535vi',1.9375]} weight={400} lineHeight={1.4}>We're the cool cats of <b>Antarctic</b> style, rocking urban trekking shoes and snazzy accessories</Text>
        <Text size={[1.5,'1.3535rem + 0.7535vi',1.9375]} weight={400} lineHeight={1.4}>dive into the fusion of artsy flair and penguin personalities</Text>
        <Text size={[1.5,'1.3535rem + 0.7535vi',1.9375]} weight={400} lineHeight={1.4}>where frosty meets fresh in every step.</Text>
      </TextContainer>
    </AboutContainer>
  )
}
