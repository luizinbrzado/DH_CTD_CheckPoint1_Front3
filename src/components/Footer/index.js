import './style.scss';

export default function Footer() {

    return (
        <>
            <footer className="d-flex justify-content-center align-center p-4">
                <a href="https://github.com/luizinbrzado">
                    <i className="fab fa-github-square fa-3x" aria-hidden="true" />
                </a>
                <div className="d-flex align-items-center">
                    <p>
                        <span>©</span> Copyright -  Feito com 💗 por <a className="link link--metis" href="https://beacons.ai/luizinbrzado">luizinbrzado</a>
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/luizinbrzado/">
                    <i className="fab fa-linkedin fa-3x" aria-hidden="true" />
                </a>
            </footer>
        </>
    );
}