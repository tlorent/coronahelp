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
    padding-bottom: 120px;

    ::after {
        opacity: 0.8;
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
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

        @media (min-width: 480px) {
            clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
        }

        @media (min-width: 768px) {
            clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
        }

        @media (min-width: 1024px) {
            clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
        }
    }
`

const StyledTitle = styled.h1`
    color: #fff;
    margin-bottom: 1.6rem;
`
