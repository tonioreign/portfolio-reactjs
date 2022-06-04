import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WebIcon from '@mui/icons-material/Web';
import ContactsIcon from '@mui/icons-material/Contacts';

function Navbar() {
    return (
        <Nav>
            <Logo src="./img/logo.png" />
            <NavMenu>
                <Wrap>
                    <HomeIcon
                        style={{
                            color: 'var(--color__primary)',
                        }}
                    />
                    <a href="#">Home</a>
                </Wrap>
                <Wrap>
                    <InfoIcon style={{ color: 'var(--color__primary)' }} />
                    <a href="#about">About</a>
                </Wrap>
                <Wrap>
                    <WebIcon style={{ color: 'var(--color__primary)' }} />
                    <a href="#projects">Projects</a>
                </Wrap>
                <Wrap>
                    <ContactsIcon style={{ color: 'var(--color__primary)' }} />
                    <a href="#contact">Contact</a>
                </Wrap>
                <Resume>Resume</Resume>
            </NavMenu>
        </Nav>
    );
}

export default Navbar;

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px;
    height: 74px;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;
const Logo = styled.img`
    width: 74px;
    height: 74px;
    cursor: pointer;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    a {
        letter-spacing: 1.7;
        font-size: 14px;
        transition: color 250ms ease-in;
    }
`;

const Resume = styled.div`
    border: 2px solid var(--color__primary);
    padding: 8px 12px;
    border-radius: 4px;
    color: var(--color__primary);
    transition: background 250ms ease-in;
    cursor: pointer;
    &:hover {
        background: var(--color__primary-variant);
    }
`;
