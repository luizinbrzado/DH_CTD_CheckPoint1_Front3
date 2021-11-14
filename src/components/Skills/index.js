import ScrollAnimation from 'react-animate-on-scroll';
import Techs from './components/Techs';
import "animate.css";
import { Component } from "react";
import './style.scss';

export default class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch('./techs.json', {
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
                <div className="d-flex flex-column align-items-center" id="skills">
                    <ScrollAnimation className="d-flex align-items-center mb-4" duration={1} animateIn="animate__fadeInUp" animateOnce>
                        <h1>Skills</h1>
                    </ScrollAnimation>

                    <div className="d-flex flex-wrap justify-content-center gap-3" id="content-skills">
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <Techs key={index} index={index} src={item.src} alt={item.alt} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}