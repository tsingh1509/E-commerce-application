import React from 'react'
import "./category.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUtensils, faShirt, faMobile, faBook, faChair, faPlane, faMotorcycle, faPenFancy, faGift} from "@fortawesome/free-solid-svg-icons";
export default function Category() {
  return (
        <section>
          <div className='category-1'>
            <FontAwesomeIcon className='category-icon' icon={faMobile} size="2xl" />
            <span>Mobile</span>
          </div>
            
          <div className='category-2'>
            <FontAwesomeIcon className='category-icon' icon={faShirt} size="2xl" />
            <span>Fashion</span>
          </div>

           <div className='category-3'>
            <FontAwesomeIcon className='category-icon' icon={faUtensils} size="2xl" />
            <span>Grocery</span>
           </div>

           <div className='category-4'>
           <FontAwesomeIcon className='category-icon' icon={faBook} size="2xl" />
           <span>Books</span>
           </div>
           
           <div className='category-5'>
           <FontAwesomeIcon className='category-icon' icon={faChair}  size="2xl" />
           <span>Furniture</span>
           </div>

           <div className='category-6'>
           <FontAwesomeIcon className='category-icon' icon={faPlane} size="2xl" />
           <span>Travel</span>
           </div>

           <div className='category-7'>
           <FontAwesomeIcon className='category-icon' icon={faMotorcycle} size="2xl" />
           <span>Automobiles</span>
           </div>

           <div className='category-8'>
           <FontAwesomeIcon className='category-icon' icon={faPenFancy} size="2xl" />
           <span>Stationary</span>
           </div>

           <div className='category-9'>
           <FontAwesomeIcon className='category-icon' icon={faGift} size="2xl" />
           <span>Gift card</span>
           </div>
           
            
            
           
           
            
            
            
           
        </section>
  )
}
