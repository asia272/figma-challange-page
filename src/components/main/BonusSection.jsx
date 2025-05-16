import React from 'react'
import "./BonusSection.css"

const BonusSection = (props) => {
    let cartData = props.item;
    console.log(cartData)
    return (
        <div className='bonus-card'>
            <div className='cart-header'>
                <p>FREE GIFT # {cartData.id}</p>
                <span>{cartData.topText}</span>

            </div>

            <h2>{cartData.heading}</h2>
            <p>{cartData.content}</p>
            <img src={cartData.img} alt="img" />
        </div>
    )
}

export default BonusSection
