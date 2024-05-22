import "./MoreInfo.css"
import React, { useState } from "react";

const MoreInfo = () => {
    const [info, setInfo] = useState("");
    const [buttonText, setButtonText] = useState("");

    const buttonHandler = (text) => {
        if (text === "Prvotřídní kvalita") {
            setInfo("Chápeme, že potápěči potřebují oblečení, které je nejen pohodlné, ale také odolá drsným podmínkám oceánu. Každý produkt vyrábíme individuálně.");
            setButtonText("Prvotřídní kvalita");
        } else if (text === "Čištění oceánů") {
            setInfo("Svým nákupem přispěješ k čištění oceánů.Za každou vydělanou korunu, zašleme část na projekt justicefornature.org k čištění oceánů.");
            setButtonText("Čištění oceánů");
        } else if (text === "Dbáme na Ekologii") {
            setInfo("Abychom co nejvíce zmírnili tyto dopady, tak jdeme cestou, trička z bavlny, potisky z certifikovaných barev, balení do sáčků na více použití, papírové krabice…");
            setButtonText("Dbáme na Ekologii");
        } else if (text === "Doprava zdarma pro CZ a SK") {
            setInfo("Doprava zdarma pro CZ a SK Pokud chceš vypadat opravdu dobře a objednáš minimálně za 2000 Kč, tak Ti balík doplave zdarma.");
            setButtonText("Doprava zdarma pro CZ a SK");
        } else {
            setInfo("");
            setButtonText("");
        }
    };

    return (
        <div className="changer">
            <div className="changer-button">
                <button onClick={() => buttonHandler("Prvotřídní kvalita")}>Prvotřídní kvalita</button>
                <button onClick={() => buttonHandler("Čištění oceánů")}>Čištění oceánů</button>
                <button onClick={() => buttonHandler("Dbáme na Ekologii")}>Dbáme na Ekologii</button>
                <button onClick={() => buttonHandler("Doprava zdarma pro CZ a SK")}>Doprava zdarma pro CZ a SK</button>
            </div>
            <div className="changer-info">
                <h3>{buttonText}</h3>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default MoreInfo;