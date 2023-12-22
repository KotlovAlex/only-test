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

export const Title = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blackBlue};
  top: 21.9074vh;
  left: calc(38vw + 170px);
  user-select: none;

  @media (max-width: 640px) {
    top: 250px;
    left: 20px;
  }
`

export const RelativeContainer = styled.div`
  position: relative;
  opacity: 0;
  transition: all .2s;

  &.show {
    opacity: 1;
  }
`