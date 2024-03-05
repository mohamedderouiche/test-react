import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addEvent } from './service/api';


function AddEvent() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        nbTickets: '',
        nbParticipants: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call your web service to add the event using formData
        try {
            await addEvent(formData);
            // After successful addition, redirect to the events page
            navigate('/competition');
        } catch (error) {
            console.error('Error adding event:', error);
        }
        // After successful addition, redirect to the events page
        navigate('/competition');
    };

    return (
        <div>
            <h2>Add  comp</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>fees</Form.Label>
                    <Form.Control type="text" name="price" value={formData.fees} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>DATE</Form.Label>
                    <Form.Control type="date" name="price" value={formData.date} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formNbTickets">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control type="number" name="nbTickets" value={formData.participants} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formNbParticipants">
                    <Form.Label>desc</Form.Label>
                    <Form.Control type="text" name="nbParticipants" value={formData.description} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add comp
                </Button>
            </Form>
        </div>
    );
}

export default AddEvent;
