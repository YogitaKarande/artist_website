import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BackButton } from "../../components/button/ViewAll_Toogle";
import { fakeData } from "../../components/data/FakeActorData";

function Gallary() {
    const navigate = useNavigate()

    const handleBackNavigation = () => {
        navigate('/artistdetails')
    }

    const handleImageClick = () => {

    }
    return (
        <Container className="px-0 mb-3">
            <div>
                <div className="d-flex justify-content-between my-3">
                    {/* <h3 className="text-center mx-auto">GALLARY</h3> */}
                    <div className="text-end">
                        <BackButton
                            initialText="Back"
                            variant="primary"
                            onClick={handleBackNavigation}
                        />
                    </div>
                </div>
            </div>
            <Row className="my-4">
                {fakeData.map((item) => (
                    <Col lg={3} md={6} sm={12} className="mb-3">
                        <Card style={{ width: '100%', height: '200px' }} className="gallary-image">
                            <div style={{ height: '100%' }}>
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    alt={item.name}
                                    onClick={handleImageClick}
                                    style={{
                                        cursor: 'pointer',
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center center'
                                    }}
                                />
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Gallary