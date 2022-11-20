import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoading(false);
            setData(data);
            setFilter(data);
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

    const filterProduct = (text) => {
        const updateList = data.filter((x) => x.category === text);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return(
            <>
                <div className="filter-btns d-flex align-items-center justify-content-center mb-4">
                    <button className="btn btn-outline-primary mx-1" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-primary mx-1" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-primary mx-1" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-primary mx-1" onClick={() => filterProduct('jewelery')}>Jewelery</button>
                    <button className="btn btn-outline-primary mx-1" onClick={() => filterProduct('electronics')}>Electronics</button>
                </div>
                {
                    filter.map((product) => {
                        return(
                        <div className="col-md-3 mb-3">
                            <div className="card d-flex align-items-center justify-content-center" height={350} key={product.id}>
                                <img src={product.image} alt="" className="card-top-img p-3" height={150} />
                                <div className="card-body mt-auto">
                                    <p className="card-title fw-bold">{product.title.substring(0, 12)}...</p>
                                    <p className="card-text fw-bold my-1 fs-3">$ {product.price}</p>
                                    <NavLink className='btn btn-primary' to={`/products/${product.id}`}>Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Products