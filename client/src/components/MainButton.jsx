import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  /* background-color: var(--primary-button);  */
  background-color: ${(props) => props.backgroundColor || "#009FB7"};
  color: var(--dark);
  border: none;
  border-radius: 5px;
  padding: ${(props) => props.mobilePadding || "5px 15px"};
  font-weight: 700;
  box-shadow: 0px 1px 3px 0.5px var(--dark);
  @media screen and (max-width: 425px) {
    font-size: ${(props) => props.mobileFontSize || "15px"};
  }
`

const MainButton = ({
  buttonText,
  onClick,
  backgroundColor,
  mobileFontSize,
  mobilePadding,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      mobileFontSize={mobileFontSize}
      mobilePadding={mobilePadding}
    >
      {buttonText}
    </StyledButton>
  )
}

export default MainButton
