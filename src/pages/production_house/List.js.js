import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Listing() {
    const fakeData = [
        { id: 1, name: "Aishwarya Rai Bacchan", email: "john.doe@example.com", age: 28, image: "./assets/images/aish.jpg" },
        { id: 2, name: "Ajay Devgan", email: "jane.smith@example.com", age: 34, image: "./assets/images/ajay.jpg" },
        { id: 3, name: "Alia Bhatt", email: "alice.johnson@example.com", age: 25, image: "./assets/images/alia.jpg" },
        { id: 4, name: "Juhi Chawla", email: "bob.williams@example.com", age: 30, image: "./assets/images/juhi_chawla.jpg" },
        { id: 5, name: "Kajol Devgan", email: "chris.evans@example.com", age: 40, image: "./assets/images/kajol.webp" },
        { id: 6, name: "Ravina Tandan", email: "emily.clark@example.com", age: 29, image: "./assets/images/ravina.jpg" },
    ];
    const navigate = useNavigate();

    const visibleCardLimit = 4;

    return (
        <Container className="px-0">
            <div >
                <div className="d-flex justify-content-between my-3">
                    <h3 className="text-center mx-auto">PRODUCTION HOUSE</h3>
                    {fakeData.length > visibleCardLimit && (
                        <div className="text-end">
                            <Button onClick={() => navigate("/artists")} variant="primary">
                                View All
                            </Button>
                        </div>
                    )}
                </div>
                <Row className="d-flex mb-3">
                    {fakeData.slice(0, visibleCardLimit).map((user) => (
                        <Col key={user.id} lg={3} md={6} sm={12} className="mb-3">
                            <Card className="h-100">
                                <Card.Img variant="top" src={user.image} alt={user.name} height="200px" width="200px" className="p-3" />
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

export default Listing;
