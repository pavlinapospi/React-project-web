import "./OneProduct.css"

const OneProduct = ({productTitle ,productImage, productDescription,productPrice}) => {
    return<div className="One-product">
        <h2>{productTitle}</h2>
        <img src={productImage} alt="" />
        <p>{productDescription}</p>
        <h4>{productPrice} Kč</h4>
    </div>
}

export default OneProduct
