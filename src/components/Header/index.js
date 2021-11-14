/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import './style.scss';


function Header() {

    let scrollPos = 0;
    // let show = true;

    const [show, setShow] = useState(true);

    const controlNavbar = () => {
        if ((document.body.getBoundingClientRect()).top > scrollPos)
            setShow(true);
        else
            setShow(false);
        // saves the new position for iteration.
        scrollPos = (document.body.getBoundingClientRect()).top;
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <>
            {
                window.addEventListener('scroll', function () {
                    // detects new state and compares it with the new one

                })
            }
            <header className={`${show ? 'sticky-top' : ''}`}>
                <nav id="navbar" className="navbar justify-content-evenly navbar-primary bg-dark p-3">
                    <a className="navbar-brand" href="#">LuizIn<span>B</span><span>R</span>zado</a>
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">Sobre mim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">Contate-me</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#about-me">Sobre mim</a></li>
                                <li><a className="dropdown-item" href="#projects">Projetos</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#scrollspyHeading5">Contate-me</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;