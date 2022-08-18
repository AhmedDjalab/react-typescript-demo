import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


export default function Header() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand> Typescript - Bootstrap - React  Demo </Navbar.Brand>
            </Container>
        </Navbar>
    )
}