import styled from "styled-components"

export const AboutContainer = styled.section`
  margin-top: 72px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media (width < 920px) {
    width: 100%;
    align-items: center;
    padding: 0 24px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  max-width: 750px;

  .title {
    margin-bottom: 8px;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 1px;
      border-radius: 4px;
      position: absolute;
      bottom: -2%;
      background-color: ${props=>props.theme.colors.black};
    }
  }

  b {
    font-weight: 400;
    position: relative;
    &::before {
      content: '';
      width: calc(100% + 4px);
      height: 3px;
      border-radius: 4px;
      position: absolute;
      bottom: 2px;
      left: -2px;
      background-color: ${props=>props.theme.colors.black};
    }
  }
`