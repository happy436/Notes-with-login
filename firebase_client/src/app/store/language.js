import { createSlice } from "@reduxjs/toolkit";
import languageService from "../services/language.service";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        entities: null,
        active: "ENG",
        isLoading: true,
        error: null
    },
    reducers: {
        languageRequested: (state) => {
            state.isLoading = true;
        },
        languageReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        languageRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: languageReducer, actions } = languageSlice;
const { languageRequested, languageReceived, languageRequestFailed } = actions;

export const loadLanguagesList = () => async (dispatch, getState) => {
    dispatch(languageRequested());
    try {
        const { content } = await languageService.get();
        dispatch(languageReceived(content));
    } catch (error) {
        dispatch(languageRequestFailed(error.message));
    }
};

export const getLanguage = () => (state) => state.language.entities;
export const getLanguageLoadingStatus = () => (state) =>
    state.language.isLoading;

export default languageReducer;
