import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 50px;
  width: 60px;
  height: 60px;
  color: white;
  background: coral;
  border: none;
`

const ButtonToMount = (props) => {
  return (
    <StyledButton
      onClick={props.clickHandler}>
        MOUNT IT!
    </StyledButton>
  )
}

export default ButtonToMount;
