import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import Title from "../components/title"

export default ({ inEnglish, data }) => (
    <>
        <Title>{inEnglish ? "Businesses" : "Ondernemingen"}</Title>
        <Text>
            <span>
                {data.allMarkdownRemark.totalCount}{" "}
                {inEnglish ? "businesses" : "ondernemingen"}
            </span>
        </Text>
        <BusinessGrid>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <>
                    <Business key={node.id}>
                        <BusinessName>
                            <BusinessLink href={node.frontmatter.url} rel="noreferrer" target="_blank">
                                {node.frontmatter.title}
                            </BusinessLink>
                        </BusinessName>
                        <Location>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                            {inEnglish ? node.frontmatter.locationEN : node.frontmatter.locationNL} |{" "}
                            {inEnglish
                                ? node.frontmatter.categoryEN
                                : node.frontmatter.categoryNL}
                        </Location>
                        <Text>
                            {inEnglish
                                ? node.frontmatter.descriptionEN
                                : node.frontmatter.descriptionNL}
                        </Text>
                    </Business>
                </>
            ))}
        </BusinessGrid>
    </>
)

const BusinessGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1);
    grid-column-gap: 5rem;

    @media (min-width: 688px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const Business = styled.div``

const BusinessName = styled.h3`
    margin-top: 0.6rem;
    font-size: 20px;
    border-bottom: 4px solid #f2ac30;
    width: fit-content;
    padding-bottom: 4px;
`

const BusinessLink = styled.a`
    color: #f2ac30;
`

const Text = styled.p`
    font-size: 0.9rem;

    > span {
        font-style: italic;
    }
`

const Location = styled.p`
    font-size: 16px;
    margin-bottom: 0.4rem;
    color: #bcc3ce;
`
