import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useStateValue } from '../StateProvider'

const ProductContainer = styled.div`
    ${tw`flex flex-col bg-white m-2.5 w-full p-5 items-center justify-end`}
    max-height: 400px;
    min-width: 100px;
    img{
        ${tw`w-full object-contain mb-4`}
        max-height: 200px;
    }
    button{
        ${tw`border`}
        background-color: #f0c14b;
        border-color:#a88734 #9c7e31 #846a29;
    }
`
const ProductInfo = styled.div`
    ${tw`h-28 mb-4`}
    p{
        ${tw`text-xs md:text-base`}
    }
`
const ProductPrice = styled.p`${tw`mt-1.5`}`
const ProductRate = styled.div`${tw`flex`}`

const Product = ({ id, title, price, rating, image }) => {
    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                image,
                rating
            }
        })
    };
    return (
        <ProductContainer>
            <ProductInfo>
                <p>{title}</p>
                <ProductPrice>
                    <small>$</small>
                    <strong>{price}</strong>
                </ProductPrice>
                <ProductRate>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </ProductRate>
            </ProductInfo>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </ProductContainer>
    )
}

export default Product
