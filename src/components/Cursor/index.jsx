import React, { useEffect, useRef } from 'react'
import { CursorContent, CursorModify } from './style'

export default function Cursor() {
  const cursorRef = useRef() 
  const cursorRef2 = useRef() 
  const cursorRef3 = useRef() 
  const cursorRef4 = useRef() 
  const cursorRef5 = useRef() 
  const cursorRef6 = useRef() 
  const cursorRef7 = useRef() 

  const handleChangePositionCursor = (e, ref) => {
    ref.current.style.top = e.pageY - 15 + "px"
    ref.current.style.left = e.pageX - 15 + "px"
  }

  const handleCursorChange = async e => {
    handleChangePositionCursor(e, cursorRef)
    await new Promise(resolve => setTimeout(resolve, 30))

    handleChangePositionCursor(e, cursorRef2)
    await new Promise(resolve => setTimeout(resolve, 30))

    handleChangePositionCursor(e, cursorRef3)
    await new Promise(resolve => setTimeout(resolve, 30))

    handleChangePositionCursor(e, cursorRef4)
    await new Promise(resolve => setTimeout(resolve, 30))

    handleChangePositionCursor(e, cursorRef5)
    await new Promise(resolve => setTimeout(resolve, 30))

    handleChangePositionCursor(e, cursorRef6)
    await new Promise(resolve => setTimeout(resolve, 30))

    handleChangePositionCursor(e, cursorRef7)
  }

  useEffect(()=>{
    window.addEventListener("mousemove", handleCursorChange);
    return _ => {
        window.removeEventListener("mousemove", handleCursorChange);
    }
  },[])

  return (
    <CursorContent>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="d-none">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 75 -10" result="goo" />
            <feBlend in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
      </svg>
      <CursorModify className="cursor" ref={cursorRef} size={24}/>
      <CursorModify className="cursor" ref={cursorRef2} size={22}/>
      <CursorModify className="cursor" ref={cursorRef3} size={20}/>
      <CursorModify className="cursor" ref={cursorRef4} size={18}/>
      <CursorModify className="cursor" ref={cursorRef5} size={16}/>
      <CursorModify className="cursor" ref={cursorRef6} size={14}/>
      <CursorModify className="cursor" ref={cursorRef7} size={12}/>
    </CursorContent>
  )
}
