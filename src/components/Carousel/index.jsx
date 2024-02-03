import React, { useEffect, useRef, useState } from 'react'
import { CarouselContainer, ProductCard } from './style'
import { PRODUCTS } from './constants'
import { Text } from '../../style/common'

import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import CircleBtn from '../common/CircleBtn';


export default function Carousel() {

  const getGenderItem = (gender) => {
    switch(gender) {
      case 'M': 
        return `MAN'S`
      case 'W':
        return 'WOMAN'
      default: 
        return 'UNISEX'
    }
  }


  return (
    <CarouselContainer>
      <ScrollContainer className='carousel'>
        {
          PRODUCTS && PRODUCTS.map(product=>{
            return (
              <ProductCard key={product.id} isMale={product.gender==='M'} hasPromo={product.promo}>
                <img src={product.image}/>
                <Text className='gender' font={'gh'} weight={500}>{getGenderItem(product.gender)}</Text>
                <Text font={'ps'} className='name'>{product.name}</Text>
                <Text className='cost'>{product.cost}</Text>
                {product.promo && <Text className='cost-promo'>{product.promo}</Text>}
              </ProductCard>
            )
          })
        }
      </ScrollContainer>
      <div className='btn-row'>
        <CircleBtn message='SHOP ALL'/>
      </div>
    </CarouselContainer>
  )
}
