import React, { useEffect, useState } from "react";
import {
    createNote,
    getNotes,
    loadNotesList,
    removeNote
} from "../../../store/notes";
import Button from "../../common/buttons/button";
import Save from "../../common/buttons/save";
import List from "./components/list";
import "./content.css";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/modal";

function Content() {
    const [data, setData] = useState({});
    const [activeNote, setActiveNote] = useState({ note: "" });
    const [activeModal, setModalActive] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadNotesList());
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createNote(data));
        dispatch(loadNotesList());
    };
    const handleDelete = (id) => {
        console.log(id);
        setModalActive(false);
        dispatch(removeNote(id));
    };
    const list = useSelector(getNotes());
    return (
        <main className="flex flex-col justify-center content-center items-center gap-y-5">
            <section>
                <form
                    className="flex justify-center content-center items-center gap-x-2"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Button type="submit">
                        <Save />
                    </Button>
                    <input
                        placeholder="Enter text"
                        className="rounded-xl pl-2 drop-shadow-lg"
                        autoComplete="off"
                        name="note"
                        value={data.note || ""}
                        onChange={({ target }) => {
                            setData(() => ({ [target.name]: target.value }));
                        }}
                    />
                </form>
            </section>
            <List
                list={list}
                onDelete={handleDelete}
                activeModal={activeModal}
                setModalActive={setModalActive}
                setActiveNote={setActiveNote}
            />
            <Modal
                active={activeModal}
                setActive={setModalActive}
                activeNoteData={activeNote}
                handleDelete={handleDelete}
            />
        </main>
    );
}

Content.propTypes = {};

export default Content;