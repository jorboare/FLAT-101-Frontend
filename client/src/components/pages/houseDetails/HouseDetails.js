import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import HouseService from '../../../service/house.service'
const houseService = new HouseService()

const HouseDetails = () => {
    const params = useParams()
    const history = useHistory()

    //State
    const [houseDetails, setHouseDetails] = useState({})

    useEffect(() => {
        houseService.
            getHouseDetails(params.id)
            .then(res => setHouseDetails(res.data))
            .catch(err => console.log(err))
    }, [])

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    //Eliminar Casa

    function deleteHouse() {
        houseService.
            delete(params.id)
            .then(res => history.push('/houses'))
            .catch(err => console.log(err))
    }

    return (
        <Container className='house-details'>
            {houseDetails.name !== undefined ?
                <Row>
                    <Col md={12}>

                        <img src={houseDetails.img} alt='house' className='house-details-img' />

                        <h2>{houseDetails.name}</h2>

                        <h3>Sobre {houseDetails.name}:</h3>

                        <p>{houseDetails.description}</p>

                        <p className='house-details-price'>{numberWithCommas(houseDetails.price)} €</p>

                        <div className='detail-btn'>

                            <Link to={`/edit/${houseDetails._id}`} className='btn btn-edit'>Editar</Link>

                            <button className='btn btn-delete' onClick={() => deleteHouse()}>Eliminar</button>
                        </div>

                    </Col>
                </Row>

                :
                null
            }


        </Container>
    );
}

export default HouseDetails;