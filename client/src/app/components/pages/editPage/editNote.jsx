import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../common/button";
import Edit from "../../common/icon/edit";
import Cancel from "../../common/icon/cancel-x";
import Delete from "../../common/icon/delete";
import history from "../../../utils/history";
import { useNote } from "./../../../hook/useNote";

function Note() {
    const { noteId } = useParams();
    const { editNote, deleteNote, noteById } = useNote();
    const [data, setData] = useState({});
    function onSubmit(e) {
        e.preventDefault();
        editNote(data);
        history.push("/");
    }
    const note = noteById(noteId);
    useEffect(() => {
        setData(note);
    }, []);
    const handleDelete = (id) => {
        deleteNote(id);
        history.push("/");
    };
    const colors = [
        "slate",
        "orange",
        "green",
        "teal",
        "cyan",
        "sky",
        "indigo",
        "violet",
        "fuchsia",
        "rose"
    ];
    return (
        <section
            className={`flex absolute top-0 left-0 right-0 bottom-0  justify-center content-center items-center z-10`}
        >
            <form
                className="z-20 min-w-[300px] w-[600px]"
                onSubmit={(e) => onSubmit(e)}
            >
                <div
                    className={`flex flex-col gap-3 bg-${data.color}-400 shadow p-4 drop-shadow-lg rounded-xl w-[100%] min-w-[50%]`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="absolute top-2 right-2">
                        <Button handleClick={() => history.push("/")}>
                            <Cancel />
                        </Button>
                    </span>

                    <h2 className="text-center text-xl font-bold">Edit</h2>
                    <span className="flex flex-column gap-1">
                        <label htmlFor="note">Color</label>
                        <select
                            name="color"
                            className="rounded-xl p-2 w-full"
                            onChange={({ target }) => {
                                setData((prevState) => ({
                                    ...prevState,
                                    [target.name]: target.value
                                }));
                            }}
                        >
                            {colors.map((item) => (
                                <option className={`bg-${item}-400`} key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </span>
                    <span className="flex flex-column gap-1">
                        <label htmlFor="name">Name</label>
                        <input
                            className="rounded-xl p-2 min-h-auto w-full"
                            name="name"
                            id="name"
                            value={data.name || ""}
                            onChange={({ target }) => {
                                setData((prevState) => ({
                                    ...prevState,
                                    [target.name]: target.value
                                }));
                            }}
                        ></input>
                    </span>
                    <span className="flex flex-column gap-1">
                        <label htmlFor="note">Text</label>
                        <textarea
                            className="rounded-xl p-2 h-[100px] min-h-auto w-full"
                            name="note"
                            id="note"
                            value={data.note}
                            onChange={({ target }) => {
                                setData((prevState) => ({
                                    ...prevState,
                                    [target.name]: target.value
                                }));
                            }}
                        ></textarea>
                    </span>
                    <span className="flex justify-around">
                        <Button type="submit">
                            <Edit />
                        </Button>
                        <Button handleClick={() => handleDelete(noteId)}>
                            <Delete />
                        </Button>
                    </span>
                </div>
            </form>
        </section>
    );
}

export default Note;
