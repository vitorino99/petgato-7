import styled from "styled-components";

export const StyledPopularPosts = styled.div`

    display: flex;
    flex-direction: column;

    h2 {
        color: #707070;
        font-weight: 400;
        font-size: 25pt;
        letter-spacing: 0.5px;
        margin: 10px 0 20px 0;   
    }

    div#postResume {

        display: flex;
        flex-direction: column; 

        a#postTitle {
            color: #C882B4;
            margin: 0 0 10px 0;
            font-size: 16pt;
            font-weight: 700;
            text-decoration: none;
        }

        p#postDescription {
            color: #707070;
            opacity: 0.8;
            font-size: 12pt;
            font-weight: 500;
            margin: 0 0 10px 0;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        p#postDate {
            color: #707070;
            opacity: 0.5;
            margin: 0 0 10px 0;
            font-style: italic;
        }

        hr#horizontalLine {
            margin: 15px 0;
            width: 80%;
            align-self: center;
            color: rgba(112,112,112,0.01);
            background-color: rgba(112,112,112,0.2);
            border-style: solid;
        }
    }
`