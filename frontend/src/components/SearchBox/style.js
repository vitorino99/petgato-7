import styled from "styled-components";

export const StyledSearchBox = styled.form`
    width: 100%;
    position: relative;
    display: flex;
    margin-top: 10px;

    input {
        width: 100%;
        padding: 20px 65px 20px 25px;
        border-radius: 5px;
        border-color: #C882B4;
        outline: none;
        font-size: 14pt;
        color: #707070;
        border-style: solid;
        font-family: 'Montserrat',sans-serif;
        box-sizing: border-box;
    }

    button {
        background: transparent;
        border: none;
        outline: none;
        margin-left: -45px;
        align-self: center;

        img {
            width: 30px;
            height: 30px;    
        }
    }
`