import styled from "styled-components"

export const CursorContent = styled.div`
  #cursor {
  background-color: black;
  border-radius: 40px;
  
  height: 40px;
  width: 40px;
  
  display: block;
  position: absolute;
  top: 25px;
  left: 0;
  
  filter: invert(2);
  mix-blend-mode: difference;
}

@keyframes blink {
  50% {
    opacity: 0.0;
  }
}
@-webkit-keyframes blink {
  50% {
    opacity: 0.0;
  }
}
`