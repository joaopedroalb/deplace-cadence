import styled from "styled-components";

export const HeaderContainer = styled.section`
  margin-top: 98px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  .second-line {
    display: flex;
    align-items: center;
  }

  .col-text {
    position: relative;

    &::before {
      content: '2024';
      position: absolute;
      top: 38px;
      left: 24px;
      font-size: 48px;
      font-weight: 500;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  gap: 16px;
  position: relative;

  .equal-image {
    position: absolute;
    top:50%;
    width: 123px;
    left: 39%;
    mix-blend-mode: multiply;
  }
`

export const ImageBox = styled.div`
  background-color: #d8c7b5;
  border: 3px solid ${props=>props.theme.colors.black};
  position: relative;
  img {
    height: 386px;
    width: 280px;
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