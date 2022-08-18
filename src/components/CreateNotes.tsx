import React, { useRef, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Note } from '../models/note'

type Props = {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;

}

export default function CreateNotes({ notes, setNotes }: Props) {
    const [error, setError] = useState<string>("");
    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === '' || textRef.current?.value === '') {
            return setError("All fields are mandatory ");
        }
        setError("")
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: titleRef.current!.value,
            text: textRef.current!.value,
            color: colorRef.current!.value,
            date: (new Date()).toString()

        }])
        titleRef.current!.value = '';
        textRef.current!.value = '';
    }

    return (
        <>
            <h2>Create Notes</h2>
            {
                error && <Alert variant='danger'>{error}  </Alert>
            }
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mb-3'
                    controlId='formBasicTitle'
                >
                    <Form.Label>
                        Title
                    </Form.Label>
                    <Form.Control type="text" placeholder='Enter Title ' ref={titleRef} />


                </Form.Group>
                <Form.Group className='mb-3'
                    controlId='formBasicText'
                >
                    <Form.Label>
                        Text
                    </Form.Label>
                    <Form.Control as="textarea" placeholder='Enter your Note ' rows={3} ref={textRef} />


                </Form.Group>
                <Form.Group className='mb-3'
                    controlId='formBasicTitle'
                >
                    <Form.Label htmlFor='colorInput'>
                        Notes Color
                    </Form.Label>
                    <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf"
                        title='Choose your color' ref={colorRef} />


                    <Button type='submit' variant="primary" className='mt-3'>Submit</Button>
                </Form.Group>
            </Form>
        </>
    )
}