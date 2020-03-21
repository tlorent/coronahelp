import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../components/section"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return (
        <Intro>
            <Section>
                <StyledTitle>{data.site.siteMetadata.title}</StyledTitle>
                {children}
            </Section>
        </Intro>
    )
}

const Intro = styled.section`
    position: relative;
    color: #fff;

    ::before {
        background: url("https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
            no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        z-index: -2;
    }

    ::after {
        opacity: 0.9;
        background: #f2ac30;
        background-size: cover;
        background-attachment: fixed;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        z-index: -2;
    }
`

const StyledTitle = styled.h1`
    color: #fff;
    margin-bottom: 1.6rem;
`
