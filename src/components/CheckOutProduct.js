import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useStateValue } from '../StateProvider'

const CheckOutProductCon = styled.div`
    ${tw`flex`}
    img{
        ${tw`object-contain w-44 h-44`}
    }
`
const CheckOutProductInfo = styled.div`
    ${tw`pl-5`}
    button{
        ${tw`border mt-2.5`}
        background-color: #f0c14b;
        border-color:#a88734 #9c7e31 #846a29;
        color: #111;
    }
    p{
        ${tw`text-lg font-extrabold`}
    }
`
const CheckOutProductRate = styled.div`
    ${tw`flex`}
`

const CheckOutProduct = ({id, title, image, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }
    return (
        <CheckOutProductCon>
            <img src={image} alt="" />
            <CheckOutProductInfo>
                <p>{title}</p>
                <div>
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <CheckOutProductRate>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </CheckOutProductRate>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </CheckOutProductInfo>
        </CheckOutProductCon>
    )
}

export default CheckOutProduct
