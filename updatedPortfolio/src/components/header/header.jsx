import '../header/header.css'

const Header = (props) => {
    return (
        <>
            <h1 className="headerStyle">{props.title}</h1>
            <h2 className="headerStyle">{props.desc}</h2>
        </>
    );
};

export default Header;
