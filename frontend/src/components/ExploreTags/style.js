import styled from "styled-components";

export const ExploreTagsStyled = styled.div`

    display: flex;
    flex-direction: column;

    h2 {
        color: #707070;
        font-weight: 400;
        font-size: 21pt;
        letter-spacing: 0.5px;
        margin: 10px 0 20px 0;   
    }

    .tagResume {

        display: flex;
        flex-direction: column; 

        .tagTitle {
            background-color: #FBE9F6;
            color: #C882B4;

            width: min-content;
            padding: 5px 10px;

            margin: 0 0 10px 0;
            font-size: 16pt;
            font-weight: 500;
            white-space: nowrap;
        }

        .tagDescription {
            color: #707070;
            opacity: 0.8;
            font-size: 12pt;
        }

        .horizontalLine {
            margin: 15px 0;
            width: 80%;
            align-self: center;
            color: rgba(112,112,112,0.01);
            background-color: rgba(112,112,112,0.2);
            border-style: solid;
        }
    }
`