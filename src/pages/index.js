import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import Introduction from "../components/introduction"
import Businesses from "../components/businesses"
import Section from "../components/section"
import { Helmet } from "react-helmet"
import ConferenceSvg from "../components/svg/Conference"
import { FormattedMessage } from "gatsby-plugin-intl"

const Index = ({ data }) => {
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
                        <FormattedMessage
                            defaultMessage="Deze website is voor restaurants, lokale producenten,
                        artiesten, bioscopen, theaters, hotels. Kortom, alle
                        ondernemingen en bedrijven die onze hulp nodig hebben."
                            id="intro"
                        />
                        <br />
                        <br />
                        <FormattedMessage defaultMessage="Heb jij of ken jij een restaurant of filmtheater die
                        steun nodig heeft? Of heb je een favoriet café dat uit
                        de brand geholpen moet worden?" id="help" />
                        <br />
                        <Button>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfGtCtLGVmxEA_FyMWESmDseFl4nRS56_-58rNrNKGAat3TZw/viewform"
                            >
                                <FormattedMessage defaultMessage="Geef een onderneming op!" id="cta" />
                            </a>{" "}
                        </Button>
                    </Text>
                    <ConferenceSvg />
                </Container>
            </Introduction>

            <Section name="businesses">
                <Businesses data={data} />
            </Section>
        </Layout>
    )
}

export default Index

const Container = styled.div`
    display: flex;
    justify-content: space-between;
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
                        descriptionNL
                        descriptionEN
                        locationNL
                        locationEN
                        categoryNL
                        categoryEN
                    }
                }
            }
        }
    }
`
