import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <>
      <div className="card text-bg-dark border-none">
        <img src="https://images.unsplash.com/photo-1668405409882-0b3a8b6fc912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img" height={500} alt="" />
        <div className="card-img-overlay container d-flex flex-column align-items-start justify-content-center">
            <h5 className="card-title display-4 fw-bolder">Awesome Free Online Products</h5>
            <p className="card-text lead">The internet's source for visuals. Powered by creators everywhere.</p>
        </div>
      </div>
      <Products/>
    </>
  )
}

export default Home