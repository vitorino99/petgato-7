import styled from "styled-components";

export const StyledLikeLabel = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 25px;
    opacity: 0.7;

    button#likeButton {
        background: none;
        outline: none;
        border: none;
    
        img#likeImg {
            width: 25px;
            height: 25px;
        }
    }

    p#likeNo {    
        color: #707070;
        margin: 0 5px;
        align-self: center;
        font-size: 15pt;  
        margin: 0px 10px;
    }

    p#likeTxt {
        margin: 0px 10px;
    }
`

