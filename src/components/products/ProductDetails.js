import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const {productId} = useParams()
    const apiProduct = 'http://localhost:9000/products/'
    const [product, setProduct] = useState({})

    useEffect(()=> {
        fetch(`${apiProduct}${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[])
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-lg-6">
                <img className="img-fluid max-h-500" src={product.image} />
            </div>
            <div className="col-12 col-lg-6">
                <h2 className="text-success">{product.title}</h2>
                <p>{product.description}</p>
                <div>
                    <span className="text-success">{product.price}$</span>
                </div>
            </div>
        </div>
    </div>
  )
}
