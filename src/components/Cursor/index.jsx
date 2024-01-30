import React, { useEffect } from 'react'
import { CursorContent } from './style'

export default function Cursor() {
  const handleCursorChange = e => {
    const cursor = document.getElementById("cursor")
    const tip = document.getElementById("tip")

    cursor.style.top = e.pageY - 20 + "px"
    cursor.style.left = e.pageX - 20 + "px"
    
    tip.style.display = "none";
  }

  useEffect(()=>{
    window.addEventListener("mousemove", handleCursorChange);
    return _ => {
        window.removeEventListener("mousemove", handleCursorChange);
    }
  },[])

  return (
    <CursorContent>
      <div id="cursor"/>
    </CursorContent>
  )
}
