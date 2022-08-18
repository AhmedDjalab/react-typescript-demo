import React from 'react'
import { Button, Card } from 'react-bootstrap';

type Props = {
    id: string;
    title: string;
    text: string;
    color: string;
    date: string;
    handleDelete: (id: string) => void;
}

export default function Notes({ title, text, color, date, id, handleDelete }: Props) {
    return (
        <div className='mb-3'>
            <Card style={{ backgroundColor: color }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Subtitle className='text-muted'>{date}</Card.Subtitle>
                    <Button className='mt-3' variant='danger' onClick={() => handleDelete(id)}>Delete</Button>
                </Card.Body>


            </Card>


        </div>
    )
}