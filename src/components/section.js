import React from "react"
import styled from "styled-components"
import { Element } from "react-scroll"
import { useObserver } from "../hooks/useObserver"

export default ({ children, name }) => {
    const [isVisible, ref] = useObserver();

    return (
        <Element name={name}>
            <Inner ref={ref} isVisible={isVisible}>
                {children}
            </Inner>
        </Element>
    )
}

const Inner = styled.section`
    max-width: 60rem;
    margin: 0 auto;
    padding: 1rem;

    transition: opacity 0.3s ease-out;

    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`
