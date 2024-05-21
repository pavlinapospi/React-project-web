import "./MoreInfo.css"
import {useState} from "react"

const MoreInfo = () => {
    const [info,setInfo] = useState("Chápeme, že potápěči potřebují oblečení, které je nejen pohodlné, ale také odolá drsným podmínkám oceánu. Každý produkt vyrábíme individuálně.")
    const [buttonText, setButtonText] = useState('')
    
    const buttonHandler = () => {
            setInfo("Chápeme, že potápěči potřebují oblečení, které je nejen pohodlné, ale také odolá drsným podmínkám oceánu. Každý produkt vyrábíme individuálně.")
            setButtonText("Prvotřídní kvalita")
        }
    
    
    const buttonHandler2 = () => {
        setInfo("Svým nákupem přispěješ k čištění oceánů.Za každou vydělanou korunu, zašleme část na projekt justicefornature.org k čištění oceánů.")
        setButtonText("Čištění oceánů")
    }
    
    const buttonHandler3 = () => {
        setInfo("Abychom co nejvíce zmírnili tyto dopady, tak jdeme cestou, trička z bavlny, potisky z certifikovaných barev, balení do sáčků na více použití, papírové krabice…")
        setButtonText("Dbáme na Ekologii")
    }
    
    const buttonHandler4  = () => {
        setInfo("Doprava zdarma pro CZ a SK Pokud chceš vypadat opravdu dobře a objednáš minimálně za 2000 Kč, tak Ti balík doplave zdarma.")
        setButtonText("Doprava zdarma pro CZ a SK")
    }
    
        return (
        <div className="changer">
            <div className="changer-button">
                <button onClick={buttonHandler}>Prvotřídní kvalita</button>
                <button onClick={buttonHandler2}>Čištění oceánů</button>
                <button onClick={buttonHandler3}>Dbáme na Ekologii</button>
                <button onClick={buttonHandler4}>Doprava zdarma pro CZ a SK</button>
            </div>
            <div className="changer-info">
            <h3>{buttonText}</h3>
            <p>{info}</p>
            </div>
        </div>
        )
    }

export default MoreInfo
