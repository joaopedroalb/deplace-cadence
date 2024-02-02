import styled from "styled-components"

export const CircleBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 8px;
  cursor: pointer;
`

export const MessageBtn = styled.span`
  font-size: 18px;
  position: relative;
  width: fit-content;
  color: ${props=>props.theme.colors.black};

  &::before {
    content: '';
    width: 0;
    height: 2px;
    background-color: ${props=>props.theme.colors.black};
    position: absolute;
    bottom: -5%;
    border-radius: 5px;
    opacity: 0;
    display: flex;
    right: 0;

    transition: 400ms;
  }

  &:hover {
    &::before {
      left: 0;
      opacity: 1;
      width: 100%;
    }
  }
`

export const CircleContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 40px;
  transform: rotate(1deg) scale(1);
  transition: 400ms ease;
  
  &:hover {
    transform: rotate(359deg) scale(1.25);
  }

  #arrow-btn, #circle-btn {
    position: absolute;
  }

  #arrow-btn {
    height: 20px;
  }
  
`