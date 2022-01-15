import styled from "styled-components";


export const ButtonStyled = styled.button`
  background-color: white;
  width: min-content;
  min-width: 150px;

  border: 1px solid #BA66A3;
  border-radius: 5px;
  
  color: black;
  font-weight: 400;
  white-space: nowrap;

  &.pink {
    background-color: #C882B4;
    color: white;
    border: 0;
  }
  
  transition: background-color linear 200ms;
  :hover {
    cursor: pointer;
    background-color: whitesmoke;

    &.pink {
      background-color: #BA66A3;
    }
  }
  
`