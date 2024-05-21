import "./Failure.css"
import { TbFaceIdError } from "react-icons/tb";


const Failure = () => {
  return<div className="wrapper-failure">
    <h2>404</h2>
    <TbFaceIdError className="failure-icon"/>
    <p>Stranka nenalezena</p>
  </div>
}

export default Failure
