import styled from "styled-components";


export const UlStyled = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;

  list-style: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 225px;
  overflow: hidden;

  li {
    background-color: white;
    color: #C882B4;
    font-weight: 500;
    width: 100%;

    display: flex;
    align-items: center;

    :hover {
      background-color: whitesmoke;
    }

    a, &.li-link {
      display: block;
      width: 100%;
      height: 100%; 
      padding: 10px 16px;
      box-sizing: border-box;
      text-decoration: none;
      color: #C882B4;
    }
  }
`