import React, { useState, createContext } from 'react'

export const ProductsContext = createContext()

export const ProductsContextProvider = props => {

    const [Products, setProducts] = useState([])

    return (
        <ProductsContext.Provider value={{ Products }}>
            { props.children }
        </ProductsContext.Provider>
    )

}