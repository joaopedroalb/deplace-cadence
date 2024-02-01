import styled from "styled-components"

export const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  background: ${props=>props.theme.colors.yellow};
  border: 3px solid ${props=>props.theme.colors.black};
  border-left: none;
  border-right: none;
  margin-top: 68px;
  height: calc(2.75vw + 1.4rem);
  
  display: flex;
  align-items: center;

	.slide {
		display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
	}

  .firstLine, .secondLine {
    width: 100%;
    display: flex;
    padding: 8px 0;
    animation: ${props=> props.isMobile ? '3s slide infinite linear' : '5s slide infinite linear'};
    position: absolute;

    .textSlide {
      font-size: calc(1.95vw + .6rem);
      white-space: nowrap;
    }
  }

  .firstLine {
    left: 0;
  }

  .secondLine {
    left: -100%;
  }

  .dot {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 28px 0 16px;

    &::before, &::after {
      content: '';
      background-color: ${props=>props.theme.colors.black};
      min-width: ${props=>props.isMobile ? '4px' : '8px'};
      min-height: ${props=>props.isMobile ? '4px' : '8px'};
      border-radius: 8px;
      position: absolute;
    }
    &::before { left: -6%;}
    &::after { right: -6%;}
  }
  

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`
