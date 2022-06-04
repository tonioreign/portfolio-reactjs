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
            <ContactMe>
                <a>CONTACT ME</a>
            </ContactMe>
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
    gap: 3rem;
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

const ContactMe = styled.div`
    // display: inline-block;
    // color: var(--color__white-variant);
    // font-size: var(--font__sm);
    // margin-top: 4rem;
    // position: relative;
    // padding: 12px 16px;
    // border: 1px solid var(--color__primary);
    // border-radius: 6px;
    // cursor: pointer;
    // overflow: hidden;

    a {
        display: inline-block;
        color: var(--color__primary);
        font-size: var(--font__sm);
        margin-top: 4rem;
        position: relative;
        padding: 14px 24px;
        border: 1px solid var(--color__primary);
        border-radius: 4px;
        cursor: pointer;
        z-index: 2;
        overflow: hidden;
    }

    a::before,
    a::after {
        content: '';
        position: absolute;
        top: 0;
        width: 50%;
        height: 100%;
        background-color: var(--color__primary);
        z-index: -1;
        transform: scaleX(0);
        transition: transform 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    a::before {
        left: 0;
        transform-origin: left;
    }
    a::after {
        right: 0;
        transform-origin: right;
    }

    a:hover::before,
    a:hover::after {
        transform: scaleX(1);
    }

    a:hover {
        color: var(--color__secondary);
        transition-delay: 500ms;
    }
`;
