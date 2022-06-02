import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';
function Home() {
    return (
        <Container>
            <Title>
                <h4>Hi, my name is </h4>
                <h1>Antonio Jenkins</h1>
                <h2>I am a Frontend Developer</h2>
                <p>
                    I'm a software engineer specializing in building exceptional
                    digital experience. Currently focused on the frontend
                    development.
                </p>
                <Resume>Download Resume</Resume>
            </Title>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

const Title = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    h4 {
        color: var(--color__primary);
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
