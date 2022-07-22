import React from "react";
import PropTypes from "prop-types";
import Button from "../../../common/buttons/button";
import Edit from "../../../common/buttons/edit";
import Delete from "../../../common/buttons/delete";
import { useDispatch } from "react-redux";
import { editData } from "../../../../store/notes";

function Item({ data, onDelete, setModalActive, setActiveNote, setData }) {
    const handleActiveModal = () => {
        setModalActive(true);
        setActiveNote({ note: data.note, ...data });
    };
    const dispatch = useDispatch();
    const handleCheched = (e) => {
        e.stopPropagation();
        setData((prev) => ({ ...prev, cheched: !prev.cheched }));
        console.log(data);
        dispatch(editData(data));
    };
    return (
        <>
            <span
                className="min-w-[200px] break-words bg-violet-400 p-2 rounded-xl drop-shadow-lg note cursor-pointer truncate"
                onClick={() => {
                    handleActiveModal();
                }}
            >
                <span className="flex justify-between note__buttons-hover">
                    <input
                        type="checkbox"
                        className="w-[20px] h-[20px]"
                        onClick={(e) => handleCheched(e)}
                    />
                    <span className="flex gap-2">
                        <Button
                            handleClick={() => {
                                handleActiveModal();
                            }}
                        >
                            <Edit />
                        </Button>
                        <Button handleClick={() => onDelete(data._id)}>
                            <Delete />
                        </Button>
                    </span>
                </span>
                {data.note}
            </span>
        </>
    );
}

Item.propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func,
    setModalActive: PropTypes.func,
    setActiveNote: PropTypes.func,
    setData: PropTypes.func
};

export default Item;
