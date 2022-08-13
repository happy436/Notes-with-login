import React from "react";
import PropTypes from "prop-types";
import Button from "../../../common/button";
import Edit from "../../../common/icon/edit";
import Delete from "../../../common/icon/delete";
import history from "../../../../utils/history";

function Note({
    data,
    onDelete,
    setModalActive,
    setActiveNote,
    onToggleChecked
}) {
    const handleActiveModal = () => {
        setModalActive(true);
        setActiveNote({ note: data.note, ...data });
    };

    const noteColor = (color = "violet") => {
        if (data.checked) {
            return `bg-${color}-700`;
        }
        return `bg-${color}-400`;
    };

    return (
        <>
            <li
                className={`min-w-[200px] ${noteColor(
                    data.color
                )} note p-2 rounded-xl drop-shadow-lg note cursor-pointer truncate`}
                onClick={() => {
                    handleActiveModal();
                }}
            >
                <span className="flex justify-between note__buttons-hover">
                    <input
                        type="checkbox"
                        className="w-[30px] h-[30px]"
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleChecked(data._id);
                        }}
                        defaultChecked={data.checked}
                    />
                    <span className="flex gap-2">
                        <Button
                            handleClick={() => {
                                history.push("/note/" + data._id);
                            }}
                        >
                            <Edit />
                        </Button>
                        <Button handleClick={() => onDelete(data._id)}>
                            <Delete />
                        </Button>
                    </span>
                </span>
                {data.name && (
                    <>
                        <span className={`break-words`}>{data.name}</span>
                        <hr />
                    </>
                )}

                <span
                    className={`break-words ${data.checked && "line-through"}`}
                >
                    {data.note}
                </span>
            </li>
        </>
    );
}

Note.propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func,
    setModalActive: PropTypes.func,
    setActiveNote: PropTypes.func,
    onToggleChecked: PropTypes.func
};

export default Note;
