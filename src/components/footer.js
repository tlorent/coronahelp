import React from "react"
import styled from "styled-components"
import logo from "../static/images/logo.png"

export default () => {
    const year = new Date().getFullYear()

    return (
        <Footer>
            <Inner>
                <Logo src={logo} alt="Local Corona Support logo" />
                <Text>Amsterdam | &copy; {year}</Text>
            </Inner>
        </Footer>
    )
}

const Footer = styled.footer`
    padding: 1rem;
    background: #f2ac30;
    /* margin-top: 3rem; */
    box-shadow: 0 -5px 15px 0px rgba(0, 0, 0, 0.1);
`

const Inner = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`

const Logo = styled.img`
    width: 50px;
    margin: 0;
    padding: 0;

    @media (min-width: 1240px) {
        transform: translateX(16px);
    }
`

const Text = styled.p`
    font-size: 14px;
    margin: 0;
`
