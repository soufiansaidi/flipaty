import React, { useState, createContext, useEffect } from 'react'

import listLanguages from './../Data/languages'
import EnTranslation from './../locales/en.json'
import ArTranslation from './../locales/ar.json'
import EsTranslation from './../locales/es.json'

import { checkLocalStorage } from './../Config'

export const LanguageContext = createContext()

export const LanguageContextProvider = props => {

    const [languages, setLanguages] = useState([])
    const [currentLanguage, setCurrentLanguage] = useState('')
    const [direction, setDirection] = useState('ltr')
    const [translation, settranslation] = useState([])

    const checkCurrent = () => {
        let currentLanguage = checkLocalStorage('currentLanguage')
        let currentDirection = checkLocalStorage('currentDirection')
        
        if(currentLanguage === 'null' && currentDirection === 'null'){
            languages.map(language => {
                if(language['default']){
                    currentLanguage = language['code']
                    currentDirection = language['direction']
                }
            })
        }

        setCurrentLanguage(currentLanguage)
        setDirection(currentDirection)
        localStorage.setItem('currentLanguage', currentLanguage)
        localStorage.setItem('currentDirection', currentDirection)
    }

    const changeLanguage = (code) =>{
        languages.map(language => {
            if(language['code'] === code){
                setCurrentLanguage(code)
                localStorage.setItem('currentLanguage', code)
                localStorage.setItem('currentDirection', language['direction'])
            }
        })
    }

    useEffect(() => {

        setLanguages(listLanguages)
        checkCurrent()

        switch(currentLanguage){
            case 'es':
                settranslation(EsTranslation)
            break
            case 'ar':
                settranslation(ArTranslation)
            break
            default:
                settranslation(EnTranslation)
            break
        }
        
    }, [languages, currentLanguage])

    return (
        <LanguageContext.Provider value={{ languages, currentLanguage, direction, translation, changeLanguage }}>
            { props.children }
        </LanguageContext.Provider>
    )

}