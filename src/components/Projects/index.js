import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import { Component } from "react";
import Project from "./components/Project";
import './style.scss';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch('./projects.json', {
            headers: {
                Accept: 'application/json'
            }
        }).then(res => res.json()).then(res => {
            this.setState({ data: res.data });
        })
    }

    render() {
        return (
            <>
                <div id="projects">
                    <ScrollAnimation className="mb-4" duration={1} animateIn="animate__fadeInUp">
                        <h1>Projetos</h1>
                    </ScrollAnimation>
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <Project key={index} index={index} img={item.img.src} alt={item.img.alt} title={item.title} page={item.link.page} github={item.link.github} techs={item.technologies} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}