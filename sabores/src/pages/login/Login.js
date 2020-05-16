import React, { Component } from 'react';
import logoSabores from '../../assets/logoSabores.png';
import {Image,Container,Row,Col,Form,FormGroup,Button} from 'react-bootstrap';


export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Container fluid>
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                                <Image src={logoSabores} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                                <Form>
                                    <FormGroup>
                                        <Form.Label>Nome de Utilizador</Form.Label>
                                        <Form.Control type="email" id="form-control" size="sm"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" />
                                    </FormGroup>
                                    <Button variant="btn btn-success" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}