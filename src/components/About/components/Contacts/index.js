import './style.scss';

export default function Contacts(props) {
    return (
        <>
            <div>
                <i className={props.class}></i>
                <h3>{props.title}</h3>
                <a href={props.href}>{props.desc}</a>
            </div>
        </>
    )
}