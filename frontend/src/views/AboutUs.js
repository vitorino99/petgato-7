import cintia from '../assets/images/cintia-lorenzzo.jpg'
import dog from '../assets/images/floquinho.jpg'
import facebook from '../assets/icons/awesome-facebook-square.svg'
import twitter from '../assets/icons/awesome-twitter-square.svg'
import instagram from '../assets/icons/awesome-instagram.svg'
import bird from '../assets/images/mandragora.jpg'
import { Body, Img, Tela } from './EditPageStyle';


const AboutUs = () => {

    return (
        <Body>
            <Img>
              <div className='minhadiv'>
                <img className='acima' src={cintia} alt='Autora do blog' width='350px'></img>
              </div>
            </Img>
          <Img>
              <img className='abaixo'src={bird} alt='Pássaro' ></img>
              <img className='abaixo'src={dog} alt='Cachorro' height='350px' width='200px'></img>
          </Img>
          <Tela>
            <h2>SOBRE NÓS</h2>
            <h1>O que é o Pet Gatô?</h1>
            <br></br>
            <p>O Pet Gatô surgiu em 2013, como um trabalho de faculdade. Estava cursando Medicina Veterinária e resolvi pegar uma disciplina de jornalismo, em que tive que escrever um blog fictício. Dei o nome de <b>Pet Gatô</b>, como um trocadilho infame que minha profesora adorou. Foi quando descobri minha paixão por escrever e resolvi unir o útil ao agradável e criar este blog.</p>
            <br></br>
            <p>Desde então, utilizei deste meio para informar país de pets do Brasil inteiro, entendo os cuidados da minha profissão através da Internet. Além disso, compartilho historias engraçadas, descobertas do meu cotidiano e fotos dos meus dois amores, o Floquinho, meu cão samoieda e a Mandrágora, minha cacatua.</p>
            <br></br>
            <p>Meu nome é Cintia Lorenzzo e sou veterinária há 5 anos, apaixonada pelo mundo animal, principalmente os que estão sempre presentes no nosso dia a dia. Além de escrever, gosto de correr no Parque do Ibirapuera com o Floquinho e cantar com a Mands, uma berradora nata. </p>
            <br></br>
            <p>Quer conhecer mais sobre mim? Me siga nas minhas redes sociais:</p>
          </Tela>
          
          <Img>
            <div className='icons'>
            <a href='https://facebook.com/home'><img alt='facebook' src={facebook}></img></a>
            <a href='https://www.instagram.com/'><img alt='instagram' src={instagram}></img></a>
            <a href='https://www.twitter.com/'><img alt='twitter' src={twitter}></img></a>
            </div>
          </Img>
          <br></br>
        </Body>
      )
}

export default AboutUs