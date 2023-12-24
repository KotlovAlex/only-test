import styled from 'styled-components'
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  height: auto;
  width: 100%;
  z-index: 1;
  opacity: 0;
  transition: all .2s;

  &.show {
    opacity: 1;
  }
`

export const SwiperStyled = styled(Swiper)`
  width: calc(100% - 150px);
  height: auto;
  position: relative;
  margin-top: 50px;

  & .swiper-pagination {
    display: none;
  }

  & .swiper-wrapper {
    cursor: grab;

    & .swiper-slide {
      opacity: 0.45;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      &.swiper-slide-fully-visible {
        opacity: 1;
      }

      &.swiper-slide-active {
        opacity: 1;
      }

      & .year {
        color: #3877EE;
        font-family: Bebas Neue;
        font-size: 25px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
      }

      & .text {
        margin-top: 10px;
        color: #42567A;
        font-size: 20px;
        max-height: 120px;
        overflow: hidden;
      }
    }
  }

  @media (max-width: 640px) {
    width: calc(100% - 20px);
    margin-top: 0;
    margin-left: 20px;
    margin-right: 0;

    && .swiper-slide {
      & .year {
        font-family: Bebas Neue;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
      }
      & .text {
        font-family: PT Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10vh;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 640px) {
    display: none;
  }
`

export const PrevButton = styled(Button)`
  left: 1vw;
`

export const NextButton = styled(Button)`
  right: 1vw;
`

export const ArrowLeft = styled.div`
  width: 7px;
  height: 7px;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.lightBlue};
  border-left: 2px solid ${({ theme }) => theme.colors.lightBlue};
  transform: rotate(-45deg);
`

export const ArrowRight = styled.div`
  width: 7px;
  height: 7px;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.lightBlue};
  border-left: 2px solid ${({ theme }) => theme.colors.lightBlue};
  transform: rotate(135deg);
`

export const Paginator = styled.div`
  position: absolute;
  bottom: -22px;
  left: calc(50% - 32px);
  display: flex;
  justify-content: center;
  gap:7px;

  @media (min-width: 641px) {
    display: none;
  }
`

export const Bullet = styled.div`
  width: 8px; 
  height: 8px; 
  background: ${({theme}) => theme.colors.borders}; 
  border-radius: 50%;

  &.active {
    background: ${({theme}) => theme.colors.blackBlue}; 
  }
`

export const HorizontalLine = styled.div`
  position: absolute;
  bottom: 185px;
  width: calc(100vw - 40px);
  height: 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.borders};
`