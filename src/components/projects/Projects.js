import { Container } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import WebIcon from '@mui/icons-material/Web';
import { Fade } from 'react-reveal';

function Projects() {
    return (
        <Containers id="projects">
            <Fade bottom cascade>
                <Title>
                    {' '}
                    <span></span>
                    <WebIcon
                        style={{
                            fontSize: 'var(--font__md)',
                            color: 'var(--color__primary)',
                        }}
                    />
                    <h2>Things I've Built</h2>
                    <span></span>
                </Title>
            </Fade>
            <ProjectContainer></ProjectContainer>
        </Containers>
    );
}

export default Projects;

const Containers = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 7.5vh;
    padding-top: 7.5vh;
`;

const Title = styled.div`
    padding-top: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 7.5vh;

    h2 {
        font-size: var(--font__md);
        color: var(--color__white);
    }

    span {
        width: 100px;
        height: 1px;
        background: var(--color__white-variant);
    }
`;

const ProjectContainer = styled.div``;
