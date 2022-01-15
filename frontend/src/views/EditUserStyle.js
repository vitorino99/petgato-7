import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 40px auto;

  .inputContainer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px 40px;
    grid-auto-flow: row wrap;
    margin: 40px 0;

    @media (min-width: 620px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .final-btns {
    display: flex;
    flex-flow: row wrap-reverse;
    gap: 30px;

    @media (max-width: 430px) {
      justify-content: center;
    }
  }
`
