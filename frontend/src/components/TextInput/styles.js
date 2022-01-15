import styled from 'styled-components';

export const InputStyled = styled.div`
    width: 100%;

    label {
        display: block;
        margin-bottom: 15px;

        color: #707070;
        font-weight: 500;
        font-size: 24px;
    }
    
    textarea {
        border: 1px solid #C882B4;
        margin-bottom: 10px;
        padding: 10px 30px 10px 20px;

        width: 100%;
        min-height: 100px;
        box-sizing: border-box;
        resize: vertical;

        font-size: 16px;
        
        :focus {
            outline: 1px solid #BA66A3;
        }
    }
`