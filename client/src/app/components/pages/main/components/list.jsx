import React from "react";
import PropTypes from "prop-types";
import Item from "./item";

function List({ list, onDelete, setModalActive, setActiveNote, setData }) {
    return (
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
            {list === null || list.length === 0
                ? "Empty"
                : list.map((item) => (
                      <Item
                          data={item}
                          key={item._id}
                          onDelete={onDelete}
                          setModalActive={setModalActive}
                          setActiveNote={setActiveNote}
                          setData={setData}
                      />
                  ))}
        </section>
    );
}

List.propTypes = {
    list: PropTypes.array,
    onDelete: PropTypes.func,
    activeModal: PropTypes.bool,
    setModalActive: PropTypes.func,
    setActiveNote: PropTypes.func,
    setData: PropTypes.func
};

export default List;
