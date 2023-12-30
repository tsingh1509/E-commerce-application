import React, { useState } from 'react'
import "./slider.scss";
import { useSelector } from 'react-redux';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
export default function Slider() {

    const proData = useSelector((state) => state.products.data);
    const [current, setCurrent] = useState(0);

    // slider logic
    const length = proData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
     };

    // if (!Array.isArray(proData) || proData.length <= 0) {
    //     return null;
    // }


  return (

<>
    
     {proData.length === 0 && 
     (
        <div className='slider-container-nodata'>
             <p>Loading...</p>
         </div>
    )}
   
    {proData.length !== 0 &&
    (
        <div className='slider-container'>

             <div className='left-slider'><FontAwesomeIcon icon={faArrowLeft} className='left-arrow' size='2xl' onClick={prevSlide}/></div>

            <div className='image-container'>
                {proData.map((items, index)=>{
                    return(
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                                key={index}
                         >
                            {index === current && (<img src={items.image} alt='' className='image' />)}
                        </div>
                    )
                })}
             </div>
    
         <div className='right-slider'><FontAwesomeIcon icon={faArrowRight} className='right-arrow' size='2xl' onClick={nextSlide}/></div>

        </div>
    )}


</>
   
)
}


