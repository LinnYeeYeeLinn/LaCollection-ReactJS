import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const ProductsDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setLoading(false);
        setProduct(data);
    })
    .catch(err => console.log(err));
}, [])

  const Loading = () => {
    return(
        <div className='d-flex h-100 justify-content-center align-items-center'>
          <div class="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    )
  }

  const ShowProduct = () => {
    return(
      <>
        <div className="col-md-6">
          <img src={product.image} width={300} className='img-fluid' alt="" />
        </div>
        <div className="col-md-6">
          <p>{product.category}</p>
          <h3 className="text-uppercase">{product.title}</h3>
          <p>{product.description}</p>
          <div>
            <NavLink to='/' className="btn btn-outline-primary me-1">Add to cart</NavLink>
            <NavLink to='/' className="btn btn-primary">Go to cart</NavLink>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='container my-5'>
      <div className="row justify-content-center align-items-center">
        {loading ? <Loading/> : <ShowProduct/>}
      </div>
    </div>
  )
}

export default ProductsDetails