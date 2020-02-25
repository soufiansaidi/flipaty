import React, { useState, createContext, useEffect } from 'react'

import listProducts from './../Data/products'

export const ProductsContext = createContext()

export const ProductsContextProvider = props => {

    const [products, setProducts] = useState([])


    useEffect(() => {

        setProducts(listProducts)

    }, [products])

    return (
        <ProductsContext.Provider value={{ products }}>
            { props.children }
        </ProductsContext.Provider>
    )

}