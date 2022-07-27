import { createSlice } from "@reduxjs/toolkit";
import notesService from "../services/notes.service";
import localStorageService from "../services/localStorage.service";
import { toast } from "react-toastify";

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
        addNote: (state, action) => {
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        deleteNote: (state, action) => {
            state.entities.splice(
                state.entities.findIndex((c) => c._id === action.payload.id),
                1
            );
            state.isLoading = false;
        },
        editNote: (state, action) => {
            const index = state.entities.findIndex(
                (c) => c._id === action.payload._id
            );
            state.entities[index].note = action.payload.note;
        },
        editChechedStatusNote: (state, action) => {
            const index = state.entities.findIndex(
                (c) => c._id === action.payload
            );
            state.entities[index].cheched = !state.entities[index].cheched;
        }
    }
});

const { reducer: notesReducer, actions } = notesSlice;
const {
    notesRequested,
    notesReceived,
    notesRequestFailed,
    addNote,
    deleteNote,
    editNote,
    editChechedStatusNote
} = actions;

export const loadNotesList = () => async (dispatch) => {
    const userId = localStorageService.getUserId();
    dispatch(notesRequested());
    try {
        const { content } = await notesService.getNotes(userId);
        dispatch(notesReceived(content));
    } catch (error) {
        dispatch(notesRequestFailed(error.message));
    }
};

export const createNote = (data) => async (dispatch) => {
    /* const note = {
        ...data,
        created_at: Date.now(),
        userId: localStorageService.getUserId()
    }; */
    dispatch(notesRequested());
    try {
        const { content } = await notesService.createNote(data);
        dispatch(addNote(content));
    } catch (error) {
        dispatch(notesRequestFailed(error.message));
    }
};

export const toggleChechedNoteStatus =
    (payload) => async (dispatch, getState) => {
        dispatch(notesRequested());
        try {
            dispatch(editChechedStatusNote(payload));
            const cheched = getState().notes.entities.find(
                (item) => item._id === payload
            );
            const { content } = await notesService.update(cheched);
            if (typeof content !== "object") {
                return null;
            }
        } catch (error) {
            dispatch(notesRequestFailed(error.message));
        }
    };

export const editData = (payload) => async (dispatch) => {
    dispatch(notesRequested());
    try {
        const { content } = await notesService.update(payload);
        if (typeof content === "object") {
            toast.success("Note edit successful", { autoClose: 2000 });
        }
        dispatch(editNote(payload));
    } catch (error) {
        dispatch(notesRequestFailed(error.message));
    }
};

export const removeNote = (id) => async (dispatch) => {
    dispatch(notesRequested());
    try {
        const { content } = await notesService.removeNote(id);
        if (!content) {
            toast.success("Note deleted successfully", { autoClose: 2000 });
            dispatch(deleteNote({ id }));
        }
    } catch (error) {
        dispatch(notesRequestFailed(error.message));
    }
};

export const getNotes = () => (state) => state.notes.entities;
export const getNotesLoadingStatus = () => (state) => state.notes.isLoading;

export default notesReducer;
