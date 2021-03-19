import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import { useHistory, useParams, Link } from 'react-router-dom'
import HouseService from '../../../service/house.service'

const houseService = new HouseService()

const NewHouseForm = () => {

    const history = useHistory()
    const params = useParams()

    //State
    const [houseInfo, sethouseInfo] = useState({})

    useEffect(() => {
        houseService
            .getHouseDetails(params.id)
            .then(res => sethouseInfo(res.data))
            .catch(err => console.log(err))
    }, [params.id])

    //State
    const [error, setError] = useState({
        status: false,
        msg: undefined
    })


    const handleInputChange = e => sethouseInfo({
        ...houseInfo,
        [e.target.name]: e.target.value
    })


    const handleSubmit = e => {

        e.preventDefault()

        const { name, description, price, img, _id } = houseInfo

        //Validación de los campos
        if (name.trim() === '' || description.trim() === '' || img.trim() === '' || price <= 0) {
            setError({
                status: true,
                msg: 'Completa todos los campos'
            })
            return
        }
        //Restaurar error
        setError({
            status: false,
            msg: undefined
        })

        //Enviar datos a la base de datos
        houseService
            .editHouse(_id, houseInfo)
            .then(res =>
                history.push(`/detail/${_id}`)
            )
            .catch(err => console.log(err))

    }
    return (
        <>
            {
                houseInfo.name !== undefined ?
                    <Container className='new-house-form'>
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <h2><span>Editar</span> {houseInfo.name}</h2>
                                <Form
                                    onSubmit={handleSubmit}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name='name' value={houseInfo.name} onChange={handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control as="textarea" name='description' rows={5} value={houseInfo.description} onChange={handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Precio (en euros)</Form.Label>
                                        <Form.Control type="number" name='price' value={houseInfo.price} onChange={handleInputChange} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>URL Imagen</Form.Label>
                                        <Form.Control type="text" name='img' value={houseInfo.img} onChange={handleInputChange} />
                                    </Form.Group>

                                    {error.status ? <p className='form-error'>{error.msg}</p> : null}

                                    <Button type='submit' variant='dark' className='form-btn'>Editar</Button>
                                    <Link to={`/detail/${houseInfo._id}`} type='submit' variant='dark' className='btn btn-back'>Cancelar</Link>
                                </Form>
                            </Col>
                        </Row>
                    </Container >
                    :
                    null
            }
        </>
    );
}

export default NewHouseForm;