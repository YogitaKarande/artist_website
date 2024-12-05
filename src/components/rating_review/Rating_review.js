import React, { useEffect, useState } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Rating_review() {
    const [artistData, setArtistData] = useState({
        name: '',
        imageUrl: '',
        rating: 2,
        review: '',
    });
    const [rating, setRating] = useState()

    useEffect(() => {
        async function fetchData() {
            //   const response = await fetch('https://api.example.com/artist');
            //   const data = await response.json();

            //   setArtistData({
            //     name: data.name,
            //     imageUrl: data.imageUrl,
            //     rating: data.rating,
            //     review: data.review,
            //   });
        }
        fetchData();
    }, []);
    return (
        <div className='container my-5'>
            <Col lg={4} className='p-3 mx-auto'>
                <Card className='p-3'>
                    <div className="d-flex">
                        <Image src={artistData.imageUrl} alt={artistData.name} />
                        <Image src='./assets/images/bg_images.jpeg' alt='vinod varma' className='me-3' roundedCircle width='40px' height='40px' />
                        <span className='mt-2'>{artistData.name} Nikita rajput</span>
                    </div>
                    <div className='pt-3'>
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                color={index < rating ? '#ffc107' : '#e4e5e9'}
                                size={30}
                            />
                        ))}
                    </div>
                    <div>
                        <p>{artistData.review}</p>
                        <p>A content review is the quality assurance process each piece
                            of content should go through before publishing</p>
                        {artistData.review.length > 1 && (
                            <div className='text-end'>
                                <NavLink className='nav-link'>Read More....</NavLink>
                            </div>
                         )
                        }
                    </div>
                </Card>
            </Col>
        </div>
    );
}

export default Rating_review;
