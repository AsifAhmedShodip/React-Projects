import React from 'react'
import Person from './Person'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function PersonList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30
        },
        {
            id: 2,
            name: 'Clark',
            age: 31
        },
        {
            id: 3,
            name: 'Diana',
            age: 32
        }
    ]

    const personArray = persons.map(person => <Person key={person.id} per={person} ></Person>)

    return (
        <Container>
            <Jumbotron class="container-fluid">
                {personArray}
            </Jumbotron>
        </Container>
    )
}

export default PersonList
