import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
    return (
        <Container>
            <Navbar />
            <Home />
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--color__bg);
`;
