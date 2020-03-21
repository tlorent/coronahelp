import React from "react"
import styled from "styled-components"

export default ({ children }) => <Inner>{children}</Inner>

const Inner = styled.section`
    max-width: 60rem;
    margin: 0 auto;
    padding: 1rem;
`
