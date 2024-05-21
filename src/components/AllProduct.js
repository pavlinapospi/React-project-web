import "./AllProduct.css"
import OneProduct from "./OneProduct"
import allProduct from "../data"

const AllProduct = () => {
    return<div className="all-product">
        <div>
            <h2 className="title">Co nosí potápěči, kteří mají styl?</h2>
        </div>
        <div  className="product-card">
         <OneProduct productTitle={allProduct[0].title}
                    productImage={allProduct[0].image}
                    productDescription= {allProduct[0].description}
                    productPrice= {allProduct[0].price}
        />
        <OneProduct productTitle={allProduct[1].title}
                    productImage={allProduct[1].image}
                    productDescription= {allProduct[1].description}
                    productPrice= {allProduct[1].price}
        />
        <OneProduct productTitle={allProduct[2].title}
                    productImage={allProduct[2].image}
                    productDescription= {allProduct[2].description}
                    productPrice= {allProduct[2].price}
        />
        <OneProduct productTitle={allProduct[4].title}
                    productImage={allProduct[4].image}
                    productDescription= {allProduct[4].description}
                    productPrice= {allProduct[4].price}
        />
    </div>
       
    </div>
}

export default AllProduct
