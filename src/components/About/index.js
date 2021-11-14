import Contacts from './components/Contacts';
import { Component } from "react";
import './style.scss';

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    class: "fab fa-linkedin",
                    title: "LinkedIn",
                    href: "https://www.linkedin.com/in/luizinbrzado/",
                    desc: "@luizinbrzado"
                },
                {
                    class: "fab fa-github",
                    title: "GitHub",
                    href: "https://github.com/luizinbrzado/",
                    desc: "@luizinbrzado"
                },
                {
                    class: "fab fa-instagram",
                    title: "Instagram",
                    href: "https://www.instagram.com/luizinbrzado/",
                    desc: "@luizinbrzado"
                }
            ]
        };
    }

    render() {

        return (
            <>
                <div id="about-me">
                    <div className="about-me">
                        <h1 className="mb-4">Sobre mim</h1>
                        <p>
                            <span>Apaixonado</span> por <span>games</span> e <span>tecnologia</span>, com uma oportunidade
                            aparecendo de repente, decidi aprender a programar através do curso CTD <span>(Certified Tech
                                Developer)</span> da <span>Digital House</span> em parceria com o <span>Mercado Livre</span> e <span>Globant</span>.
                            Desde então, aprendo tanto em aula quanto sozinho pesquisando como um <span>autodidata</span> que
                            estou me tornando.
                        </p>
                    </div>
                    <div id="contacts">
                        {
                            this.state.contacts.map((e, index) => {
                                return (
                                    <Contacts key={index} class={e.class} title={e.title} href={e.href} desc={e.desc} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}