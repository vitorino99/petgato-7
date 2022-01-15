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
      width: 100%;
      height: 100%;

      object-fit: cover;
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

    padding-left: 5%;
    padding-right: 5%;

    background-color: #FBE9F6;

    img {
      width: 180px;
    }

    .lastAskLink {
      margin-top: 15px;
    }

  }
  form {
    white-space : nowrap
  }

  h4 {
  color: #707070;
  font-weight: 500;
  
  }
`
