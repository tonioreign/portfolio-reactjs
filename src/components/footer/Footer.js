import React from 'react';
import styled from 'styled-components';

function Footer() {
    return <Container>Designed & Built by Antonio Jenkins &copy;</Container>;
}

export default Footer;

const Container = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    font-size: var(--font__sm);
    color: var(--color__white-variant);
    padding-bottom: 2.5vh;
    cursor: pointer;

    &:hover {
        color: var(--color__primary);
    }
`;
