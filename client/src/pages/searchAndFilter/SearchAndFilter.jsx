import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
//import ProductsList from '../../components/productsList/ProductsList';
import { useSelector } from 'react-redux';
export default function SearchAndFilter() {

  const data = useSelector((state) => state.filter.filterData);

  return (
    <div>
      <Navbar/>
      <div className="high-rated-products">
               <h2>High rated products</h2>
                <div className="high-rated" key={data.id}>
                {data.map((item) => (
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

    </div>
  )
}
