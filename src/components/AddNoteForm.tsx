import { Note } from "../models/Note";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface AddNoteFormProps {
    note: Note;
    setNote: (note: Note) => void;
    handleSaveClick: () => void;
}


const AddNoteForm = (props: AddNoteFormProps) => {

    const handleOnChange = (evt: any) => { //da togliere l'any
        const value = evt.currentTarget.value;
        const name = evt.currentTarget.name;
        props.setNote({ ...props.note, [name]: value });
    }

    const handleResetClick = () => {
        props.setNote({
            id: 0
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-6 ms-3">
                    <label>Title</label>
                    <TextField type="text" className="w-100" value={props.note.title ?? ""} name="title" onChange={handleOnChange}></TextField>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 ms-3 pt-2">
                    <label>Text</label>
                    <TextField rows={4} multiline className="w-100" name="text" value={props.note.text ?? ""} onChange={handleOnChange}></TextField>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 text-end pt-2">
                    <Button disabled={!props.note.title} onClick={props.handleSaveClick}>Save</Button>
                    <Button onClick={handleResetClick}>Reset</Button>
                </div>
            </div>
        </>
    )
}

export default AddNoteForm;