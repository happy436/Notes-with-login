import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    getNotes,
    loadNotesList,
    removeNote,
    toggleCheckedNoteStatus,
    getNotesLoadingStatus,
    createNote,
    editData,
    getNoteById
} from "../store/notes";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/common/icon/loader";
import { getIsLoggedIn } from "./../store/users";

const NoteContext = React.createContext();

export const useNote = () => {
    return useContext(NoteContext);
};

const NoteProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [inputLabelActive, setLabelActive] = useState(false);
    const [activeNote, setActiveNote] = useState({ note: "" });
    const [activeModal, setModalActive] = useState(false);
    const [noteData, setNoteData] = useState({});
    const noteList = useSelector(getNotes());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isLoading = useSelector(getNotesLoadingStatus());
    const loadNotes = () => dispatch(loadNotesList());
    useEffect(() => {
        if (isLoggedIn) {
            loadNotes();
        }
    }, [isLoggedIn]);

    const newNote = () =>
        dispatch(createNote({ ...noteData, color: "violet", name: "" }));
    const deleteNote = (id) => {
        dispatch(removeNote(id));
    };
    const checkedNote = (id) => {
        dispatch(toggleCheckedNoteStatus(id));
    };
    const editNote = (data) => {
        dispatch(editData(data));
    };
    const noteById = (noteId) => useSelector(getNoteById(noteId));
    return (
        <NoteContext.Provider
            value={{
                noteById,
                noteData,
                inputLabelActive,
                setLabelActive,
                setActiveNote,
                activeModal,
                setModalActive,
                activeNote,
                noteList,
                deleteNote,
                editNote,
                newNote,
                checkedNote,
                setNoteData,
                getNotes,
                loadNotes
            }}
        >
            {isLoading && isLoggedIn ? <Loader /> : children}
        </NoteContext.Provider>
    );
};

NoteProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default NoteProvider;
