import styled from "styled-components";

export const SelectStyled = styled.div`
  width: 100%;
  position: relative;

  ::after {
    content: "";
    width: 16px;
    height: 10px;
    background-color: #BA66A3;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    
    position: absolute;
    bottom: 29px;
    right: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #C882B4;
  }
  
  select {
    margin-bottom: 10px;
    border: 1px solid #C882B4;
    padding: 10px 20px;

    width: 100%;
    height: 50px;
    box-sizing: border-box;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    :focus {
      outline: 1px solid #BA66A3;

    }
  }

`