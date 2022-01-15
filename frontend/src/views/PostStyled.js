import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  margin: 40px auto;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: unset;
  }
`


export const PostStyled = styled.div`
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;

  .postTitle {
    color: #C882B4;
    margin-top: 25px;
  }

  .postInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: #707070;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 10px;

    .views {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        align-self: center;
        height: 15px;
        margin-right: 5px;
      }
    }
  }

  .bannerImage {
    height: 280px;
    width: 100%;

    object-fit: cover;
    object-position: center;
  }

  .horizontalLine {
    width: 70%;
    margin: 15px auto;
    color: rgba(112,112,112,0.01);
    background-color: rgba(112,112,112,0.2);
    border-style: solid;
  }

  .likes {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 18px;
    margin: 30px 0;

    img {
      height: 20px;
      margin-right: 10px;
    }
  }
`

export const SidebarStyled = styled.div`
  width: 100%;
  max-width: 300px;
`

export const BackButtonStyled = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  background-color: transparent;

  font-size: 22px;

  :hover {
    cursor: pointer;
  }

  img {
    height: 25px;
    margin-right: 25px;
  }
`

export const VerticalLine = styled.hr`
  margin: 25px;

  color: rgba(112,112,112,0.01);
  background-color: rgba(112,112,112,0.2);
  border-style: solid;
  border-radius: 0.5px;
`

export const PostContent = styled.section`
  margin: 30px 0;

  h1, h2, h3, h4, h5, h6, p, b, i, l, ul, li {
    margin: 5px 0;
    word-break: break-all;
  }

  h1 {
    font-size: 28px;
  }

  * {
    all: revert;
  }
`
