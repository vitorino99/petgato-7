import styled from "styled-components";

export const CommentStyled = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  margin: 15px 0;
  gap: 20px;
  width: 100%;

  .userImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;

    object-fit: cover;
    object-position: center;
  }

  .texts {
    width: 100%;
    .name {
      display: flex;
      justify-content: space-between;

      h3 {
        font-weight: 600;
        font-size: 18px;
      }

      img {
        width: 18px;
      }
    }

    .timestamp {
      font-style: italic;
      color: #707070;
      font-weight: 300;
      margin: 5px 0;
    }

    .description {
      font-size: 18px;
    }
  }
`

export const CloseButton = styled.button` 
  position: relative;
  float: right;
  z-index: 2;
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  left: 97%;
  top: -114px;
`