import React from "react"
import Title from "../components/title"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
    <Layout>
        <Container>
            <Title>Welcome to Corona Support</Title>
            <Text>
                This website is for restaurants, local suppliers, artists,
                cinemas and other businesses that need our help. It hopes to
                provide a comprehensive list of current initiatives and to
                become a collective space for information.
            </Text>
            <Text>
                For now it's just a{" "}
                <a href="https://drive.google.com/open?id=1RLU2PRxenq_UxPaoq59jzsK59FxtsS8w">
                    PDF
                </a>{" "}
                with information about known initiatives, but there are plans to
                improve the website.
            </Text>
            <Text>
                If you know a restaurant, a local supplier, a favourite café or
                a band that needs support and you want them to be featured on
                this website, please go to the{" "}
                <Link to="/contribute">contribute page</Link> and fill in the
                form. We will then update the PDF.
            </Text>
            <Text>Thank you for your support!</Text>
        </Container>
    </Layout>
)

const Container = styled.div`
    max-width: 30rem;
`

const Text = styled.p``
