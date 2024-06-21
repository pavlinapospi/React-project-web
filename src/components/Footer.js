import "./Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return <footer >
        <div className="all-contact">
            <p>Petr Macinský</p>
            <p>IČ: 66108616</p>
        </div>
        <div className="contact">
            <div className="contact-items">
                <div className="item">
                    <FaSquareFacebook />
                    <a href="https://www.facebook.com/king.of.all.seas/">King Of All Seas</a>
                </div>
                <div className="item">
                    <FaEnvelope  />
                    <a href="https://info@kingofallseas.com">info@kingofallseas.com</a>
                </div>
                <div className="item">
                    <FaInstagram />
                    <a href="https://www.instagram.com/king_of_all_seas/">	king_of_all_seas</a>
                </div>
                <div className="item">
                    <FaPhone />
                    <p>+420 722 347 493</p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer