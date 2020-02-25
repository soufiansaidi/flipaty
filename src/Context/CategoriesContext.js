import React, { useState, createContext, useEffect } from 'react'

import listCategories from './../Data/categories'

export const CategoriesContext = createContext()

export const CategoriesContextProvider = props => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState('')

    useEffect(() => {
        setCategories(listCategories)
        setCurrentCategory(listCategories[0]['id'])
    }, [categories])

    return (
        <CategoriesContext.Provider value={{ categories, currentCategory }}>
            { props.children }
        </CategoriesContext.Provider>
    )

}