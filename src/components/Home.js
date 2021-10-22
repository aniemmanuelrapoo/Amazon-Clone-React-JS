import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import banner from '../assets/banner.png'
import Product from './Product'
import image1 from '../assets/717rf8dWQTL._AC_UL320_.jpg'
import image2 from '../assets/91GNONZ1fCL._AC_UY218_.jpg'
import image3 from '../assets/61wrOi+03FL._AC_UY218_.jpg'
import image4 from '../assets/61QHRATj+vL._AC_UY218_.jpg'
import image5 from '../assets/71u1BzjGJbL._AC_SY200_.jpg'
import image6 from '../assets/71dcNNSDIFL._AC_UL320_.jpg'

const HomeContainer = styled.div`
  ${tw`md:mx-10 shadow-2xl`}
  max-width:1500px;
  img{
      ${tw`w-full`}
      mask-image:linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8));
  }
`
const HomeRow = styled.div`${tw`flex mx-1.5`}`

const Home = () => {
    return (
        <HomeContainer>
            <img src={banner} alt="" />
            <HomeRow>
                <Product
                id="12345"
                title="COSORI Air Fryer Max XL(100 Recipes) Digital Hot Oven Cooker"
                price={119.99}
                rating={4}
                image={image1}
            />
                <Product
                id="45768678"
                title="Razer BlackShark V2 Gaming Headset: THX 7.1 Spatial Surround Sound"
                price={34.99}
                rating={3}
                image={image3}
            />
            </HomeRow>
            <HomeRow>
            <Product
                id="8765444"
                title="Donerton Smart Watch, Fitness Tracker for Android Phones"
                price={37.99}
                rating={4}
                image={image4}
            />
            <Product
                id="0987645"
                title="Apple iPhone 12 Pro Max, 128GB, Gold"
                price={1350.00}
                rating={5}
                image={image5}
            />
            <Product
                id="1453345"
                title="Spray Mop for Floor Cleaning, Floor Mop"
                price={229.00}
                rating={2}
                image={image6}
            />
            </HomeRow>
            <HomeRow>
            <Product
                id="6645643"
                title="Acer Nitro XZ342CK Pbmiiphx 34 1500R Curved WQHD (3440 x 1440) VA Gaming Monitor"
                price={449.99}
                rating={5}
                image={image2}
            />
            </HomeRow>
        </HomeContainer>
    )
}

export default Home
