import styled from "styled-components"

export const CursorContent = styled.div`
  filter: url(#goo);
  position: absolute !important;
  z-index: 999 !important;
  pointer-events: none;
  mix-blend-mode: difference !important;
`

export const CursorModify = styled.div`
  position: absolute !important;
  background-color: ${props=>props.theme.colors.white};
  border-radius: 50%;
  pointer-events: none;
  z-index: 999 !important;
  width: ${props=> props.size+'px'};
  height: ${props=> props.size+'px'};
`