import React from 'react'
import { Note } from '../models/note'
import Notes from './Notes'

type NotesListProps = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}

export default function NotesList({ notes, setNotes }: NotesListProps) {


    const handleDelete = (id: string) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const renderNotes = () => {
        return notes.map(({ title, text, color, date, id }) => (
            <Notes
                key={id}
                id={id}
                title={title}
                text={text}
                color={color}
                date={date}
                handleDelete={handleDelete}

            />
        ));
    }

    return (
        <>
            <h2 className='mt-3'>Notes</h2>
            <div>

                {renderNotes()}

            </div>
        </>
    )
}

