import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Note } from '../models/Note';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../api/notesApi';

interface NoteCardProps {
    note: Note;
}

const NoteCard = (props: NoteCardProps) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('/add-note/' + props.note.id)
    }

    const handleDeleteClick = () => {
        deleteNote(props.note.id.toString())
            .then(() => {
                window.location.reload();
            })
            .catch(() => {

            });
    }

    const retriveLastDate = (note: Note) => {
        if (!note.insertDate) return null;
        let dateToReturn;
        if (note.lastUpdate) {
            if (note.lastUpdate > note.insertDate)
                dateToReturn = note.lastUpdate;
            else
                dateToReturn = note.insertDate;
        }
        else
            dateToReturn = note.insertDate;
        return new Date(dateToReturn).toDateString() + " " + new Date(dateToReturn).getHours() + ":" + new Date(dateToReturn).getMinutes()
    }

    return (
        <>
            <Card sx={{ minWidth: 100 }} >
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.note.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {retriveLastDate(props.note)}
                    </Typography>
                    <Typography variant="body2">
                        {props.note.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleEditClick}>Edit</Button>
                    <Button size="small" onClick={handleDeleteClick}>Delete</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default NoteCard;