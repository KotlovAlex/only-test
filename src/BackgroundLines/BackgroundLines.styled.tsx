import styled from "styled-components"

const Line = styled.div`
  position: absolute; 
  opacity: .15;

  @media (max-width: 640px) {
    display: none;
  }
  
`

export const Lines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const OuterBorders = styled(Line)`
  top: 0;
  left: 0;
  width: 100%;
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
  top: 44.4444vh;
  left: 0;
  width: 75vw;
  border-top: 1px solid ${({ theme }) => theme.colors.darkBlue};
`

export const Circle = styled(Line)`
  top: calc(44.4444vh - 13.8021vw);
  left: calc(50% - 13.8021vw);
  width: 27.6042vw;
  height: 27.6042vw;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%
`