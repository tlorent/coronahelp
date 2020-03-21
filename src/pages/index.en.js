import React from "react"
import Layout from "../components/layout"
import Introduction from "../components/introduction"
import styled from "styled-components"
import { graphql } from "gatsby"
import Businesses from "../components/businesses"
import Section from "../components/section"

export default ({ data }) => {
    return (
        <Layout inEnglish>
            <Introduction>
                <Text>
                    This website is for restaurants, local producers, artists,
                    cinemas, theaters, hotels. Basically all businesses that now
                    need our help. It provides a comprehensive list of known
                    initiatives, a collective space for information, and a place
                    to connect with each other.
                </Text>
                <Text>
                    Do you have or know a restaurant or cinema that needs
                    support? Or do you have a favourite café that you want to
                    help out? Then fill out{" "}
                    <FormLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfGtCtLGVmxEA_FyMWESmDseFl4nRS56_-58rNrNKGAat3TZw/viewform"
                    >
                        <span>this form</span>
                    </FormLink>
                    .
                </Text>
                <Text>Thanks for the support!</Text>
            </Introduction>

            <Section>
                <Businesses data={data} inEnglish />
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
                        descriptionEN
                        locationEN
                        categoryEN
                    }
                }
            }
        }
    }
`
