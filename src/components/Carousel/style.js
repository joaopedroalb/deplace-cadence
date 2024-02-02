import styled from "styled-components"

export const CarouselContainer = styled.section`
  margin-top: 48px;
  
  .carousel {
    width: 100%;
    max-width: 100%;
    display: flex;
    min-height: 90px;
    gap: 18px;
    padding: 0 12px;
  }

`

export const ProductCard = styled.div`
  border: 2px solid #141414;
  background-color: #e7d6c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 28px 8px;
  height: 390px;
  min-width: 300px;
  gap: 8px;

  img {
    width: 210px;
    height: 150px;
    margin-bottom: 20px;
  }

  .gender {
    color: ${props=>props.theme.colors.beige};
    position: relative;
    background-color: transparent;
    z-index: 0;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;

    &::before {
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      top: -45%;
      left: ${props=>props.isMale ? '-42.5%' : '-21.5%'};
      z-index: -1;
      background-image: url(/gender-bg.png);
      background-repeat: no-repeat;
      background-size: 72px 28px;
      transform: rotate(2deg);
    }
  }

  .name {
    font-size: 34px;
    font-weight: bold;
  }

  .cost, .cost-promo {
    font-weight: 600;
    font-family: 'Open Sans';
    letter-spacing: -0.5px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(/coin1.png);
      background-repeat: no-repeat;
      background-size: 24px;
      right: -28px;
      top: 2px;
      transform: scale(-1, 1)
    }
  }

  .cost {
    font-size: ${props=>props.hasPromo ? '20px' : '28px'};
    font-weight: ${props=>props.hasPromo ? '500' : '600'};

    width: fit-content;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      width: calc(100% + 8px);
      height: 2px;
      background-color: #141414;
      border-radius: 8px;
      left: -4px;
      position: absolute;
      display: ${props=>props.hasPromo ? 'block' : 'none'};
    }

    &::before {
      background-size: ${props=>props.hasPromo ? '16px' : '24px'};
    }

  }

  .cost-promo {
    font-size: 28px;
  }
`