import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes";
import usersReducer from "./users";

const rootReducer = combineReducers({
    notes: notesReducer,
    users: usersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
