import React from "react";
import Button from "../../common/button";
import Save from "../../common/icon/save";
import NoteList from "./components/noteList";
import "./content.css";
import Modal from "./components/modal";
import { useNote } from "../../../hook/useNote";

function Content() {
    const {
        noteData,
        setNoteData,
        inputLabelActive,
        setLabelActive,
        activeNote,
        setActiveNote,
        activeModal,
        setModalActive,
        newNote,
        loadNotes,
        deleteNote,
        noteList,
        checkedNote
    } = useNote();
    const handleSubmit = (e) => {
        e.preventDefault();
        newNote();
        loadNotes();
        setNoteData({});
    };
    const handleDelete = (id) => {
        setModalActive(false);
        deleteNote(id);
    };
    const handleChecked = (id) => {
        checkedNote(id);
    };
    const list = noteList;
    return (
        <main className="flex flex-col justify-center content-center items-center gap-y-5">
            <section>
                <form
                    className="flex justify-center content-center items-center gap-x-2"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Button type="submit" className={"animate-bounce"}>
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
                            placeholder=" "
                            className="rounded-xl pl-2 drop-shadow-lg text-input"
                            autoComplete="off"
                            id="note"
                            name="note"
                            value={noteData.note || ""}
                            onChange={({ target }) => {
                                setNoteData(() => ({
                                    [target.name]: target.value,
                                    checked: false
                                }));
                            }}
                        />
                        <label
                            className={`label ${inputLabelActive && "filled"}`}
                            htmlFor="note"
                        >
                            Note text
                        </label>
                    </div>
                </form>
            </section>

            <NoteList
                list={list}
                onDelete={handleDelete}
                activeModal={activeModal}
                setModalActive={setModalActive}
                setActiveNote={setActiveNote}
                handleChecked={handleChecked}
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

export default Content;
