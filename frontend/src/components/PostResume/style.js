import styled from "styled-components";

export const StyledPostResume = styled.div`
    display: flex;
    margin: 10px 0;
    padding: 10px 0;
    align-items: flex-end;

    a#postImg {
        width: 100%;
        height: 100%;
        margin: 0 20px;
        display: flex;
        align-items: center;

        img {
            width: 305px;
            height: 295px;
            object-fit: cover;
            object-position: 50% 20%;
            float: left;
        }
    }

    div#postInfo {
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        div#tagsBox {
            display: inline-flex;
            align-items: center;

            p#tagHeader {
                font-weight: 500;
                font-style: italic;
                font-size: 15pt;
                color: #707070;
                opacity: 0.8;
                margin: 0;
            }

            a.tag {
                color: #BA66A3;
                font-size: 15pt;
                background-color: #FBE9F6;
                text-decoration: none;
                margin-left: 10px;
                padding: 5px 10px;
            }
        }

        a#postTitle {
            color: #C882B4;
            font-size: 16pt;
            font-weight: 600;
            margin: 10px 0;
            text-decoration: none;
        }

        p#postDescription {
            color: #707070;
            opacity: 0.8;
            font-size: 14pt;
            margin: 5px 0 15px 0;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        div#postControl {
            display: inline-flex;
            align-items: center;

            button#readMore {
                border-radius: 5px;
                border-color: #C882B4;
                outline: none;
                background: none;
                color: #444143;
                width: fit-content;
                padding: 10px 30px;
                font-size: 14pt;
                align-self: center;
                margin-right: 25px;
                border-style: solid;
            }

            div#postComment {
                display: inline-flex;
                margin-right: 25px;
                opacity: 0.7;
            }

            div#postViews {
                display: inline-flex;
                opacity: 0.7;
            }

            button.postInteraction {
                background: none;
                outline: none;
                border: none;
            }

            img.postStatic {
                width: 25px;
                height: 25px;
            }
            
            p.postNumbers {
                color: #707070;
                margin: 0 5px;
                align-self: center;
                font-size: 15pt;   
            }
        }
    }
`