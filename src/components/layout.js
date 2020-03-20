import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

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

export default ({ children }) => (
    <>
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
                <Button>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfGtCtLGVmxEA_FyMWESmDseFl4nRS56_-58rNrNKGAat3TZw/viewform"
                    >
                        Doe mee!
                    </a>{" "}
                </Button>
            </Navigation>
        </Header>
        {children}
    </>
)

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    padding-bottom: 0;
    position: sticky;
    top: 0;
    z-index: 2;
    background: #fff;
`

const HeaderLink = styled.h4`
    color: #f2ac30;
    border-bottom: 4px solid #f2ac30;
    padding-bottom: 3px;
`

const Navigation = styled.ul`
    list-style: none;
    display: flex;
    margin-bottom: 8px;
`

const Button = styled.button`
    border-radius: 8px;
    border: none;
    background: #f2ac30;
    color: #fff;
    padding: 8px 16px;
    transform: translateY(-4px);

    > a {
        color: #fff;
    }
`
