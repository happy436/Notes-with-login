import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNotesList } from "../../../store/notes";
import { getIsLoggedIn } from "../../../store/users";
import localStorageService from "./../../../services/localStorage.service";

function AppLoader({ children }) {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadNotesList());
        }
    }, [isLoggedIn]);

    if (!isLoggedIn && localStorageService.getUserId()) return "Loading...";

    return children;
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
