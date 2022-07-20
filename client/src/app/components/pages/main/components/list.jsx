import React from "react";
import PropTypes from "prop-types";
import Item from "./item";

function List({ list, onDelete, activeModal, setModalActive, setActiveNote }) {
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
    setActiveNote: PropTypes.func
};

export default List;
