import styled from 'styled-components'

export const Container = styled.div`
  width: 75vw;
  height: 100vh;
  margin: 0 8.3333vw 0 16.6666vw;
  box-sizing: border-box;
  z-index: -1;

  @media (max-width: 640px) {
    width: 100vw;
    margin: 0;
  }
`;

export const Heading = styled.h1`
  display: inline-block;
  font-size: 56px;
  font-weight: 700;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors.blackBlue};
  border-left: 5px solid;
  padding-left: 75px;
  margin-top: 15.5vh;
  border-image: linear-gradient(180deg, ${({ theme }) => theme.colors.lightBlue} -5%, ${({ theme }) => theme.colors.pink} 85%) 1 100%;
  box-sizing: border-box;

  @media (max-width: 640px) {
    margin-top: 60px;
    margin-left: 20px;
    padding-left: 0;
    font-family: PT Sans;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    border: none;
  }
`

const Line = styled.div`
  position: absolute; 
  opacity: .15;

  @media (max-width: 640px) {
    display: none;
  }
  
`

export const Lines = styled.div`
  position: relative;
`

export const OuterBorders = styled(Line)`
  top: 0;
  left: 0;
  width: 75vw;
  height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-right: 1px solid ${({ theme }) => theme.colors.darkBlue};
`

export const InnerVerticalLine = styled(Line)`
  top: 0;
  left: 50%;
  height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.colors.black};
`

export const InnerHorizontalLine = styled(Line)`
  top: calc(19.9074vh + 265px);
  left: 0;
  width: 75vw;
  border-top: 1px solid ${({ theme }) => theme.colors.darkBlue};
`

export const Circle = styled(Line)`
  top: 19.9074vh;
  left: calc(37.45vw - 265px);
  width: 530px;
  height: 530px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%
`

export const Dates = styled.div`
  position: relative;
  font-family: PT Sans;
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -0.02em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  margin-top: 8vh;
  z-index: 2;
  user-select: none;

  @media (max-width: 640px) {
    margin-top: 60px;
    font-family: PT Sans;
    font-size: 56px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -0.02em;
    text-align: left;
    gap: 35px;
  }
`

export const DateFirst = styled.span`
  color: ${({ theme }) => theme.colors.iris100};
`

export const DateLast = styled.span`
  color: ${({ theme}) => theme.colors.pink};
`
export const Themes = styled.div`
  position: relative;
  transform-origin: center;
  transition: all .5s;
  z-index: 100;

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
  translate: calc(37.3vw + ${props => props.$x}px) calc(-6.7vh + ${props => props.$y}px);
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
    translate: calc(37.2vw + ${props => props.$x}px - 28px) calc(-6.6vh + ${props => props.$y}px - 28px);
  }

  &.active {
    width: 56px;
    height: 56px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.blackBlue};
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.blackBlue};
    translate: calc(37.2vw + ${props => props.$x}px - 28px) calc(-6.6vh + ${props => props.$y}px - 28px);
  }
`

export const Title = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blackBlue};
  top: 21.9074vh;
  left: calc(38vw + 170px);
  opacity: 0;
  transition: opacity .2s;
  user-select: none;

  &.show {
    opacity: 1;
  }

  @media (max-width: 640px) {
    top: 240px;
    left: 30px;
  }
`

export const DatePaginator = styled.div`
  color: ${({ theme }) => theme.colors.blackBlue};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 4vw;
  margin-top: 140px;

  @media (max-width: 640px) {
    margin-top: 0;
    position: relative;
    top: 45vh;
  }
`

export const PageButtons = styled.div`
  display: flex;
  margin-top: 10px;

  @media (max-width: 640px) {
    margin-top: 0;
  }
`

export const ArrowLeft = styled.div`
  width: 10px;
  height: 10px;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.blackBlue};
  border-left: 2px solid ${({ theme }) => theme.colors.blackBlue};
  transform: rotate(-45deg);

  @media (max-width: 640px) {
    width: 6px;
    height: 6px;
  }
`

export const ArrowRight = styled.div`
  width: 10px;
  height: 10px;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.blackBlue};
  border-left: 2px solid ${({ theme }) => theme.colors.blackBlue};
  transform: rotate(135deg);

  @media (max-width: 640px) {
    width: 6px;
    height: 6px;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.blackBlue};
  background-color: transparent;
  margin-right: 20px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 640px) {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
`

export const DisabledButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.D0D5E0};
  opacity: .35;
  cursor: not-allowed;
`

export const RelativeContainer = styled.div`
  position: relative;
  opacity: 0;
  transition: all .2s;

  &.show {
    opacity: 1;
  }
`