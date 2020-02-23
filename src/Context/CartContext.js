import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartContextProvider = props => {

    const [Cart, setCart] = useState([])

    return (
        <CartContext.Provider value={{ Cart }}>
            { props.children }
        </CartContext.Provider>
    )

}