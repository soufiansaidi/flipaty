import React, { useState, createContext } from 'react'

export const LanguageContext = createContext()

export const LanguageContextProvider = props => {

    const [language, setLanguage] = useState('ar')
    const [languageJson, setlanguageJson] = useState([])

    return (
        <LanguageContext.Provider value={{ language, languageJson }}>
            { props.children }
        </LanguageContext.Provider>
    )

}