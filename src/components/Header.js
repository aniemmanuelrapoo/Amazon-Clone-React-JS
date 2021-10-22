import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import logo from '../assets/amazon_PNG11.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import '../styles/generalStyles.css'
import { useStateValue } from '../StateProvider'

const NavContainer = styled.nav`
    ${tw`flex items-center sticky top-0 z-50 shadow-2xl`}
    background-color: #131921;
    img{
        ${tw`w-28 pt-5 px-5 object-contain`}
    }
    input{
        ${tw`h-3 p-3.5 border-none w-full`}
    }
`
const HeaderSearch = styled.div`${tw`flex flex-1`}`
const HeaderNav = styled.div`${tw`flex justify-evenly text-white`}`
const HeaderOption = styled.div`${tw`flex flex-col mx-2 items-center`}`
const HeaderOptionLine1 = styled.span`font-size:10px;`
const HeaderOptionLine2 = styled.span`
    ${tw`font-bold`}
    font-size:13px;
`
const HeaderOptionBasket = styled.span`${tw`flex items-center`}`

const Header = () => {
    const [{ basket }] = useStateValue();
    console.log(basket)
    return (
        <NavContainer>
            <Link to="/"><img src={logo} alt="" /></Link>
            <HeaderSearch>
                <input type="text" />
                <SearchIcon className="header__searchIcon" />
            </HeaderSearch>
           <HeaderNav>
                <Link to="/login" className="">
                    <HeaderOption>
                        <HeaderOptionLine1>Hello Rapoo</HeaderOptionLine1>
                        <HeaderOptionLine2>Sign In</HeaderOptionLine2>
                    </HeaderOption>
                </Link>
                <Link to="/" className="">
                    <HeaderOption>
                        <HeaderOptionLine1>Returns</HeaderOptionLine1>
                        <HeaderOptionLine2>& Orders</HeaderOptionLine2>
                    </HeaderOption>
                </Link>
                <Link to="/" className="">
                    <HeaderOption>
                        <HeaderOptionLine1>Your</HeaderOptionLine1>
                        <HeaderOptionLine2>Prime</HeaderOptionLine2>
                    </HeaderOption>
                </Link>
                <Link to="checkout">
                    <HeaderOptionBasket>
                        <ShoppingBasketIcon />
                        <HeaderOptionLine2 className="mx-2">{basket?.length}</HeaderOptionLine2>
                    </HeaderOptionBasket>
                </Link>
           </HeaderNav>
        </NavContainer>
    )
}

export default Header
