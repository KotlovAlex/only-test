import React, { useEffect, useState } from 'react'
import { RelativeContainer, Title, Container, DateFirst, DateLast, Dates, Heading} from './HistoryBlock.styled'
import Slider from '../Slider/Slider';
import { getPointsOnCircle } from '../utils/math';
import { IData } from '../types/types';
import BackgroundLines from '../BackgroundLines/BackgroundLines';
import DatePaginator from '../DatePaginator/DatePaginator';
import CircleLinks from '../CircleLinks/CircleLinks';

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
          <BackgroundLines></BackgroundLines>
          <RelativeContainer className={isVisible ? 'show' : ''}>
            <Title >{themes[currPoint - 1][1]}</Title>
          </RelativeContainer>
          <Heading>Исторические <br /> даты</Heading>
          <Dates>
            <DateFirst>{slides[currPoint][0][0]}</DateFirst>
            <DateLast>{slides[currPoint][slides[currPoint].length - 1][0]}</DateLast>
          </Dates>
          <CircleLinks
            themes={themes}
            points={points}
            length={length}
            currPoint={currPoint}
            changingCurrPoint={changingCurrPoint}
          ></CircleLinks>
          <DatePaginator 
          currPage={currPoint} 
          pages={length} 
          changingCurrPoint={changingCurrPoint}
          ></DatePaginator>
          <RelativeContainer className={isVisible ? 'show' : ''}>
            <Slider data={slides[currPoint]}></Slider>
          </RelativeContainer>
        </Container>
}

export default HistoryBlock