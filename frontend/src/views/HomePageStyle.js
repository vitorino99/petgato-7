import styled from "styled-components";

const HomeStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px 10px;
    font-family: 'Montserrat', sans-serif;

    div#lColumn {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 0px 45px;
        border-right: 1.5px solid rgba(112,112,112,0.2);

        form#searchBox{
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
                margin-left: -15px;
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
        }
        
        hr.horizontalLine {
            margin: 15px 0;
            width: 80%;
            align-self: center;
            color: rgba(112,112,112,0.01);
            background-color: rgba(112,112,112,0.2);
            border-style: solid;
        }

        a#allPostsLink {
            align-self: center;

            button#allPosts {
                border-radius: 5px;
                border-color: #C882B4;
                outline: none;
                background: none;
                color: #444143;
                width: fit-content;
                padding: 15px 40px;
                font-size: 14pt;
                margin: 20px 0;
                border-style: solid;
            }
        }
    }
`

export default HomeStyled;