import React from 'react'
import { Point, Themes } from './CircleLinks.styled'
import { ThemesType } from '../types/types'
import { shiftNum } from '../utils/math'

type Props = {
  themes: ThemesType,
  points: number[][],
  length: number,
  currPoint: number,
  changingCurrPoint: (arg0: number) => void,
}

const CircleLinks = ({themes, points, length, currPoint, changingCurrPoint}: Props) => {
  return (
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
  )
}

export default CircleLinks