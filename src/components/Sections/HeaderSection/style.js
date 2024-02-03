import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  .btn-row {
    margin-top: 58px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 10vw;
  }

`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8vw;
  padding-left: 23.5vw;
  padding-right: 10vw;
  align-items: flex-end;

  .text-line {
    display: flex;
    align-items: center;
    background-color: ${props=>props.theme.colors.white};
    overflow: hidden;

    .animation-text {
      position: relative;
      overflow: hidden;
      padding-right: 0.8vw;
    }

    .text1 {
      animation: upLetter 1.4s ease-in;
    }

    .text2 {
      animation: upLetter 1.8s ease-in;
    }
    
  }
  .col-text {
    position: relative;
    animation: fade 2s linear;

    &::before {
      content: '2024';
      position: absolute;
      top: 65%;
      left: 10%;
      font-size: clamp(2rem, 0.5212rem + 2.821vi, 3.6rem);
      font-weight: 500;
    }
  }


  @keyframes upLetter {
    0% {
      transform: translate(0px, 100%);
    } 
    65% {
      transform: translate(0px, 100%);
      filter: blur(1.5px);
    } 
    100% {
      transform: translate(0px, 0%);
      filter: blur(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    } 
    80% {
      opacity: 0;
      filter: blur(2px);
    } 
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  padding-top: 3vw;
  padding-left: 23.5vw;
  padding-right: 10vw;

  .equal-image {
    position: absolute;
    top:50%;
    width: calc(16vw + 1rem);
    mix-blend-mode: multiply;

    animation: fadeEqual 1.6s ease-in;
  }

  @keyframes fadeEqual {
    from {opacity: 0; transform: translate(0px, -20%);}
    to {opacity: 1; transform: translate(0px, 0%);}
  }
`

export const ImageBox = styled.div`
  background-color: ${props=>props.theme.colors.beige};
  border: 4px solid ${props=>props.theme.colors.black};
  position: relative;

  &.left {
    animation: up 800ms ease;
  }

  &.right {
    animation: up 1.6s ease;
  }

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
  

  @keyframes up {
    from {
      transform: translate(0px, 100%);
      opacity: 0;
    }
    to {
      transform: translate(0px, 0%);
      opacity: 1;
    }
  }
`