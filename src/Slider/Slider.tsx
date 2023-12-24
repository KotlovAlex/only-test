import React, { useState, useCallback, useEffect } from 'react'
import { Container, HorizontalLine, Bullet, Paginator, ArrowLeft, ArrowRight, PrevButton, NextButton, SwiperStyled } from './Slider.styled'
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  data: string[][],
  isVisible: boolean
}

const Slider = ({data, isVisible}: Props) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const paginationUpdateHandler = useCallback(() => {
    if (swiperRef?.activeIndex !== undefined) setActiveIndex(swiperRef?.activeIndex);
    if (swiperRef?.isBeginning) setIsBeginning(true);
    else if (swiperRef?.isEnd) { 
      setIsEnd(true);
      setIsBeginning(false);
    } else {
      setIsEnd(false);
      setIsBeginning(false);
    }
  }, [swiperRef]);

  const displayNone: React.CSSProperties = {
    display: 'none',
  }

  useEffect(() => {

  },[swiperRef, activeIndex])

  return (
    <Container className={isVisible ? 'show' : ''}>
      <PrevButton style={swiperRef?.isBeginning ? displayNone : undefined} onClick={handlePrevious}><ArrowLeft></ArrowLeft></PrevButton>
      <SwiperStyled
        slidesPerView={1.5}
        spaceBetween={20}
        onPaginationUpdate={paginationUpdateHandler}
        pagination
        onSwiper={setSwiperRef}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        watchSlidesProgress={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 80,
          }
        }}
      >
        {data.map(el => 
          <SwiperSlide key={el[0]}>
            <h3 className='year'>{el[0]}</h3>
            <p className='text'>{el[1]}</p>
          </SwiperSlide>
        )}
      </SwiperStyled>
      <NextButton style={swiperRef?.isEnd ? displayNone : undefined} onClick={handleNext}><ArrowRight></ArrowRight></NextButton>
      <Paginator>
        <HorizontalLine></HorizontalLine>
        {data.map((_, index) =><Bullet onClick={() => swiperRef?.slideTo(index)} className={activeIndex === index ? 'active' : ''}></Bullet>)}
      </Paginator>
    </Container>
  )
}

export default Slider