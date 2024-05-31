import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-image" src={url + "/images/" + image} alt="" />
                {!cartItems[id]
                    ? <FaPlus className='add' onClick={() => addToCart(id)} />
                    : <div className="food-item-counter">
                        <FaMinus className='count' onClick={() => removeFromCart(id)} />
                        <p>{cartItems[id]}</p>
                        <FaPlus className='count' onClick={() => addToCart(id)} />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem