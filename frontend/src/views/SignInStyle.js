import styled from "styled-components";


export const MainStyled = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .panel, .imgContainer {
    height: 100%;
    width: 100%;
    @media (min-width:720px) {
      width: 50%;
    }
  }
  .imgContainer {
    overflow: hidden;
    display: none;
    justify-content: center;
    
    img {
      height: 100%;
  
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }
    @media (min-width:720px) {
      display:flex;
    }
  }
  .panel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FBE9F6;
    img {
      width: 180px;
    }
  }
`