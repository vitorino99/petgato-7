import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 50px auto;

  .title {
    margin-bottom: 20px;

    h2 {
      font-weight: 300;
      font-size: 22pt;
    }

    h1 {
      color: #C882B4;
      font-weight: 600;
      font-size: 32pt;
    }
  }

  .post-title-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 650px) {
      flex-direction: row;
    }

    .post-infos {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .post-infos p {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 15px;
      box-sizing: border-box;

      font-size: 18px;
      font-weight: 300;

      @media (min-width: 650px) {
        margin: 10px 30px 0px 10px;

        :first-of-type {
          margin-left: 50px;
        }
      }

      img {
        margin-right: 10px;
        width: 28px;
      }
    }
  }

  .tags-field {
    
    .main-label {
      display: block;
      margin: 15px 0;
      color: #C882B4;
    }

    .checkboxes {
      display: flex;
      flex-flow: row wrap;
      gap: 20px;
      max-width: 600px;

      .input-field {
        display: flex;
        flex-direction: row;

        label {
          margin-left: 10px;
          white-space: nowrap;
          align-self: center;
        }

        input {
          align-self: center;
        }
      }
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
