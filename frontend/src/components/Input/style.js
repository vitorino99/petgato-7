import styled from "styled-components";

export const InputStyled = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 5px;
    color: #C882B4;
    font-size: 16pt;
  }
  
  input {
    margin-bottom: 10px;
    border: 1px solid #C882B4;
    padding: 10px 20px;

    width: 100%;
    height: 50px;
    box-sizing: border-box;
    
    :focus {
      outline: 1px solid #BA66A3;

    }
  }

`