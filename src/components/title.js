import React from "react"
import styled from "styled-components"

export default ({ children }) => <Inner>{children}</Inner>

const Inner = styled.h1`
    margin-bottom: 0.6rem;
`
