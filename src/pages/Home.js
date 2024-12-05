import { Card, Col, Container, Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from 'swiper/react';
import { ViewAllButton } from '../components/button/ViewAll_Toogle';
import { fakeData, FakeProductionData } from '../components/data/FakeActorData';
import ReusableSwiper from '../plugin/Swipper';
function Home() {
    const navigate = useNavigate();
    const visibleCardLimit = 5;
    const handleCardClick = () => {
        navigate('artistdetails');
    };

    const handlePageNavigation = () => {
        navigate('/artistlist');
    };

    return (
        <Container fluid className='px-0 mb-5'>
            <Col className='position-relative'>
                <Image src="./assets/images/film_industry.avif" className='rectangle' width="100%" height="700px" />
                <div className="quote-overlay">
                    <p>“Filmmaking can give you everything, but at the same time, it can take everything from you.”</p>
                    <p className="author">- Alejandro Gonzalez Inarritu</p>
                </div>
            </Col>
            <Container fluid>
                <div className="d-flex my-3">
                    <h3 className="mx-auto">ARTIST</h3>
                    {fakeData.length > visibleCardLimit && (
                        <div className="view-button">
                            <ViewAllButton
                                initialText="View All"
                                variant="primary"
                                onClick={handlePageNavigation}
                            />
                        </div>
                    )}
                </div>
                <div>
                    <ReusableSwiper uniqueId="artist">
                        {fakeData.map((item) => (
                            <SwiperSlide key={item.id}>
                               
                            </SwiperSlide>
                        ))}
                    </ReusableSwiper>
                </div> <Card style={{ width: '100%', height: '400px'}} className='listing' >
                                    <div style={{ height: '50%' }}>
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={item.name}
                                            onClick={() => handleCardClick(item.id)}
                                            style={{
                                                cursor: 'pointer',
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center center'
                                            }}
                                        />
                                    </div>
                                    <Card.Body style={{height:'50%'}}>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>Email: {item.email}</Card.Text>
                                        <Card.Text>Age: {item.age}</Card.Text>
                                    </Card.Body>
                                </Card>
            </Container>
            <Container fluid>
                <div className="d-flex my-3">
                    <h3 className="text-center mx-auto">PRODUCTION HOUSE</h3>
                    {FakeProductionData.length > visibleCardLimit && (
                        <div className="view-button">
                            <ViewAllButton
                                initialText="View All"
                                variant="primary"
                                onClick={handlePageNavigation}
                            />
                        </div>
                    )}
                </div>
                <div className='mt-4'>
                    <ReusableSwiper uniqueId="production">
                        {FakeProductionData.map((item) => (
                            <SwiperSlide key={item.id} >
                                <Card style={{ width: '100%', height: '400px' }}>
                                    <div style={{ height: '50%' }}>
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={item.name}
                                            onClick={() => handleCardClick(item.id)}
                                            style={{
                                                cursor: 'pointer',
                                                height: '100%',
                                                width: '100%',
                                                objectPosition: 'center center'
                                            }}
                                        />
                                    </div>
                                    <Card.Body style={{ height: '50%' }}>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>Email: {item.email}</Card.Text>
                                        <Card.Text>Age: {item.age}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </ReusableSwiper>
                </div>
            </Container>
        </Container>
    )
}

export default Home