import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useStateValue } from '../StateProvider'
import adds from '../assets/adds.png'
import CheckOutProduct from './CheckOutProduct'
import SubTotal from './SubTotal'

const CheckOutContainer = styled.div`
    ${tw`flex p-5 bg-white`}
    height: max-content;
    img{
        ${tw`w-full mb-2.5`}
    }
`
const BasketEmpty = styled.div`
    ${tw``}
    h2{
        ${tw`font-bold text-lg`}
    }
`
const BasketContainer = styled.div`
    ${tw``}
    h2{
        ${tw`font-bold text-lg mr-2.5 p-2.5 border-b border-gray-300`}
    }
`
const CheckOutLeft = styled.div`
    ${tw``}
`
const CheckOutRight = styled.div`
    ${tw``}
`

const CheckOut = () => {
    const [{ basket }] = useStateValue();
    return (
        <CheckOutContainer>
            <CheckOutLeft>
            <img src={adds} alt="" />
            {basket?.length === 0 ? (
                <BasketEmpty>
                    <h2>Your Shopping Basket Is Empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </BasketEmpty>
            ) : (
                <BasketContainer>
                    <h2>Your Shopping Basket</h2>
                    <div>
                    {basket.map(item => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    </div>
                </BasketContainer>
            )}
            </CheckOutLeft>
            {basket.length > 0 && (
                <CheckOutRight>
                    <SubTotal />
                </CheckOutRight>
            )}
        </CheckOutContainer>
    )
}

export default CheckOut
