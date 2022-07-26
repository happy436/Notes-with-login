import React from "react";
import PropTypes from "prop-types";
import Item from "./item";

function List({ list, onDelete, setModalActive, setActiveNote, handleCheched }) {
    const sortedList = list !== null ? list.map(item => item).sort((a, b) => a.note.length - b.note.length).sort((a, b) => Number(a.cheched) - Number(b.cheched)) : null;
    return (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
            {sortedList === null || sortedList.length === 0
                ? null
                : sortedList.map((item) => (
                      <Item
                          data={item}
                          key={item._id}
                          onDelete={onDelete}
                          setModalActive={setModalActive}
                          setActiveNote={setActiveNote}
                          onToggleCheched={handleCheched}
                      />
                  ))}
        </ul>
    );
}

List.propTypes = {
    list: PropTypes.array,
    onDelete: PropTypes.func,
    activeModal: PropTypes.bool,
    setModalActive: PropTypes.func,
    setActiveNote: PropTypes.func,
    handleCheched: PropTypes.func
};

export default List;
