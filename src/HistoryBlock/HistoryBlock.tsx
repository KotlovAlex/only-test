import React, { useEffect, useState } from 'react'
import { Title, Container, DateFirst, DateLast, Dates, Heading} from './HistoryBlock.styled'
import Slider from '../Slider/Slider';
import { getPointsOnCircle } from '../utils/math';
import { IData } from '../types/types';
import BackgroundLines from '../BackgroundLines/BackgroundLines';
import DatePaginator from '../DatePaginator/DatePaginator';
import CircleLinks from '../CircleLinks/CircleLinks';
import useWindowSize from '../Hooks/useWindowSize';

type Props = {
  data: IData,
}

const HistoryBlock = ({data} :Props) => {
  const [windowWidth, windowHeight] = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const [currPoint, setCurrPoint] = useState<number>(1);
  const {length, themes, slides} = {...data}
  const points = getPointsOnCircle(windowWidth * 0.138021, length);
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
          <Title className={isVisible ? 'show' : ''}>{themes[currPoint - 1][1]}</Title>
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
          <Slider isVisible={isVisible} data={slides[currPoint]}></Slider>
          <BackgroundLines></BackgroundLines>
        </Container>
}

export default HistoryBlock