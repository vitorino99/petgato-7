import styled from 'styled-components';

// fiquei sem paciência e adaptei de um site
// https://loading.io/css/

export const Container = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 auto auto auto;

  :after {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    margin: 3px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
`;

export const ContainerPink = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 auto auto auto;

  :after {
    content: " ";
    display: block;
    width: 24px;
    height: 24px;
    margin: 3px;
    border-radius: 50%;
    border: 3px solid #BA66A3;
    border-color: #BA66A3 transparent #BA66A3 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;
