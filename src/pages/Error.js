import { TbFaceIdError } from "react-icons/tb";
import "./Error.css"

const Error = () => {
  return<section>
    <div className="wrapper-failure">
    <h2>404</h2>
    <TbFaceIdError className="failure-icon"/>
    <p>Stranka nenalezena</p>
  </div>
  </section>
}

export default Error   