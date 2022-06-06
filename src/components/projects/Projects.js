import React from 'react';
import styled from 'styled-components';
import WebIcon from '@mui/icons-material/Web';
import { Fade } from 'react-reveal';
import LeftProject from './LeftProject';
import RightProject from './RightProject';

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
            <LeftProject
                title="Tesla Clone"
                description=" A tesla clone improved on functionality and
                            smoothness such as the navbar transition and
                            scrolling."
            />
            <RightProject
                title="Tesla Clone"
                description=" A tesla clone improved on functionality and
                            smoothness such as the navbar transition and
                            scrolling."
            />
            <LeftProject
                title="Tesla Clone"
                description=" A tesla clone improved on functionality and
                            smoothness such as the navbar transition and
                            scrolling."
            />
        </Containers>
    );
}

export default Projects;

const Containers = styled.div`
    width: 100%;
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
