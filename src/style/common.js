import styled from "styled-components"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden!important;
  position: relative;
`

const FontObject = {
  gh: `'Gloria Hallelujah', cursive`,
  os: `'Open Sans', sans-serif`,
  ps: `'Poor Story', system-ui`,
  sr:`'Sora', sans-serif`
}

export const Text = styled.span((props) => ({
  fontFamily: props.font && FontObject[props.font] ? FontObject[props.font] : FontObject.openSans,
  fontSize: props.size ? `clamp(${props.size[0]}rem, ${props.size[1]}, ${props.size[2]}rem)` : '16px',
  fontWeight: props.weight ? `${props.weight}` : 'normal',
  textAlign: props.align ? props.align : 'start',
  color: props.color ? props.color: props.theme.colors.black,
  userSelect: 'none',
  lineHeight: props.lineHeight ? props.lineHeight : '1',
}));
