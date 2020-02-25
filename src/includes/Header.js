import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { LanguageContext } from './../Context/LanguageContext'

const Header = () => {

    const {languages, currentLanguage, changeLanguage} = useContext(LanguageContext)

    return (
        <header className="py-2">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-4 left">
                        <ul className="text-uppercase">
                            { 
                                languages.map( (language, index) => (
                                    (currentLanguage !== language['code']) && <div key={index} onClick={ () => changeLanguage(language['code']) } className="change-language">{ language['code'] }</div> )
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-4 px-0 text-center">
                        {/* <Link className="logo" to="/"><img src={ siteSettings['header_logo'] } alt={ siteSettings['title'] } /></Link> */}
                    </div>
                    <div className="col-4 right">
                        <Link to="/cart" className="shopping-bag">
                            <i className="flaticon-shopping-bag"></i>
                            {/* <span>{ cartCounter }</span> */}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header