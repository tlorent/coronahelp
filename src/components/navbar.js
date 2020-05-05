import React, { useState } from "react"
import styled from "styled-components"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import logo from "../static/images/logo.png"
import { IntlContextConsumer, changeLocale, FormattedMessage } from "gatsby-plugin-intl"
import { useOnScroll } from '../hooks/useOnScroll'

const languageName = {
    en: "EN",
    nl: "NL",
}

const ScrollToLink = ({ to, children }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <li>
            <StyledScrollLink
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setIsActive(!isActive)}
                onSetInactive={() => setIsActive(!isActive)}
                isActive={isActive}
            >
                {children}
            </StyledScrollLink>
        </li>
    )
}

export default () => {
    const [open, setOpen] = useState(false)
    const isVisible = useOnScroll(open)

    return (
        <Navigation open={open} isVisible={isVisible}>
            <Content>
                <Logo
                    src={logo}
                    alt="Local Corona Support logo"
                    onClick={() => scroll.scrollToTop()}
                />
                <Items>
                    <NavItems open={open}>
                        <ScrollToLink to="businesses">
                            <FormattedMessage defaultMessage="Ondernemingen" id="businesses" />
                        </ScrollToLink>
                        <Languages open={open}>
                            <IntlContextConsumer>
                                {({ languages, language: currentLocale }) =>
                                    languages.map(language => (
                                        <StyledLink
                                            currentLocale={currentLocale}
                                            language={language}
                                            key={language}
                                            onClick={() =>
                                                changeLocale(language)
                                            }
                                        >
                                            {languageName[language]}
                                        </StyledLink>
                                    ))
                                }
                            </IntlContextConsumer>
                        </Languages>
                    </NavItems>

                    <MobileMenu onClick={() => setOpen(!open)}>
                        <Hamburger open={open} />
                    </MobileMenu>
                </Items>
            </Content>
        </Navigation>
    )
}

const Navigation = styled.nav`
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    padding-bottom: 0;
    position: sticky;
    top: ${({ isVisible, open }) => !open ? (isVisible ? "0" : "-100px") : "0"};
    z-index: 2;
    background-color: #fff;

    transition: min-height 0.6s ease, top 0.3s ease;
    min-height: ${({ open }) => (open ? "100vh" : "4rem")};

    @media (min-width: 768px) {
        max-height: 100%;
    }
`

const Content = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Items = styled.div`
    display: flex;
    justify-content: space-between;
`

const NavItems = styled.ul`
    cursor: pointer;
    list-style: none;
    margin: 0;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;

    ${({ open }) =>
        open &&
        `
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
        font-size: 1.5rem;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (min-width: 768px) {
            font-size: 2rem;
        }
    `}
`

const StyledLink = styled.a`
    background-image: none;
    color: #f2ac30;
    transition: color 0.3s ease;
    margin: 0;
    position: relative;

    :first-of-type {
        margin-right: 1rem;

        :after {
            content: "";
            display: block;
            border: 1px solid #000;
            width: 13px;
            position: absolute;
            bottom: 50%;
            right: -50%;
        }
    }

    :nth-of-type(2) {
        margin-left: 0.6rem;
    }

    :hover {
        color: #000;
    }

    ${({ currentLocale, language }) =>
        currentLocale === language &&
        `
        color: #000;
        border-bottom: 1px solid #000;
    `}
`

const StyledScrollLink = styled(ScrollLink)`
    cursor: pointer;
    background-image: none;
    color: ${({ isActive }) => (isActive ? "#000" : "#f2ac30")};
    transition: color 0.3s ease;
    margin-left: 1rem;

    :hover {
        color: #000;
    }
`

const Logo = styled.img`
    cursor: pointer;
    width: 100px;
    margin: 0;
    padding: 0;
    transform: translateY(-8px);

    @media (min-width: 1240px) {
        transform: translate(16px, -8px);
    }
`

const Languages = styled.div`
    justify-content: center;
    display: ${({ open }) => (open ? "flex" : "none")};
`

const Hamburger = styled.span`
    width: 1rem;
    background-color: #fff;
    height: ${({ open }) => (open ? "0" : "2px")};

    position: relative;

    :before {
        background-color: #fff;
        content: "";
        height: 2px;
        width: 1rem;
        position: absolute;
        top: -6px;
        left: 0;

        transition: top 0.2s ease, transform 0.2s ease;

        ${({ open }) =>
            open &&
            `
            top: -2px;
            transform: rotate(135deg);
        `}
    }

    :after {
        background-color: #fff;
        content: "";
        height: 2px;
        width: 1rem;
        position: absolute;
        bottom: -6px;
        left: 0;

        transition: bottom 0.2s ease, transform 0.2s ease;

        ${({ open }) =>
            open &&
            `
            transform: rotate(-135deg);
            bottom: 0;
        `}
    }
`

const MobileMenu = styled.div`
    background-color: #000;
    border-radius: 50%;
    width: 2.3rem;
    height: 2.3rem;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0.8rem;

    transform: translateY(-8px);

    transition: background-color 0.2s ease-in 0.1s,
        border-radius 0.2s ease-in 0.1s;

    :hover {
        background-color: #f2ac30;
        border-radius: initial;
    }
`
