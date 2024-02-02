import React, { useEffect, useRef, useState } from 'react'
import { CarouselContainer } from './style'

export default function Carousel() {
  const [mouseDown, setMouseDown] = useState(false)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [startX, setStartX] = useState(0)
  const sliderRef = useRef()

  const startDragging = (e) => {
    setMouseDown(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const stopDragging = () => {
    setMouseDown(false)
  }

  const move = (e) => {
    e.preventDefault();

    if(!mouseDown)
     return

    const x = e.pageX - sliderRef.current.offsetLeft;
    const scroll = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - scroll;
  }

  useEffect(()=>{
    if (mouseDown)
      sliderRef.current.style.cursor = 'grabbing'
    else
      sliderRef.current.style.cursor = 'grab'
  }, [mouseDown])



  return (
    <CarouselContainer ref={sliderRef} onMouseMove={move} onMouseDown={startDragging} onMouseUp={stopDragging} onMouseLeave={stopDragging}>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 1</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 2</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 3</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 4</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 5</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 6</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 7</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 8</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 9</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 10</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 11</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 12</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 13</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 14</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 15</div>
      <div style={{backgroundColor: 'red', minWidth: '250px'}}>Teste 16</div>
    </CarouselContainer>
  )
}
