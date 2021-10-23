import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'

const SubTotalContainer = styled.div`
    ${tw`flex flex-col p-5 rounded-md justify-between w-52 md:w-72 h-36 ml-4`}
    background-color:#f3f3f3;
    border: 1px solid #ddd;
    button{
        ${tw`rounded-t-sm w-full h-8 border`}
        background-color: #f0c14b;
        border-color:#a88734 #9c7e31 #846a29;
        color: #111;
    }
`
const SubTotalText= styled.p`
    ${tw`pb-2`}
`
const SubTotalSmall= styled.small`
    ${tw`pb-1.5 flex items-center`}
    input{
        ${tw`mr-1.5`}
    }
`

const SubTotal = () => {
    const [{ basket }] = useStateValue();
    return (
        <SubTotalContainer>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <SubTotalText>Subtotal ({basket.length} items): <strong>{`${value}`}</strong></SubTotalText>
                        <SubTotalSmall>
                            <input type="checkbox" /> This order contains a gift
                        </SubTotalSmall>
                    </>
                )}
                
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Preceed to Checkout</button>
        </SubTotalContainer>
    )
}

export default SubTotal
