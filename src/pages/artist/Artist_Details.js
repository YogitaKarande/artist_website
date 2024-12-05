import { useState } from "react";
import { Card, Carousel, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { SwiperSlide } from "swiper/react";
import { ViewAllButton } from "../../components/button/ViewAll_Toogle";
import { fakeData } from "../../components/data/FakeActorData";
import ReusableSwiper from "../../plugin/Swipper";

function ArtistDetails() {
    const [showAll, setShowAll] = useState(false)
    const navigate = useNavigate()
    const handlePageNavigation = () => {
        navigate('/gallary')
        setShowAll(true)
    }

    const visibleCardLimit = 4;

    const handleImageClick = () => {

    }
    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <Image src='../assets/images/alia.jpg' width="100%" height="700px" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src='../assets/images/alia.jpg' width="100%" height="700px" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src='../assets/images/alia.jpg' width="100%" height="700px" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container mx-auto mt-5">
                {/* <h3 className="text-center">ABOUT</h3> */}
                <p>Alia Bhatt is a British actress of Indian descent who predominantly works in Hindi films. Known for her portrayals of women in challenging circumstances, she has received several accolades, including a National Film Award and six Filmfare Awards. She is one of India's highest-paid actresses.</p>
            </div>
            <div>
                <Container fluid className="px-0 mb-3">
                    <div>
                        <div className="my-3 d-flex">
                            <h3 className="text-center mx-auto">GALLARY</h3>
                            <div className="view-button">
                                {fakeData.length > visibleCardLimit && (
                                    <ViewAllButton
                                        initialText="View All"
                                        variant="primary"
                                        onClick={handlePageNavigation}
                                    />
                                  )
                                }
                            </div>
                        </div>
                    </div>
                    <ReusableSwiper visibleCardLimit={5} uniqueId="artist_gallary">
                        {fakeData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Card style={{ width: '100%', height: '200px' }}>
                                    <div style={{ height: '100%' }}>
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={item.name}
                                            onClick={handleImageClick}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center center'
                                            }}
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </ReusableSwiper>
                    <div>
                        <div className="my-3 d-flex">
                            <h3 className="text-center mx-auto">VIDEOS</h3>
                            <div className="view-button">
                                {fakeData.length > visibleCardLimit && (
                                    <ViewAllButton
                                        initialText="View All"
                                        variant="primary"
                                        onClick={handlePageNavigation}
                                    />
                                  )
                                }
                            </div>
                        </div>
                    </div>
                    <ReusableSwiper visibleCardLimit={5} uniqueId="artist_videos">
                        {fakeData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Card style={{ width: '100%', height: '200px' }}>
                                    <div style={{ height: '100%' }}>
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt={item.name}
                                            onClick={handleImageClick}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center center'
                                            }}
                                        />
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </ReusableSwiper>
                </Container>
            </div>
        </div>
    )
}

export default ArtistDetails

