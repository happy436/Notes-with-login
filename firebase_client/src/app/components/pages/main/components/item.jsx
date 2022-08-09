import React from "react";
import PropTypes from "prop-types";
import Button from "../../../common/buttons/button";
import Edit from "../../../common/buttons/edit";
import Delete from "../../../common/buttons/delete";

function Item({ data, onDelete, setModalActive, setActiveNote, onToggleChecked }) {
    const handleActiveModal = () => {
        setModalActive(true);
        setActiveNote({ note: data.note, ...data });
    };

    return (
        <>
            <li
                className={`min-w-[200px] note ${
                    data.checked ? "bg-violet-700" : "bg-violet-400"
                } p-2 rounded-xl drop-shadow-lg note cursor-pointer truncate`}
                onClick={() => {
                    handleActiveModal();
                }}
            >
                <span className="flex justify-between note__buttons-hover">
                    <input
                        type="checkbox"
                        className="w-[20px] h-[20px]"
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleChecked(data._id);
                        }}
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
                <span
                    className={`break-words ${
                        data.checked ? "line-through" : null
                    }`}
                >
                    {data.note}
                </span>
            </li>
        </>
    );
}

Item.propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func,
    setModalActive: PropTypes.func,
    setActiveNote: PropTypes.func,
    onToggleChecked: PropTypes.func
};

export default Item;
