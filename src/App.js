import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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
            <Wrap>
                <Home />
            </Wrap>
            <Wrap>
                <About />
            </Wrap>
            <Wrap>
                <Projects />
            </Wrap>
            <Wrap>
                <Contact />
            </Wrap>
            <LeftSocial>
                <h4>tonioreign@gmail.com</h4>
                <span></span>
            </LeftSocial>
            <Footer />
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    background: var(--color__bg);
`;

const RightSocial = styled.div`
    position: fixed;
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
    position: fixed;
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
        font-size: var(--font__sm);
        letter-spacing: 1.7;
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

const Wrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    width: 75vw;
`;
