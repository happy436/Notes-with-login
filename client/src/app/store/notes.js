import { createSlice } from "@reduxjs/toolkit";
import notesService from "../services/notes.service";
import localStorageService from "../services/localStorage.service";
import { nanoid } from "nanoid";

const notesSlice = createSlice({
    name: "notes",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        notesRequested: (state) => {
            state.isLoading = true;
        },
        notesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        notesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        addComment: (state, action) => {
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        deleteComment: (state, action) => {
            state.entities.splice(
                state.entities.findIndex((c) => c._id === action.payload.id),
                1
            );
            state.isLoading = false;
        }
    }
});

const { reducer: notesReducer, actions } = notesSlice;
const {
    notesRequested,
    notesReceived,
    notesRequestFailed,
    addNote,
    deleteNote
} = actions;

export const loadNotesList = (userId) => async (dispatch) => {
    dispatch(notesRequested());
    try {
        const { content } = await notesService.getNotes(userId);
        dispatch(notesReceived(content));
    } catch (error) {
        dispatch(notesRequestFailed(error.message));
    }
};

export const createNote = (data) => async (dispatch) => {
    const note = {
        ...data,
        _id: nanoid(),
        created_at: Date.now(),
        userId: localStorageService.getUserId()
    };
    dispatch(notesRequested());
    try {
        const { content } = await notesService.createNote(note);
        dispatch(addNote(content));
    } catch (error) {
        dispatch(notesRequestFailed(error.message));
    }
};

export const removeNote = (id) => async (dispatch) => {
    dispatch(notesRequested());
    try {
        const { content } = await notesService.removeNote(id);
        if (content === null) {
            dispatch(deleteNote(id));
        }
    } catch (error) {
        dispatch(notesRequestFailed(error.message));
    }
};

export const getNotes = () => (state) => state.comments.entities;
export const getNotesLoadingStatus = () => (state) => state.notes.isLoading;

export default notesReducer;
