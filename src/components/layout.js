import React from "react"
import { createGlobalStyle } from "styled-components"
import Footer from "../components/footer"
import NavBar from "../components/navbar"

const GlobalStyle = createGlobalStyle`
    body {
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

export default ({ children, inEnglish }) => (
    <>
        <GlobalStyle />
        <NavBar inEnglish={inEnglish} />
        {children}
        <Footer />
    </>
)
