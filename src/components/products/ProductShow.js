import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

export default function ProductShow() {
  const productsApi = 'http://localhost:9000/products'
  const [products, setProducts] = useState([])
  const MySwal = withReactContent(Swal)
  const handleDelete = (product) => {
    MySwal.fire({
      title: <p>{product.title}</p>,
      showCancelButton: true,
    }).then((data) => {
      if(data.isConfirmed) {
        fetch(`${productsApi}/${product.id}`, {
          method: "DELETE",
        })
      }
    })
  }

  useEffect(()=>{
    fetch(productsApi)
      .then((res)=> res.json())
      .then((data)=> setProducts(data))
  }, [products])

  return (
    <div className="container">
      <div className="bg-light p-3 mb-5">
        <Link className="btn btn-success" to={'/products/add'}>Add New Product</Link>
      </div>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product)=> {
              return(
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title.length > 30? `${product.title.slice(0, 30)}...`: product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link to={`/products/${product.id}`} className="btn d-inline-block btn-info me-2">Show</Link>
                    <Link to={`/products/edit/${product.id}`} className="btn d-inline-block btn-secondary me-2">Edit</Link>
                    <Link onClick={()=>handleDelete(product)} className="btn d-inline-block btn-danger">Delete</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
