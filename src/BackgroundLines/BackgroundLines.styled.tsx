import styled from "styled-components"

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