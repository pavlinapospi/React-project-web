import "./AllProduct.css"
import allProduct from "../data" 

const AllProduct = () => {
    return<div className="product">
        <div>
            <h2 className="title">Co nosí potápěči, kteří mají styl?</h2>
        </div>
        <div className="product-card" >
            {allProduct.map((oneProduct) => {
                const {id,image,title,price,description} = oneProduct
                return<div className="one-product" key={id}>
                    <h2>{title}</h2>
                    <img src={image} alt=""/>
                    <p>{description}</p>
                    <h4>{price}</h4>
                </div>
            })
        }
        </div>
    <div className="background"></div>
    </div>
}

export default AllProduct
