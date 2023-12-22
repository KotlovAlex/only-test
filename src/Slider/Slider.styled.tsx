import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`

`;

export const SwiperStyled = styled(Swiper)`
  width: calc(100% - 150px);
  height: auto;
  position: relative;
  margin-top: 50px;

  & .swiper-wrapper {
    cursor: grab;

    & .swiper-slide {
      font-size: 18px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

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

  @media (min-width: 640px) {
    .swiper-pagination {
      display: none;
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