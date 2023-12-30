import React, { useEffect, useState } from 'react'
import "./viewProduct.scss"
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Button } from "@mui/material"
import useFetch from '../../hooks/useFetch';

import { addItem } from '../../store/slices/userCartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ViewProduct= () => {

    let {id}= useParams();
    const [singleProduct, setSingleProduct] = useState(null);

    //getting data from fake api store
    const products = useFetch('https://fakestoreapi.com/products');
    const data = products.data;

    const getProducts = async() => {
        
        setSingleProduct(data[`${id-1}`]);
    };
    
    const dispatch = useDispatch(); 
    // const arrdata = useSelector((state) => state.cart.data);
    //console.log(arrdata);

    
    const handleCart = () => {
        dispatch(addItem(id))
    };
    useEffect(()=> {
        
        getProducts();
    });

  return (
    <>
        <Navbar/>
        <div className='view-product'>
            <div>
             {!singleProduct && <h2 className='loading-text'>loading...</h2>}
            </div>
           
            <div className='product'>
                {singleProduct && (
                <>
                <div className='image'>
                    <img src={singleProduct.image} alt="" />
                </div>

                <div className='image-details'>
                    <h3>{singleProduct.title}</h3>
                    <p><b>Price: </b> ${singleProduct.price}</p>
                    <p><b>Description: </b>{singleProduct.description.slice(0, 100)}...</p>
                </div>

                <div className='button-container'>
                    <Button variant="contained" onClick={handleCart}>Add to cart</Button>
                    <Button variant="contained">Buy now</Button>
                </div>
            
                </>)
                }
            </div>

           
          
        </div>

       
            
    </>
    
  )
}

export default ViewProduct;