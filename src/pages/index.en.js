import React from "react"
import Layout from "../components/layout"
import Introduction from "../components/introduction"
import styled from "styled-components"
import { graphql } from "gatsby"
import Businesses from "../components/businesses"
import { Helmet } from "react-helmet"
import Section from "../components/section"
import ConferenceSVG from "../components/svg/Conference"

export default ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{data.site.siteMetadata.title}</title>
            </Helmet>
            <Introduction>
                <Container>
                    <Text>
                        This website is for restaurants, local producers,
                        artists, cinemas, theaters, hotels. Basically all
                        businesses that now need our help.
                        <br />
                        <br />
                        Do you have or know a restaurant or cinema that needs
                        support? Or do you have a favourite café that you want
                        to help out?
                        <div>
                            <Button>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfGtCtLGVmxEA_FyMWESmDseFl4nRS56_-58rNrNKGAat3TZw/viewform"
                                >
                                    <span>Sign a business up!</span>
                                </a>{" "}
                            </Button>
                        </div>
                    </Text>
                    <ConferenceSVG />
                </Container>
            </Introduction>

            <Section>
                <Businesses data={data} inEnglish />
            </Section>
        </Layout>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Text = styled.p`
    font-size: 0.9rem;
    max-width: 25rem;

    > span {
        font-style: italic;
    }
`

const Button = styled.button`
    border-radius: 8px;
    border: none;
    background: #fff;
    padding: 8px 16px;
    margin-top: 32px;

    :first-of-type {
        margin-right: 16px;
    }

    > a {
        color: #f2ac30;
    }
`

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        url
                        descriptionEN
                        locationEN
                        categoryEN
                    }
                }
            }
        }
    }
`
