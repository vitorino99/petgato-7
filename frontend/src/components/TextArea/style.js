import styled from "styled-components";

export const TextAreaStyled = styled.div`
    display: flex;
    flex-direction: column;

    label {
        display: block;
        margin-bottom: 5px;
        color: #C882B4;
    }
    
    textarea {
        resize: none;
        overflow: auto;
        border: 1px solid #C882B4;
        box-sizing: border-box;
        padding: 15px;
        height: 200px;
        font-size: 16pt;
        color: #444143;

        ::placeholder {
            color: #444143;
            opacity: 0.4;
        }

        :focus {
            outline: 1px solid #BA66A3;
        }
    
    }

`