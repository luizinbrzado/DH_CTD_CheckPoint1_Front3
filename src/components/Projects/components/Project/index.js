import { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import './style.scss';
import ReactAnime from 'react-animejs';

const {
    Anime
} = ReactAnime;

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
                    <div className="project">
                        <div className="projects-img">
                            <img className="img-fluid" src={this.props.img} alt={this.props.alt} />
                        </div>
                        <div className="projects-text">
                            <div className="links mb-1 d-flex flex-row align-items-center justify-content-between">
                                <a className="link-project" href={this.props.page}>
                                    <h3>{this.props.title}</h3>
                                    <Anime
                                        initial={[
                                            {
                                                targets: '#seta-direita',
                                                translateX: 20,
                                                duration: 3000,
                                                direction: 'alternate',
                                                easing: 'easeInOutElastic(1, .5)',
                                                loop: true
                                            }
                                        ]}
                                    >
                                        <i id="seta-direita" className="fas fa-arrow-right"></i>
                                    </Anime>
                                </a>
                                <a className="link-github" href={this.props.github}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            <p className="mb-1">
                                {this.props.techs}
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </>
        )
    }
}