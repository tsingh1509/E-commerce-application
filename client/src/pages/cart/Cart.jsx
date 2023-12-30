import React from 'react';
import "./cart.scss";
import Navbar from '../../components/navbar/Navbar';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../../store/slices/userCartSlice';
import useFetch from '../../hooks/useFetch';

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const Cart = () => {

  const dispatch = useDispatch();

  const [userCart, setUserCart] = useState([]);
  let  [totalOrder, setTotalOrder] =useState(0);
 
  //fetching products data.
  const products = useFetch('https://fakestoreapi.com/products');
  const data = products.data;
  //console.log(data);

  //getting cart data from store.
  const cartData = useSelector((state) => state.cart.cartData);
  //console.log(cartData);

  // handle remove item action.
  const handleRemoveItem = (id) => {
    
    dispatch(deleteItem(id));
    //console.log("remove item id: " + id);
  };


   // Side effects.
useEffect(()=> {
    const cart = () => {
   
      const finalCart = data.filter((item) => cartData.includes(item.id));

     
       setUserCart(finalCart);

        let finalPrice = 0;

       for (let i=0; i<finalCart.length; i++){
          finalPrice = finalPrice + finalCart[i].price;
       };

       setTotalOrder(finalPrice);
       
       console.log(finalCart);
     };
   cart();
  }, [cartData, data]);



  return (
    <>
      <Navbar />
      
        <h2 className='cart-title'>Your Cart</h2>
        {userCart.length === 0 && (
          <div className='empty-cart-text'>
            Your shopping cart is empty!
          </div>
        )}
      <div className='main-cart'>

     
        <div className='cart'>
            {!userCart && <h3>Loading...</h3>}

            {userCart && (

              userCart.map((item, index) => {
                return (
                  <div key={index} className="cart-product">
                    <img src={item.image} alt={item.title}/>
                    <p>{item.title.slice(0, 20)}</p>
                    <span>${item.price.toFixed(2)}</span>
                    <Button className='remove-btn' startIcon={<DeleteIcon/>} variant="outlined" onClick={() => {handleRemoveItem(item.id)}}>remove</Button>
                  </div>
                )
              })
            )}
        </div>

        <div className='total-order-div'>

        {userCart.length !== 0 && (
          <div className='total-order'>
              <h3>Price Details</h3>
              <p>Total Price : <span>{totalOrder}</span></p>
              <Button variant='outlined'>Place Order</Button>
            </div>
        )}

           
             
        </div>

      </div>
    </>
    
  )
};

export default React.memo(Cart);
