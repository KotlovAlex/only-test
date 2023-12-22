import React, { useEffect, useState } from 'react'
import { RelativeContainer, Lines, Button, DisabledButton, Title, DatePaginator, Circle, Container, DateFirst, DateLast, Dates, Heading, InnerHorizontalLine, InnerVerticalLine, OuterBorders, Point, Themes, PageButtons, ArrowRight, ArrowLeft } from './HistoryBlock.styled'
import Slider from '../Slider/Slider';
import { getPointsOnCircle, shiftNum } from '../utils/math';
import { IData } from '../types/types';

type Props = {
  data: IData,
}

const HistoryBlock = ({data} :Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currPoint, setCurrPoint] = useState<number>(1);
  const {length, themes, slides} = {...data}
  const points = getPointsOnCircle(265, length);
  const changingCurrPoint = (nextPoint: number) => {
    setIsVisible(false);
    setCurrPoint(nextPoint);
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  },[isVisible])
  return <Container>
          <Lines>
            <OuterBorders></OuterBorders>
            <InnerVerticalLine></InnerVerticalLine>
            <InnerHorizontalLine></InnerHorizontalLine>
            <Circle></Circle>
            <Title className={isVisible ? 'show' : ''}>{themes[currPoint - 1][1]}</Title>
          </Lines>
          <Heading>Исторические <br /> даты</Heading>
          <Dates>
            <DateFirst>{slides[currPoint][0][0]}</DateFirst>
            <DateLast>{slides[currPoint][slides[currPoint].length - 1][0]}</DateLast>
          </Dates>
          <Themes>
            {themes.map((el, index) => {
                return <Point 
                  key={el[0]} 
                  onClick={() => changingCurrPoint(el[0])} 
                  className={el[0] === currPoint ? 'active' : ''} 
                  $x={points[shiftNum(el[0], currPoint, length)][0]}
                  $y={points[shiftNum(el[0], currPoint, length)][1]}
                >
                  {themes[el[0] - 1][0]}
                </Point>
              }
            )}
          </Themes>
          <DatePaginator>
            <p>0{currPoint}/0{length}</p>
            <PageButtons>
              {currPoint == 1 
                ? <DisabledButton><ArrowLeft></ArrowLeft></DisabledButton>
                : <Button onClick={() => changingCurrPoint(currPoint - 1)}><ArrowLeft></ArrowLeft></Button>
              }
              {currPoint == length
                ? <DisabledButton><ArrowRight></ArrowRight></DisabledButton>
                : <Button onClick={() => changingCurrPoint(currPoint + 1)}><ArrowRight></ArrowRight></Button>
              }
            </PageButtons>
          </DatePaginator>
          <RelativeContainer className={isVisible ? 'show' : ''}>
            <Slider data={slides[currPoint]}></Slider>
          </RelativeContainer>
        </Container>
}

export default HistoryBlock