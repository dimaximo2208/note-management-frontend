import { useEffect } from "react";
import { Note } from "../models/Note";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import NoteCard from "./NoteCard";

interface NotesTableProps {
    notes: Note[];
}

const NotesTable = (props: NotesTableProps) => {
    console.log(props.notes)
    return (
        <>
            <Grid container spacing={2}>
                {props.notes && props.notes.length > 0 &&
                    props.notes.map(note =>
                        <>
                            <Grid item xs={6}>
                                <NoteCard note={note} />
                            </Grid>
                        </>
                    )
                }
                {props.notes && props.notes.length == 0 &&
                    <h5>
                        Notes not found, click the button below to add one
                    </h5>
                }
            </Grid>
        </>
    )
}

export default NotesTable;