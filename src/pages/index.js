import React from "react"
import Title from "../components/title"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"

export default ({ data }) => {
    return (
        <Layout>
            <Intro>
                <Container>
                    <StyledTitle>{data.site.siteMetadata.title}</StyledTitle>
                    <Text>
                        Deze website is voor restaurants, lokale producenten,
                        artiesten, bioscopen, theaters, hotels. Kortom, alle
                        ondernemingen en bedrijven die onze hulp nodig hebben.
                        Het doel is om een uitgebreide lijst samen te stellen
                        met opgezette initiatieven, een een collectieve plek te
                        worden voor informatie, en elkaar te verbinden.
                    </Text>
                    <Text>
                        Heb jij of ken jij een restaurant of filmtheater die
                        steun nodig heeft? Of heb je een favoriet café dat uit
                        de brand geholpen moet worden? Wil je graag dat het op
                        de website komt? Vul dan{" "}
                        <FormLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfGtCtLGVmxEA_FyMWESmDseFl4nRS56_-58rNrNKGAat3TZw/viewform"
                        >
                            <span>hier</span>
                        </FormLink>{" "}
                        het formulier in.
                    </Text>
                    <Text>Bedankt voor de steun!</Text>
                </Container>
            </Intro>

            <Businesses>
                <Title>Ondernemingen</Title>
                <Text>
                    <span>
                        {data.allMarkdownRemark.totalCount} ondernemingen
                    </span>
                </Text>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3
                            style={{
                                borderBottom: "4px solid #f2ac30",
                                width: "fit-content",
                                paddingBottom: "4px",
                            }}
                        >
                            <BusinessLink href={node.frontmatter.url}>
                                {node.frontmatter.title}
                            </BusinessLink>
                        </h3>
                        <Text>{node.excerpt}</Text>
                    </div>
                ))}
            </Businesses>
        </Layout>
    )
}

const Container = styled.div`
    max-width: 40rem;
    margin: 0 auto;
    padding: 1rem;
`

const StyledTitle = styled.h1`
    color: #fff;
    margin-bottom: 1.6rem;
`

const Intro = styled.section`
    position: relative;
    color: #fff;
    /* padding: 1rem; */

    ::before {
        background: url("https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
            no-repeat center center;
        background-size: cover;
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

const Businesses = styled.section`
    max-width: 40rem;
    margin: 0 auto;
    padding: 1rem;
`

const BusinessLink = styled.a`
    color: #f2ac30;
`;

const FormLink = styled.a`
    color: #fff;
    border-bottom: 3px solid #fff;
`;

const Text = styled.p`
    > span {
        font-style: italic;
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
                    }
                    excerpt
                }
            }
        }
    }
`
