import React from "react"
import Title from "../components/title"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
    <Layout>
        <Container>
            <Title>Welkom bij Corona Support</Title>
            <Text>
                Deze website is voor restaurants, lokale producenten, artiesten,
                bioscopen, theaters, hotels. Kortom, alle ondernemingen en
                bedrijven die onze hulp nodig hebben. Het doel is om een
                uitgebreide lijst samen te stellen met opgezette initiatieven,
                een een colllectieve plek te worden voor informatie, en elkaar
                te verbinden.
            </Text>
            <Text>
                Voor nu is het simpelweg een{" "}
                <a
                    target="_blank"
                    rel="noopener"
                    href="https://drive.google.com/open?id=1RLU2PRxenq_UxPaoq59jzsK59FxtsS8w"
                >
                    PDF (Nederlands, Engels)
                </a>{" "}
                met informatie over bekende initiatieven.
            </Text>
            <Text>
                Heb jij of ken jij een restaurant of filmtheater die steun nodig
                heeft? Of heb je een favoriet café dat uit de brand geholpen
                moet worden? Wil je graag dat het op de website komt? Vul dan{" "}
                <a
                    target="_blank"
                    rel="noopener"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfGtCtLGVmxEA_FyMWESmDseFl4nRS56_-58rNrNKGAat3TZw/viewform"
                >
                    hier
                </a>{" "}
                het formulier in.
            </Text>
            <Text>Bedankt voor je steun!</Text>
        </Container>
    </Layout>
)

const Container = styled.div`
    max-width: 30rem;
`

const Text = styled.p``
