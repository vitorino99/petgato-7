import styled from "styled-components";

export const StyledPostsDisplay = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 40px;

    span#hasSearch {
        display: inline-flex;
        margin: 15px 0px;
        
        h1#searchResultH {
            color: #707070;
            font-weight: 400;
            font-style: italic;
            font-size: 20pt;
        }

        p#searchText {
            align-self: center;
            margin-left: 15px;
            font-weight: 600;
            font-size: 22pt;
            letter-spacing: 1px;
            color: #707070;
            opacity: 0.9;
        }
    }

    span#noSearch{
    
        h1#homeH {
            margin: 10px 0 0 0;
            color: #C882B4;
            letter-spacing: 0.5px;
            font-size: 26pt;    
            font-weight: 500;    
        }

        p {
            margin: 10px 0;
            color: #707070;
            opacity: 0.8;
            font-size: 18pt;
        }
    }

    button#olderPosts {
        border-radius: 5px;
        border-color: #C882B4;
        outline: none;
        background: none;
        padding: 15px 40px;
        color: #444143;
        font-size: 16pt;
        width: fit-content;
        align-self: center;
        margin-top: 30px;
        border-style: solid;
    }
`