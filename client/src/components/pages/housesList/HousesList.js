import React, { useState, useEffect } from 'react';
import HouseService from '../../../service/house.service'
import HouseCard from './../houseCard/HouseCard'
import { Container, Row } from 'react-bootstrap'

const houseService = new HouseService()

const ProductsList = () => {

    //states
    const [houses, setHouses] = useState([])


    useEffect(() => {
        houseService
            .getHouses()
            .then(res => setHouses(res.data))
            .catch(err => console.log(err.response))
    }, [])



    return (
        <>
            <Container className='houses-container'>
                <Row>
                    {houses.map(elm =>
                    (
                        <HouseCard key={elm._id} {...elm} />
                    ))}
                </Row>
            </Container>

        </>
    );
}

export default ProductsList;