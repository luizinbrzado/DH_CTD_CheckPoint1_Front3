import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import './style.scss';
import ReactAnime from 'react-animejs';

const {
    Anime
} = ReactAnime;

export default function Presentation() {

    return (
        <div id="presentation" >
            <div>
                <ScrollAnimation duration={2} animateIn="animate__fadeIn" animateOnce>
                    <div className="presentation-title">
                        <h1>Opa, eu sou o</h1>
                        <h1 className="meu-nome">Luiz Gustavo :)</h1>
                        <h3>Sou Desenvolvedor Web Full Stack Junior em <span>constante aprendizado</span></h3>
                    </div>
                    <div className="presentation-buttons">
                        <a href="./archives/Curriculo.pdf" download>
                            <i className="fas fa-download"></i>
                            Download CV
                        </a>
                        <a href="#about-me">
                            Entrar em contato
                        </a>
                    </div>
                </ScrollAnimation>
            </div >
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
                <div className="presentation-img">
                    <img src="./img/presentation.png" alt="imagem ilustrativa" />
                </div>
            </ScrollAnimation>
        </div >
    )

}