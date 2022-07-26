import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language";
import notesReducer from "./notes";
import usersReducer from "./users";

const rootReducer = combineReducers({
    language: languageReducer,
    notes: notesReducer,
    users: usersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
