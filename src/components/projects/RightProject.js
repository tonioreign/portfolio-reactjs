import React from 'react';
import styled from 'styled-components';
import WebIcon from '@mui/icons-material/Web';
import { Fade } from 'react-reveal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import './Project.css';

function RightProject({ video, title, description }) {
    return (
        <ProjectContainer>
            <ProjectWrap>
                <LeftWrap></LeftWrap>
                    <video autoPlay loop muted>
                        <source
                            src="./mp4/TeslaImpro__Video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </LeftWrap>
                <RightWrap>
                    <ProjectDescription>
                        <h4>Featured Project</h4>
                        <h2>{title}</h2>
                        <p>{description} </p>
                        <Techs>
                            <span>React</span>
                            <span>Styled Components</span>
                            <span>React Reveal</span>
                        </Techs>
                        <Socials>
                            <GitHubIcon
                                className="iconProject"
                                style={{
                                    fontSize: 'var(--font__md)',
                                    color: 'var(--color__white-variant)',
                                }}
                            />
                            <LinkIcon
                                className="iconProject"
                                style={{
                                    fontSize: 'calc(var(--font__md) + 5px)',
                                    color: 'var(--color__white-variant)',
                                }}
                            />
                        </Socials>
                    </ProjectDescription>
                </RightWrap>
            </ProjectWrap>
        </ProjectContainer>
    );
}

export default RightProject;

const ProjectContainer = styled.div`
    height: 60vh;
    width: 100%;
`;

const ProjectWrap = styled.div`
    display: flex;
    align-items: center;
`;
const LeftWrap = styled.div`
    video {
        cursor: pointer;
    }
`;
const RightWrap = styled.div`
    margin-left: -10rem;
    text-align: right;
    h4 {
        color: var(--color__primary);
        font-size: var(--font__sm);
        margin-bottom: -1.5rem;
    }

    h2 {
        color: var(--color__white);
        font-size: var(--font__md);
    }

    p {
        color: var(--color__white-variant);
        font-size: var(--font__sm);
        background: var(--color__secondary);
        padding: 12px 24px;
        border-radius: 4px;
    }
`;

const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Techs = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    span {
        color: var(--color__white-variant);
        font-size: var(--font__sm);
    }
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2rem;
`;
