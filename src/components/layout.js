import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import logo from "../static/images/logo.png"
import Footer from "../components/footer"

const GlobalStyle = createGlobalStyle`
    body {
        border-top: 10px solid #F2AC30;
        box-sizing: border-box;
    }

    a {
        background-image: none;
        text-shadow: none;
    }

    p {
        line-height: 2rem;
    }
`

const ListLink = ({ to, children }) => (
    <li>
        <StyledLink
            to={to}
            activeStyle={{ color: "#000", borderBottom: "1px solid #000" }}
        >
            {children}
        </StyledLink>
    </li>
)

export default ({ children }) => (
    <>
        <GlobalStyle />
        <Header>
            <Inner>
                <Logo src={logo} alt="Local Corona Support logo" />
                <Navigation>
                    <ListLink to="/">NL</ListLink>
                    <ListLink to="/en">EN</ListLink>
                </Navigation>
            </Inner>
        </Header>
        {children}
        <Footer />
    </>
)

const Header = styled.header`
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    padding-bottom: 0;
    position: sticky;
    top: 0;
    z-index: 2;
    background: #fff;
`

const Inner = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navigation = styled.ul`
    list-style: none;
    display: flex;
    margin-bottom: 8px;
    justify-content: space-between;
`

const StyledLink = styled(Link)`
    background-image: none;
    color: #f2ac30;
    transition: color 0.3s ease;
    margin-left: 1rem;

    :hover {
        color: #000;
    }
`

const Logo = styled.img`
    width: 100px;
    margin: 0;
    padding: 0;
    transform: translateY(-8px);

    @media (min-width: 1240px) {
        transform: translate(16px, -8px);
    }
`
