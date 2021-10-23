import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../assets/amazonLogo.png'

const LoginContainer = styled.div`
    ${tw` bg-white h-screen flex flex-col items-center`}
    img{
        ${tw`w-28 object-contain my-5`}
    }
`
const LoginPack = styled.div`
    ${tw`w-80 flex flex-col p-5 border border-gray-300`}
    h1{
        ${tw`text-4xl font-medium mb-5`}
    }
    p{
        ${tw`mt-3.5 text-sm`}
    }
`
const SignInButton = styled.button`
    ${tw`rounded-t-sm w-full h-8 border mt-2.5`}
    background-color: #f0c14b;
    border-color:#a88734 #9c7e31 #846a29;
    color: #111;
`
const RegisterButton = styled.button`
    ${tw`rounded-t-sm w-full h-8 border border-gray-800 mt-2.5`}
`
const FormContainer = styled.form`
    ${tw``}
    h5{
        ${tw`font-bold mb-1.5`}
    }
    input{
        ${tw`mb-2.5 h-8 bg-white w-full border outline-none`}
    }
`

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleRegister = (e) => {
        e.preventDefault();
    }
    return (
        <LoginContainer>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>

            <LoginPack>
                <h1>Sign In</h1>
                <FormContainer>
                    <h5>E-Mail</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <SignInButton type="submit" onClick={handleLogin}>Sign In</SignInButton>
                </FormContainer>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice
                </p>
                <RegisterButton  onClick={handleRegister}>Create your amazon Account</RegisterButton>
            </LoginPack>
        </LoginContainer>
    )
}

export default Login
