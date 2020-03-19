import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

const GlobalStyle = createGlobalStyle`
    body {
        border-top: 10px solid #F2AC30;
    }

    a {
        color: #F2AC30;
        background-image: none;
    }
`

const ListLink = ({ to, children }) => (
    <li>
        <StyledLink to={to} activeStyle={{ color: "#F2AC30" }}>
            {children}
        </StyledLink>
    </li>
)

export default ({ children }) => (
    <Container>
        <GlobalStyle />
        <Header>
            <Link
                to="/"
                style={{ textShadow: "none", backgroundImage: "none" }}
            >
                <HeaderLink style={{ display: "inline" }}>
                    CORONA SUPPORT
                </HeaderLink>
            </Link>
            <Navigation>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/contribute">Contribute</ListLink>
            </Navigation>
        </Header>
        {children}
    </Container>
)

const Container = styled.div`
    margin: 3rem auto;
    max-width: 50rem;
    padding: 0 1rem;
`

const Header = styled.header`
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
`

const HeaderLink = styled.h4`
    color: #F2AC30;
    border-bottom: 4px solid #F2AC30;
    padding-bottom: 3px;
`

const Navigation = styled.ul`
    list-style: none;
    display: flex;
`

const StyledLink = styled(Link)`
    margin-right: 1rem;
    background-image: none;

    color: #000;
    transition: color 0.3s ease;

    :hover {
        color: #F2AC30;
    }
`
