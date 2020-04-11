import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"

export default ({ children, name }) => (
    <Element name={name}>
        <Inner>{children}</Inner>
    </Element>
)

const Inner = styled.section`
    max-width: 60rem;
    margin: 0 auto;
    padding: 1rem;
`
