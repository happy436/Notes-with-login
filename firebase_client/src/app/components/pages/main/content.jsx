import React, { useEffect, useState } from "react";
import {
    createNote,
    getNotes,
    loadNotesList,
    removeNote,
    toggleChechedNoteStatus
} from "../../../store/notes";
import Button from "../../common/buttons/button";
import Save from "../../common/buttons/save";
import List from "./components/list";
import "./content.css";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/modal";
import AppLoader from "../../ui/hoc/appLoader";

function Content() {
    const [inputLabelActive, setLabelActive] = useState(false);
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
        setData({});
    };
    const handleDelete = (id) => {
        setModalActive(false);
        dispatch(removeNote(id));
    };
    const handleCheched = (id) => {
        dispatch(toggleChechedNoteStatus(id));
    };
    const list = useSelector(getNotes());
    return (
        <AppLoader>
            <main className="flex flex-col justify-center content-center items-center gap-y-5">
                <section>
                    <form
                        className="flex justify-center content-center items-center gap-x-2"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <Button type="submit">
                            <Save />
                        </Button>
                        <div className="input-container">
                            <input
                                onBlur={(e) =>
                                    e.target.value !== ""
                                        ? setLabelActive(true)
                                        : setLabelActive(false)
                                }
                                required
                                placeholder="Enter text"
                                className="rounded-xl pl-2 drop-shadow-lg text-input"
                                autoComplete="off"
                                name="note"
                                value={data.note || ""}
                                onChange={({ target }) => {
                                    setData(() => ({
                                        [target.name]: target.value,
                                        cheched: false
                                    }));
                                }}
                            />
                            <label
                                className={`label ${
                                    inputLabelActive ? "filled" : null
                                }`}
                                htmlFor="note"
                            >
                                Note text
                            </label>
                        </div>
                    </form>
                </section>
                <List
                    list={list}
                    onDelete={handleDelete}
                    activeModal={activeModal}
                    setModalActive={setModalActive}
                    setActiveNote={setActiveNote}
                    handleCheched={handleCheched}
                />
                <Modal
                    active={activeModal}
                    setActive={setModalActive}
                    activeNoteData={activeNote}
                    handleDelete={handleDelete}
                />
            </main>
        </AppLoader>
    );
}

Content.propTypes = {};

export default Content;
