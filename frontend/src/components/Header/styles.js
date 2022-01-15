import styled from "styled-components"


export const Topo = styled.div`
  background-color: #BA66A3;
  width: 100%;
  min-height: 100px;
  font-size: 20px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.25);

  display: grid;
  grid-template-columns: 100px auto;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  box-sizing: border-box;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px 10px;
  }
`


export const ButtonsContainer = styled.header`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;

  .link-menu.active {
    font-weight: 500;
    color: white;
  }

  .link-menu, .link-logout {
    text-decoration: none;
    color: #FBE9F6;
    cursor: pointer;
  }

  .link-logout {
    background-color: transparent;
    font-size: 20px;
    border: 0;
  }
`

export const ButtonItem = styled.div`
  align-self: center;

  transition: text-decoration ease-in-out 200ms;
  :hover {
    text-decoration: underline;
  }
`