import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function App() {
    return (
        <Container>
            <RightSocial>
                <GitHubIcon className="social__icon" />
                <LinkedInIcon className="social__icon" />
                <TwitterIcon className="social__icon" />
                <InstagramIcon className="social__icon" />
                <YouTubeIcon className="social__icon" />
                <span></span>
            </RightSocial>
            <Navbar />
            <Home />
            <LeftSocial>
                <h4>tonioreign@gmail.com</h4>
                <span></span>
            </LeftSocial>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--color__bg);
    position: relative;
`;

const RightSocial = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 0 40px;

    span {
        width: 2px;
        height: 90px;
        background: var(--color__white-variant);
    }
`;

const LeftSocial = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    color: var(--color__white-variant);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 0 40px;
    h4 {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        cursor: pointer;
        transition: all 125ms ease-in;
        &:hover {
            color: var(--color__primary);
            transform: scale(1.05);
        }
    }
    span {
        width: 2px;
        height: 90px;
        background: var(--color__white-variant);
    }
`;
