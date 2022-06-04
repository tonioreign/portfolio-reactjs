import React from 'react';
import styled from 'styled-components';
import ContactsIcon from '@mui/icons-material/Contacts';

function Contact() {
    return (
        <Wrapper id="contact">
            <Title>
                {' '}
                <span></span>
                <ContactsIcon
                    style={{
                        fontSize: 'var(--font__md)',
                        color: 'var(--color__primary)',
                    }}
                />
                <h2>What's Next?</h2>
                <span></span>
            </Title>
            <h2>Get In Touch</h2>
        </Wrapper>
    );
}

export default Contact;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7.5vh;

    h2 {
        font-size: var(--font__md);
        color: var(--color__white);
    }
`;

const Title = styled.div`
    padding-top: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 7.5vh;

    h2 {
        font-size: var(--font__sm);
        color: var(--color__primary);
    }

    span {
        width: 100px;
        height: 1px;
        background: var(--color__white-variant);
    }
`;
