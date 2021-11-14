import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import './style.scss';

export default function Techs({ index, src, alt }) {
    return (
        <>
            <ScrollAnimation delay={index*100} animateIn="animate__fadeInUp" animateOnce>
                {
                    alt.valueOf() ? <li className="techs d-flex justify-content-center align-center p-3"><img src={`./img/${src}`} alt={alt} /></li> :
                        <li className="techs d-flex justify-content-center align-center p-3"><i className={`fab fa-${src}`}></i></li>
                }
            </ScrollAnimation>
        </>
    )
}