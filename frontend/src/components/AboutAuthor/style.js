import styled from "styled-components";

export const StyledAboutAuthor = styled.div`
    margin-top: 90px;
    margin-bottom: 20px;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #FBE9F6;

    img#authorPhoto {
        display: block;
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 100px;
        object-position: 20% 50%;
        margin-top: -60px;
    }

    h2 {
        font-size: 12pt;
        font-weight: 500;
        color: #707070;
        margin: 15px 0 0 0;
        letter-spacing: 0.5px;
    }

    a#toAboutUs {
        text-decoration: none;
    
        #authorName {
            font-size: 22pt;
            font-weight: 500;
            color: #C882B4;
            margin: 0;
            letter-spacing: 0.5px;
        }
    }

    #authorDescription {
        font-size: 14pt;
        font-weight: 300;
        color: #707070;
        opacity: 0.6;
        margin: 10px 15px 15px 15px;
    }

    div#authorContact {
        display: flex;
        flex-direction: row;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FFFFFF;
            outline: none;
            border: none;
            border-radius: 10px;
            width: 40px;
            height: 40px;
            margin: 0 10px;
            padding: 0;

            img.socialMediaIcon {
                background-color: #FFFFFF;
                width: 25px;
                height: 25px;
            }
        }
    }
`