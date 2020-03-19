import React from "react"
import Title from "../components/title"
import Layout from "../components/layout"
import styled from "styled-components"

export default () => (
    <Layout>
        <Container>
            <Title>Want to contribute?</Title>
            <p>
                Thank you for your interest and helping out. Please fill out{" "}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGtCtLGVmxEA_FyMWESmDseFl4nRS56_-58rNrNKGAat3TZw/viewform">
                    this form
                </a>
                .
            </p>
        </Container>
    </Layout>
)

const Container = styled.div`
    max-width: 30rem;
`
