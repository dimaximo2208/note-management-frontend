import { useEffect, useState } from "react";
import { Note } from "../models/Note";
import { addNote, getNoteById } from "../api/notesApi";
import { useNavigate, useParams } from "react-router-dom";
import AddNoteForm from "../components/AddNoteForm";

const AddNote = () => {
    const { id } = useParams<{ id: string }>();
    const [note, setNote] = useState<Note>({
        id: 0
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (id)
            getNoteById(id)
                .then((response) => {
                    console.log(response);
                    setNote(response);
                })
                .catch((error) => {
                    console.log("Errore durante il caricamento dei dati "); //qui ci vorrebbe un sistema di alert
                    navigate('/home');
                })
        // eslint-disable-next-line
    }, []);



    const handleSaveClick = () => {
        addNote(note)
            .then(() => {
                navigate('/home')
            })
            .catch((e) => {
                console.log("Errore durante il salvataggio dei dati "); //qui ci vorrebbe un sistema di alert
            });
    }


    return (
        <>
            <AddNoteForm
                note={note}
                setNote={setNote}
                handleSaveClick={handleSaveClick}
            />
        </>
    )
}

export default AddNote;