import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Col, Button, CardGroup, Row} from 'react-bootstrap';


const cardInfo = [
    {
        image: "s1.png",
        name: "Mike",
        gpa: 3.8
    },
    {
        image:
            "s2.png",
        name: "Manal",
        gpa: 3.6
    },
    {
        image:
            "s3.png",
        name: "Moe",
        gpa: 3.2
    },
    {
        image:
            "s4.png",
        name: "Mary",
        gpa: 2.6
    }
];

function Home() {
    return (
        <div>
            <Row>
            {cardInfo.map(function (student) {
                return (
                    <Col className="col-3">
                        <Col sm="10" col-lg="3">
                                <Card className="card" key={student.name}>
                                    <Card.Img variant="top" src={require('../Pics/'+student.image)}/>
                                    <Card.Body>
                                        <Card.Title>Name : {student.name}</Card.Title>
                                        <Card.Text>GPA : {student.gpa}</Card.Text>
                                    </Card.Body>
                                    <Button variant="primary">Grade</Button>
                                </Card>
                            </Col>
                    </Col>
                );
            })}
            </Row>
        </div>
    );
}

export default Home;