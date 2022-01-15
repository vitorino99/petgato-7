import styled from 'styled-components';

export const ContactUsStyled = styled.div`

    display: inline-flex;
    margin: 20px 0px;
    width: 100%;

    img {
        padding: 65px 50px;
        width: 380px;
        height: 480px;
        object-fit: cover;
    }

    div {
        display: flex:
        flex-direction: column;
        margin: 30px 0;
        width: 100%;

        h1 {
            color: #444143;
            font-weight: 300;
            font-size: 20pt;
            align-self: start;
            letter-spacing: 1px;
            opacity: 0.8;
        }

        h2 {
            color: #C882B4;
            align-self: start;
            font-size: 32pt;
            font-weight: 700;
        }

        form {
            margin: 0;
            width: 92%;

            div#contactContext {
                display: inline-flex;
                margin: 0px;
                width: 100%;
                    
                div {
                    margin: 30px 0px 15px 0;

                    label {
                        font-size: 18pt;
                        font-weight: 500;
                    }

                    input {
                        height: 60px;
                        font-size: 16pt;
                    }

                }
                
                div + div {
                    margin-left: 25px;
                }
                
            }

            div {
                margin: 0 0 0 0;

                label {
                    font-size: 18pt;
                    font-weight: 500;
                }

            }
            
            button {
                align-self: flex-end;
            }
        }
    }
`