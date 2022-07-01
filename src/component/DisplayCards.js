import React from "react";
import {Card, Col, Container} from "react-bootstrap";

function DisplayCards({cards}) {

    return (<div>
            return (
            <div>
                <Container className='p-4'>
                    <Col md="4">
                        <Card>
                            <Card.Img variant="top" src= {require(cards.image)} />
                            <Card.Body>
                                <Card.Title>Name : {cards.name}</Card.Title>
                                <Card.Text>
                                    GPA : {cards.gpa}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </div>
            );
        </div>
    )
}

export default DisplayCards