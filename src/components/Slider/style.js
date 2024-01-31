import styled from "styled-components"

export const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  background: ${props=>props.theme.colors.yellow};
  border: 3px solid ${props=>props.theme.colors.black};
  border-left: none;
  border-right: none;
  margin-top: 68px;
  height: 4.5vw;
  
  display: flex;
  align-items: center;

	.slide {
		display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    flex: 1;
	}

  .firstLine, .secondLine {
    width: 100%;
    display: flex;
    padding: 8px 0;
    animation: 6s slide infinite linear;
    position: absolute;

    .textSlide {
      font-size: 2.5vw;
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

    &::before, &::after {
      content: '';
      background-color: ${props=>props.theme.colors.black};;
      min-width: 8px;
      min-height: 8px;
      border-radius: 8px;
      position: absolute;
    }
    &::before { left: -14px;}
    &::after { right: -14px;}
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
