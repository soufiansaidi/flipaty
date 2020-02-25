import React, { useContext } from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import { ProductsContext } from './../Context/ProductsContext'
import { CategoriesContext } from './../Context/CategoriesContext'

import HomeProduct from './../components/HomeProduct'
import ButtonCartToCheckout from '../components/ButtonCartToCheckout'

const Home = (  ) => {
    const { products } = useContext(ProductsContext)
    const { categories, currentCategory } = useContext(CategoriesContext)
      
    const params = {
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: true,
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
    }

    return (
        <div className="container pt-1 pb-4">
            {/* {
                (banner) &&  <div className="banner mb-2"><img src={ banner } alt="banner" /></div>
            } */}

            {
                (categories.length > 0) &&
                <div className="scrolling">
                    <div>
                        { 
                            categories.map((category, i) => (
                                    <div className={ (currentCategory === category['id']) ? "category-slide active" : "category-slide"} key={i}><h3>{ category['name'] }</h3></div>
                                )
                            )
                        }
                    </div>
                </div>
            }

            <div className="mt-1 list-product">
                {
                    (products.length > 0) && 
                    <Swiper {...params} shouldSwiperUpdate>
                        { 
                            products.map((product, i) => (
                                    <div className="product-slide" key={ i }>
                                        <HomeProduct productData={ product } />
                                    </div>
                                )
                            )
                        }
                    </Swiper>
                }
            </div>
            <ButtonCartToCheckout />
        </div>
    )
}

export default Home