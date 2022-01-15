import styled from "styled-components";

export const InputFileStyled = styled.div`

  input {
    display: none;
  }

  .label-file {
    display: block;
    margin: 15px 0;
    color: #C882B4;
  }

  label:not(.label-file) {
    display: inline-block;
    border: 1px solid #ccc;
    padding: 10px 20px;
    margin-right: 20px;
    cursor: pointer;
    transition: background-color linear 300ms;

    :hover {
      background-color: #eee;
    }
  }

  span {
    white-space: nowrap;
  }
`