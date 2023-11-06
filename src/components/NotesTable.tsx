import { Note } from "../models/Note";
import Grid from '@mui/material/Grid';
import NoteCard from "./NoteCard";

interface NotesTableProps {
    notes: Note[];
}

const NotesTable = (props: NotesTableProps) => {
    return (
        <>
            <Grid container spacing={2} className="m-1">
                {props.notes && props.notes.length > 0 &&
                    props.notes.map(note =>
                        <>
                            <Grid item xs={6}>
                                <NoteCard note={note} />
                            </Grid>
                        </>
                    )
                }
                {props.notes && props.notes.length === 0 &&
                    <h5 className="ms-4 mt-2">
                        Notes not found, click the button below to add one
                    </h5>
                }
            </Grid>
        </>
    )
}

export default NotesTable;