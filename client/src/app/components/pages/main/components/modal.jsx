import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Edit from "../../../common/icon/accept";
import Button from "../../../common/button";
import Delete from "../../../common/icon/delete";
import Cancel from "../../../common/icon/cancel-x";
import { useDispatch } from "react-redux";
import { editData } from "./../../../../store/notes";

function Modal({ active, setActive, activeNoteData, handleDelete }) {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    function onSubmit(e) {
        e.preventDefault();
        setActive(false);
        dispatch(editData(data));
    }
    useEffect(() => {
        setData({ note: activeNoteData.note, ...activeNoteData });
    }, [activeNoteData]);

    return (
        <section
            className={`${
                active ? "flex" : "hidden"
            } absolute top-0 left-0 right-0 bottom-0 bg-slate-800/80  justify-center content-center items-center z-10`}
            onClick={() => setActive(false)}
        >
            <form
                className="z-20 min-w-[300px] w-[600px]"
                onSubmit={(e) => onSubmit(e)}
            >
                <div
                    className="flex flex-col gap-3 bg-violet-400 p-4 drop-shadow-lg rounded-xl w-[100%] min-w-[50%]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="absolute top-2 right-2">
                        <Button handleClick={() => setActive(false)}>
                            <Cancel />
                        </Button>
                    </span>

                    <h2 className="text-center text-xl font-bold">Edit</h2>
                    <span className="flex flex-column gap-1">
                        <label>Text</label>
                        <textarea
                            className="rounded-xl p-2 h-[400px] min-h-auto w-full"
                            name="note"
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
                        <Button handleClick={() => handleDelete(activeNoteData._id)}>
                            <Delete />
                        </Button>
                    </span>
                </div>
            </form>
        </section>
    );
}

Modal.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    activeNoteData: PropTypes.object,
    handleDelete: PropTypes.func
};

export default Modal;
