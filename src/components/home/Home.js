import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

function Home() {
    return (
        <Container>
            <Fade>
                <Title bottom cascade>
                    <h4>Hi, my name is </h4>
                    <h1>Antonio Jenkins</h1>
                    <h2>I am a Frontend Developer</h2>
                    <p>
                        I'm a software engineer specializing in building
                        exceptional <br />
                        digital experience. Currently focused on the frontend
                        development.
                    </p>
                    <Resume>Download Resume</Resume>
                </Title>
            </Fade>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    margin-top: 50px;
    display: flex;
    // align-items: center;
    gap: 15px;
    max-width: 800px;
    flex-direction: column;
    h4 {
        color: var(--color__primary);
        font-size: var(--font__sm);
    }
    h1 {
        color: var(--color__white);
        font-size: 52px;
    }
    h2 {
        color: var(--color__white-variant);
        font-size: 48px;
    }
    p {
        color: var(--color__white-variant);
        font-size: 16px;
    }

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        width: max-content;
        margin-left: 75px;
        h1 {
            color: var(--color__white);
            font-size: var(--font__lg);
        }
        h2 {
            color: var(--color__white-variant);
            font-size: var(--font__md);
        }
        p {
            display: none;
        }
    }
`;
const Resume = styled.button`
    margin-top: 25px;
    width: 200px;
    height: 50px;
    background: none;
    border: 2px solid var(--color__primary);
    border-radius: 4px;
    color: var(--color__primary);
    cursor: pointer;
    transition: background 250ms ease-in;
    &:hover {
        background: var(--color__primary-variant);
    }
`;
