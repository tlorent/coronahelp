import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import Introduction from "../components/introduction"
import Businesses from "../components/businesses"
import Section from "../components/section"

export default ({ data }) => {
    return (
        <Layout>
            <Introduction>
                <Text>
                    Deze website is voor restaurants, lokale producenten,
                    artiesten, bioscopen, theaters, hotels. Kortom, alle
                    ondernemingen en bedrijven die onze hulp nodig hebben. Het
                    doel is om een uitgebreide lijst samen te stellen met
                    opgezette initiatieven, een een collectieve plek te worden
                    voor informatie, en elkaar te verbinden.
                </Text>
                <Text>
                    Heb jij of ken jij een restaurant of filmtheater die steun
                    nodig heeft? Of heb je een favoriet café dat uit de brand
                    geholpen moet worden? Vul dan{" "}
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
            </Introduction>

            <Section>
                <Businesses data={data} />
            </Section>
        </Layout>
    )
}

const FormLink = styled.a`
    color: #fff;
    border-bottom: 3px solid #fff;
`

const Text = styled.p`
    font-size: 0.9rem;

    > span {
        font-style: italic;
    }
`

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        url
                        descriptionNL
                        locationNL
                        categoryNL
                    }
                }
            }
        }
    }
`
