import React from 'react'
import { Circle, InnerHorizontalLine, InnerVerticalLine, Lines, OuterBorders } from './BackgroundLines.styled'

const BackgroundLines = () => {
  return (
    <Lines>
      <OuterBorders></OuterBorders>
      <InnerVerticalLine></InnerVerticalLine>
      <InnerHorizontalLine></InnerHorizontalLine>
      <Circle></Circle>
    </Lines>
  )
}

export default BackgroundLines