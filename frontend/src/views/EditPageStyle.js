import styled from 'styled-components';

export const Topo = styled.div` 
background-color: #BA66A3;
height: 100px;
display: block;
width:100%;
font-size: 20px;
box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.2);
`

export const Ul = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: 10px;
  margin-left: -90px;
  .aux {
    margin-top: 40px;
    font-family: 'Montserrat', sans-serif;
    color: #BA66A3;
    font-weight: 1000;
    width: 220px;
    margin-left: -40px;
  }
`

export const Logo = styled.img`
margin-top: 0px;
margin-left: 50px;
`

export const Upload = styled.button`
display: flex;
margin: 0px;
padding: 0px;
list-style: none;
justify-content: flex-end;
margin-top: -40px;
margin-left: 310px;
border: none;
background-color: white;
margin-left: 50px;
`

export const Fieldset = styled.fieldset`
border: 0;
width: 400px;
display: grid;
grid-template-columns: 300px 300px;
grid-gap: 20px;
`

export const Body = styled.div`
  .separator {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 80px;
    margin: auto;
    width: min-content;
  }
`

export const Label = styled.label`
margin-bottom: 0.5em;
display:block;
margin-top: 10px;
margin-left: 50px;
color: #BA66A3;
`
export const Input = styled.input`
padding: 1em;
border: 0.1px solid #BA66A3;
display: block;
width: 250px;
margin-left: 50px;
`

export const Title = styled.div`
  h1 {
    font-weight: 1000;
    color: #BA66A3;
  }
  h2 {
    font-weight: 300;
    color: #707070;
    margin-bottom: 10px;
  }
`

export const Header = styled.header`
  left: 0;
  bottom: 0;
  width: 100%;
  display:flex;
  margin:0px;
  padding:0px;
  list-style:none;
  justify-content:flex-end;
  margin-top:10px;
  margin-left:-90px;
  margin-top:-100px;
  .link-menu {
    text-decoration: none;
    color: #FBE9F6;
  }
`

export const Header1 = styled.div`
  margin-left: 100px;
  margin-top: 35px;
  margin-right: 5px;
  transition: transform ease-in-out 200ms;
  :hover {
    transform: scale(1.1);
  }
`

export const Button1 = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: #ba66a3;
  border-radius:5px;
  width:150px;
  height:50px;
  background-color:white;
  color:#444143;
  font-size:20px;

  transition: transform ease-in-out 300ms;
  :hover {
    transform: scale(1.09);
  }

  
`

export const Perfil = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -100px;
  margin-right: 30px;
  .icon{
    margin-top: -15px;
    
  }
  input {
    display:none;
    
  }
  label {
    font-weight: 1000;
    color: #BA66A3;
    margin-left: 10px;
    margin-top: 20px;
    
  }
  span {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    display: inline-block;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .perfil-txt {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: transform ease-in-out 300ms;
    :hover {
    transform: scale(1.09);
  }
    .txt {
      margin-left: 20px;
      font-family: 'Montserrat', sans-serif;
      color: #BA66A3;
      font-weight: 1000;
      white-space: nowrap;
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  background-color: #C882B4;
  color: white;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
`

export const Img  = styled.div`
display: flex;
flex-direction:  row;
flex-wrap: wrap;
margin-left: 60px;
  .abaixo{
    margin-left: 20px;
    height: 200px;
    width: 200px;
    margin-top: 25px;
    margin-bottom: 100px;
    object-fit: cover;
    object-position: center;
  }
  .acima {
    margin-top: 80px;
    width: 420px;
    height: 200px;
    margin-left: 20px;
    object-fit: cover;
    object-position: center;
  }
  a {
    margin-left: 20px;
  }
  .icons {
    margin-left: 470px;
    margin-top: 30px;
  }
`


export const Tela = styled.div`
margin-left: 550px;
margin-top: -590px;
margin-right: 20px;
    h1 {
        font-weight: 1200;
        color: #BA66A3;
    }
    h2 {
        font-weight: 400;
        color: #707070;
    }
    p {
      color: #707070;
      font-weight: 520;
    }
`