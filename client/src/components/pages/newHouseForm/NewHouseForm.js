import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import HouseService from '../../../service/house.service'

const houseService = new HouseService()

const EditHouseForm = (props) => {

    const history = useHistory()

    //State

    const [newHouse, setNewHouse] = useState({
        name: '',
        description: '',
        price: 0,
        img: ''
    })
    const [error, setError] = useState({
        status: false,
        msg: undefined
    })


    const handleInputChange = e => setNewHouse({
        ...newHouse,
        [e.target.name]: e.target.value
    })


    const handleSubmit = e => {

        e.preventDefault()

        const { name, description, price, img } = newHouse

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
            .newHouse(newHouse)
            .then(res =>
                history.push('/houses')
            )
            .catch(err => console.log(err))

        //Reiniciar Formulario
        setNewHouse({
            name: '',
            description: '',
            price: 0,
            img: ''
        })

    }
    return (
        <Container className='new-house-form'>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>Nueva Casa</h2>
                    <Form
                        onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name='name' value={newHouse.name} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" name='description' rows={5} value={newHouse.description} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Precio (en euros)</Form.Label>
                            <Form.Control type="number" name='price' value={newHouse.price} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>URL Imagen</Form.Label>
                            <Form.Control type="text" name='img' value={newHouse.img} onChange={handleInputChange} />
                        </Form.Group>

                        {error.status ? <p className='form-error'>{error.msg}</p> : null}

                        <Button type='submit' variant='dark' className='form-btn'>Añadir</Button>
                        <Link to='/houses' variant='dark' className='btn btn-back'>Cancelar</Link>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}

export default EditHouseForm;