import logo from "../img/logo.png"
import "./Header.css"
import {useState , useEffect} from "react"

const Header = () => {

    const texts = [
        "Vítejte na naší stránce.",
        "Dokonalý životní styl pod i nad hladinou.",
        "Ukaž svůj potápěčský styl a ponoř se do světa módy"
    ];
    const [randomText,setRandomTest] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * texts.length);
        setRandomTest(texts[randomIndex]);
    },[]);
    
    return <section className="header">
        <img className="logo" src={logo} all={logo}></img>
        <h1 className="heading">Objevte Kvalitu a Pohodlí Našich Potápěčských Oděvů</h1>
        <p className="subtitles">{randomText}</p>
    </section>
}

export default Header
