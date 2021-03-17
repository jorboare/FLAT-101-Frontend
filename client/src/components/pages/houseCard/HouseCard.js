import React from 'react';
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HouseCard = ({ name, price, img, _id }) => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (

        <Col md={4} className='house-col'>
            <Link to={`/detail/${_id}`}>
                <div className='img-container'>

                    <img src={img} alt='house' className='house-img' />
                </div>
                <h1>{name}</h1>
                <h5>{numberWithCommas(price)} €</h5>
            </Link>
        </Col>
    );
}

export default HouseCard;
