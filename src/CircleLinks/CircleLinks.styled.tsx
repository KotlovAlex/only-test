import styled from "styled-components"

export const Themes = styled.div`
  position: absolute;
  transform-origin: center;
  transition: all .5s;
  top: 44.28vh;

  > div {
  }

  @media (max-width: 640px) {
    display: none;
  }
` 

export const Point = styled.div<{ $x?:number, $y?: number}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.blackBlue};
  border-radius: 50%;
  translate: calc(37.35vw + ${props => props.$x}px) ${props => props.$y}px;
  z-index: 1000;
  transition: all .5s;
  font-size: 0;
  cursor: pointer;
  user-select: none;

  &:hover{
    width: 56px;
    height: 56px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.blackBlue};
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.blackBlue};
    translate: calc(37.35vw + ${props => props.$x}px - 28px) calc(${props => props.$y}px - 28px);
  }

  &.active {
    width: 56px;
    height: 56px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.blackBlue};
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.blackBlue};
    translate: calc(37.35vw + ${props => props.$x}px - 28px) calc(${props => props.$y}px - 28px);
  }
`