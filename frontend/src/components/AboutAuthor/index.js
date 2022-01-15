import { StyledAboutAuthor } from "./style";
import { Link } from 'react-router-dom';

import authorPhoto from '../../assets/images/cintia-lorenzzo.jpg';
import facebookIcon from '../../assets/icons/awesome-facebook-square.svg';
import instagramIcon from '../../assets/icons/awesome-instagram.svg';
import twitterIcon from '../../assets/icons/awesome-twitter-square.svg';

const AboutAuthor = ( props ) => {

    return (
        <StyledAboutAuthor id="aboutAuthor">
            <img id="authorPhoto" src={authorPhoto} alt="Cíntia Lorenzzo" />
            <h2>SOBRE A AUTORA</h2>
            {/* ver como utilizar o componente AskLink */}
            <Link id="toAboutUs" to='/about-us'>                 
                <p id="authorName">Cíntia Lorenzzo</p>
            </Link>
            <p id="authorDescription">Sou veterinária há 5 anos, apaixonada pelo mundo animal, principalmente os que estão sempre conosco no dia a dia.<br />Quando não estou no meu consultório ou com meus pets, estou aqui escrevendo conteúdo para vocês. Espero que você goste! </p>
            <div id="authorContact">
                <a href="http://www.facebook.com" target="_blank" rel='noreferrer'>
                    <img className="socialMediaIcon" src={facebookIcon} alt="Facebook Profile"/>
                </a>
                <a href="http://www.instagram.com" target="_blank" rel='noreferrer'>
                    <img className="socialMediaIcon" src={instagramIcon} alt="Instagram Profile"/>
                </a>
                <a href="http://www.twitter.com" target="_blank" rel='noreferrer'>
                    <img className="socialMediaIcon" src={twitterIcon} alt="Twitter Profile"/>
                </a>
            </div>
        </StyledAboutAuthor>
    )
}

export default AboutAuthor;