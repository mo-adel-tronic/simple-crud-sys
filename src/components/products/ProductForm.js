import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function ProductForm() {
    const {productId} = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const apiProduct = 'http://localhost:9000/products/'
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(typeof productId !== 'undefined') {
            fetch(`${apiProduct}${productId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({
                    // title: title, == title,
                    title, 
                    description
                })
            })
        } else {
            fetch(`${apiProduct}`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({
                    title, 
                    description
                })
            })
                .then((res)=>res.json())
                .then((data)=> navigate(`/products/edit/${data.id}`))
        }
    }

    useEffect(()=>{
        if(typeof productId !== 'undefined') {
            fetch(`${apiProduct}${productId}`)
                .then(res=>res.json())
                .then(data=> {
                    setTitle(data.title)
                    setDescription(data.description)
                })
        }
    }, [])

  return (
    <form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">Product Title</label>
            <input type="text" className="form-control" id="productTitle" placeholder="product title here ... " value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Description</label>
          <textarea className="form-control" id="productDescription" rows={3} defaultValue={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
            <input type="submit" className="btn btn-success" value={typeof productId !== 'undefined'?'update':'add'} />
        </div>
    </form>

  )
}
