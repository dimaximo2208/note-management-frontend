import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { getAllNotes } from '../api/notesApi';
import { Note } from '../models/Note';
import NotesTable from '../components/NotesTable';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const navigate = useNavigate();

    const getNotes = () => {
        getAllNotes().then((response) => {
            console.log(response);
            response.sort((a, b) => {
                if (!a.insertDate || !b.insertDate) return 0;
                let aDate;
                let bDate;

                if (a.lastUpdate && a.insertDate && a.lastUpdate > a.insertDate)
                    aDate = a.lastUpdate;
                else
                    aDate = a.insertDate;

                if (b.lastUpdate && b.insertDate && b.lastUpdate > b.insertDate)
                    bDate = b.lastUpdate;
                else
                    bDate = b.insertDate;

                if (aDate < bDate) return 1
                else if (aDate > bDate) return -1;
                else return 0;
            });
            setNotes(response);
        })
            .catch((e) => {
                console.log("Errore durante il caricamento dei dati"); //implementare messaggio da visualizzare
            })
            ;
    }

    useEffect(() => {
        getNotes();
    }, []);

    const handleAddNoteClick = () => {
        navigate('/add-note')
    }


    return (
        <>
            <NotesTable
                notes={notes}
            />
            <Button onClick={handleAddNoteClick}>Add note</Button>
        </>
    )
}

export default Home;