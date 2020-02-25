import React, { useContext } from 'react'

import { LanguageContext } from './../Context/LanguageContext'

const HomeProduct = ( props ) => {
    const {translation} = useContext(LanguageContext)
    const { productData } = props

    return (
        <div className="wrapper">
            <img src={ productData['image'] } alt={ productData['title'] } />
            <div>
                { productData['is_promotion'] && <div className="product-sale">{ translation['sale'] }</div> }
                <h2>{ productData['title'] }</h2>
                <div className="price text-uppercase">
                    { !productData['is_promotion'] ? productData['price']['price'] : 
                    <div>{productData['price']['promotion']} <span>{productData['price']['price']}</span></div> }
                </div>
            </div>
            <button className="cart">{ translation['add_to_cart'] }</button>
        </div>
    )
}

export default HomeProduct