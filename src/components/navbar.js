import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import logo from "../static/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const ListLink = ({ to, children }) => (
    <li>
        <StyledLink
            to={to}
            activeStyle={{ color: "#000", borderBottom: "1px solid #000" }}
        >
            {children}
        </StyledLink>
    </li>
)

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

export default ({ inEnglish }) => {
    const [open, setOpen] = useState(false)

    return (
        <Navigation open={open}>
            <Content>
                <Logo
                    src={logo}
                    alt="Local Corona Support logo"
                    onClick={() => scroll.scrollToTop()}
                />
                <Items open={open}>
                    <ScrollToLink to="businesses">
                        {inEnglish ? "Businesses" : "Ondernemingen"}
                    </ScrollToLink>
                    <ListLink to="/">NL</ListLink>
                    <ListLink to="/en">EN</ListLink>
                </Items>
                <HamburgerIcon
                    icon={faBars}
                    onClick={() => setOpen(!open)}
                    open={open}
                />
                <CloseIcon
                    icon={faTimes}
                    onClick={() => setOpen(!open)}
                    open={open}
                />
            </Content>
        </Navigation>
    )
}

const Navigation = styled.nav`
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    padding-bottom: 0;
    position: sticky;
    top: 0;
    z-index: 2;
    background: #fff;

    transition: min-height 0.6s ease;
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

const Items = styled.ul`
    cursor: pointer;
    list-style: none;
    margin: 0;
    margin-bottom: 8px;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;

    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

    /* opacity: ${({ open }) => (open ? "1" : "0")}; */
    display: ${({ open }) => (open ? "block" : "none")};

    @media (min-width: 768px) {
        flex-direction: row;
        transform: translate(0);
        position: static;
        /* opacity: 1; */
        display: flex;
    }
`

const StyledLink = styled(Link)`
    background-image: none;
    color: #f2ac30;
    transition: color 0.3s ease;
    margin-left: 1rem;

    :hover {
        color: #000;
    }
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

const HamburgerIcon = styled(FontAwesomeIcon)`
    display: block;
    transform: translateY(-8px);

    display: ${({ open }) => (open ? "none" : "block")};

    @media (min-width: 768px) {
        display: none;
        transform: translate(16px, -8px);
    }
`

const CloseIcon = styled(FontAwesomeIcon)`
    display: block;
    transform: translateY(-8px);

    display: ${({ open }) => (open ? "block" : "none")};

    @media (min-width: 768px) {
        display: none;
        transform: translate(16px, -8px);
    }
`
