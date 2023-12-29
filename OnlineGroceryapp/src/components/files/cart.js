import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrashAlt, FaHeart } from 'react-icons/fa'; // Import icons for delete and wishlist

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Surf Excel Powder',
      price: 20.0,
      quantity: 1,
      image: 'https://n4.sdlcdn.com/imgs/f/g/9/Surf-Excel-Matic-Front-Load-SDL688275358-1-4e54c.jpg',
      deliveryTime: 'Expected delivery: 2-3 days'
    },
  ]);

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h3>Your Cart</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
             
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <input type="text" className="form-control text-center col-lg-3 col-md-4 col-sm-6" value={item.quantity} 
   readOnly />
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-link" onClick={() => handleRemoveItem(item.id)}>
                        <FaTrashAlt color="black" size={20} />
                      </button>
                      <button className="btn btn-link">
                        <FaHeart color="red" size={20} />
                      </button>
                    </div>
                    <p className="card-text mt-2">{item.deliveryTime}</p>
                    
                  </div>
                  
                </div>
              </div>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://www.bigbasket.com/media/uploads/p/l/264679_5-milky-mist-paneer-premium-fresh.jpg" alt={item.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Milky Mist Paneer</h5>
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <input type="text" className="form-control text-center col-lg-3 col-md-4 col-sm-6" value={item.quantity} 
   readOnly />
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-link" onClick={() => handleRemoveItem(item.id)}>
                        <FaTrashAlt color="black" size={20} />
                      </button>
                      <button className="btn btn-link">
                        <FaHeart color="red" size={20} />
                      </button>
                    </div>
                    <p className="card-text mt-2">{item.deliveryTime}</p>
                    
                  </div>
                  
                </div>
              </div>
              
            </div>
            
          ))}
        </div>
        <div className="col-lg-4">
          {/* Order Summary and Payment */}
          <div className="card">
            {/* Order Summary */}
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Subtotal
                  <span>${cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Tax
                  <span>$10.00</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Total
                  <span>
                    ${(cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) + 10).toFixed(2)}
                  </span>
                </li>
              </ul>
              {/* Payment options */}
              <h5 className="card-title mt-4">Payment</h5>
              <div className="d-flex flex-column">
                <button className="btn btn-primary mt-2">Credit Card</button>
                <button className="btn btn-primary mt-2">Debit Card</button>
                <button className="btn btn-primary mt-2">UPI</button>
                <button className="btn btn-primary mt-2">Cash On Delivery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CartPage;