import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { LanguageContext } from './../Context/LanguageContext'

const ButtonCartToCheckout = () => {
    const {translation} = useContext(LanguageContext)
    
    return (
        <footer className="custom-button">
            <Link to="/cart" className="text-center">
                { translation['checkout'] } (0)
                <span className="text-uppercase">500</span>
            </Link>
        </footer>
    )
}

export default ButtonCartToCheckout