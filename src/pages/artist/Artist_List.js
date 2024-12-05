import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BackButton } from '../../components/button/ViewAll_Toogle';
import { fakeData } from '../../components/data/FakeActorData';
function ArtistList() {
    const navigate = useNavigate();
    const handlePageNavigation = () => {
        navigate('/');
    };
   
    const handleCardClick = () => {
        navigate('/artistdetails');
    };

    return (
        <Container className="px-3 px-lg-0">
            <div>
                <div className="d-flex justify-content-between my-3">
                    <div className="text-end">
                        <BackButton
                            initialText="Back"
                            variant="primary"
                            onClick={handlePageNavigation}
                        />
                    </div>
                </div>
                <Row className="mt-4">
                    {fakeData.map((user) => (
                        <Col key={user.id} lg={3} md={6} sm={12} className="mb-3">
                            <Card onClick={() => handleCardClick(user.id)} style={{ cursor: 'pointer' }}>
                                <Card.Img variant="top" src={user.image} alt={user.name} height="200px" width="200px"/>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>Email: {user.email}</Card.Text>
                                    <Card.Text>Age: {user.age}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default ArtistList;
