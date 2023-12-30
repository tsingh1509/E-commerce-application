import React from 'react';
import "./topFive.scss"
import { useSelector } from 'react-redux';

export default function TopFive() {

    const proData = useSelector((state) => state.products.data);
    
  return (
    <>
     {proData.length === 0 && 
     (
        <div className="top-products-nodata">
            <h2>Top rated products this week</h2>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
        </div>
    )}
        {proData.length !== 0 && 
        (
            <div className="top-products">
                <h2>Top rated products this week</h2>
                <div>
                    {proData.slice(0, 5).map((item) => (
                 <img className="foodImage hover" key={item.id} src={item.image} alt=""/>
                    ))}
                   
                </div>
         </div>
        )}
   
    </>
  )
}
