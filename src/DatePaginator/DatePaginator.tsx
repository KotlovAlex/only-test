import React, { Dispatch, SetStateAction } from 'react'
import { ArrowLeft, ArrowRight, Button, DisabledButton, PageButtons, Paginator } from './DatePaginator.styled';

type Props = {
  currPage: number,
  pages: number,
  changingCurrPoint: (arg0: number) => void;
}

const DatePaginator = ({currPage, pages, changingCurrPoint}: Props) => {
  return (
    <Paginator>
      <p>0{currPage}/0{pages}</p>
      <PageButtons>
        {currPage == 1 
          ? <DisabledButton><ArrowLeft></ArrowLeft></DisabledButton>
          : <Button onClick={() => changingCurrPoint(currPage - 1)}><ArrowLeft></ArrowLeft></Button>
        }
        {currPage == pages
          ? <DisabledButton><ArrowRight></ArrowRight></DisabledButton>
          : <Button onClick={() => changingCurrPoint(currPage + 1)}><ArrowRight></ArrowRight></Button>
        }
      </PageButtons>
    </Paginator>
  )
}

export default DatePaginator