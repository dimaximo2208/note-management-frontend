import { Note } from "../models/Note";
import axiosApi from "./apiHelper";

const getAllNotes = async() : Promise<Note[]> => {
    const response = await axiosApi.get<Note[]>('/notes');
    return response.data;
}

const getNoteById = async(id: string) : Promise<Note> => {
    const response = await axiosApi.get<Note>('/notes/'+id);
    return response.data;
}

const addNote = async (note: any) : Promise<Note[]> => {
    const response = await axiosApi.post<Note[]>('/notes/createOrUpdate', {...note});
    return response.data;
}

const deleteNote = async (id: string) : Promise<any> => {
    const response = await axiosApi.delete<any>('/notes/'+ id);
    return response.data;
}

export {
    getAllNotes,
    addNote,
    getNoteById,
    deleteNote
}