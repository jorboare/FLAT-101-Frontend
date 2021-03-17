import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
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
            <Container className='houses-container' style={{ 'marginBottom': "50px" }}>
                <h2>Nuestras casas</h2>
                <Link to='/newhouse' className='btn btn-newHouse'>Añadir una casa</Link>
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