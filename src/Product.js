import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";


function Product({id,title,img,price,rating}) {

const [{ basket }, dispatch] = useStateValue();

const addToBasket = () => {
    // dispatch the item into the data layer
 dispatch({
    type: "ADD_TO_BASKET",
    item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
    },
 });
};

    return (
        <div className='product'>
            <div className='product-zone'>
                <div className='product__info'>
                    <p>{title}</p>
                    <p>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product-rating'>
                        {Array(rating).fill().map((_,i)=>(
                            <p>⭐</p>
                        ))}
                    </div>
                </div>
                <div className='actual-Product'>
                    <img src={img}></img>
                    <button src='/' onClick={addToBasket}>Add to Basket</button>
                </div>
            </div>
            
        </div>
    )
}

export default Product
