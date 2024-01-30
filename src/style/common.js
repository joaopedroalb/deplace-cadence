import styled from "styled-components"


const FontObject = {
  gh: `'Gloria Hallelujah', cursive`,
  os: `'Open Sans', sans-serif`,
  ps: `'Poor Story', system-ui`,
  sr:`'Sora', sans-serif`
}

export const Text = styled.span((props) => ({
  fontFamily: props.font && FontObject[props.font] ? FontObject[props.font] : FontObject.openSans,
  fontSize: props.size ? `${props.size}px` : '16px',
  fontWeight: props.weight ? `${props.weight}` : 'normal',
  textAlign: props.align ? props.align : 'start',
  color: props.color ? props.color: props.theme.colors.black
}));
