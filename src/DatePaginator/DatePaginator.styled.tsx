import styled from "styled-components"

export const Paginator = styled.div`
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