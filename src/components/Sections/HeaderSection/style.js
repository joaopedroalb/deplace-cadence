import styled from "styled-components";

export const HeaderContainer = styled.section`
  margin-top: 98px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media (width < 920px) {
    width: 100%;
    align-items: center;
    padding: 0 24px;

    img {
      max-width: 44vw;
    }
  }

  .second-line {
    display: flex;
    align-items: center;
  }

  .col-text {
    position: relative;

    &::before {
      content: '2024';
      position: absolute;
      top: 65%;
      left: 10%;
      font-size: clamp(2rem, 0.6212rem + 4.521vi, 4.125rem);
      font-weight: 500;
    }
  }

  .btn-row {
    margin-top: 58px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  margin-top: 16px;

  .equal-image {
    position: absolute;
    top:50%;
    width: calc(16vw + 1rem);
    mix-blend-mode: multiply;
  }
`

export const ImageBox = styled.div`
  background-color: ${props=>props.theme.colors.beige};
  border: 4px solid ${props=>props.theme.colors.black};
  position: relative;
  img {
    width: 30.5vw;
    height: 44vw;
    max-width: 31.5vw;
  }

  .photo-number, .photo-desc {
    position: absolute;
  }

  .photo-number {
    bottom: -22px;
    left: -1px;
  }

  .photo-desc {
    bottom: -22px;
    right: 30%;
  }
`