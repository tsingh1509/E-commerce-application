import React from 'react';
import "./productsList.scss";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function ProductsList() {

    const proData = useSelector((state) => state.products.data);
    
  return (
    <div className="high-rated-products">
               <h2>High rated products</h2>
                <div className="high-rated" key={proData.id}>
                {proData.map((item) => (
                    <div className="high-rated-item"  key={item.id}>
                        <Link to={`/viewProduct/${item.id}`}>
                            <img className="topItems hover" src={item.image} alt="" />
                            <p>{item.title.slice(0, 20)}...</p>
                            <h4>{item.price}</h4>
                        </Link>
                    </div>
                        
                    ))}
                   
                </div>
            </div>

  )
}
