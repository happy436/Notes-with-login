/* import { useEffect } from "react"; */
import PropTypes from "prop-types";
/* import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../store/users"; */
/* import { loadNotesList } from "../../../store/notes"; */

function AppLoader({ children }) {
    /* const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn()); */
    /* const usersStatusLoading = useSelector(getUsersLoadingStatus()); */
    /* useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadNotesList());
        }
    }, [isLoggedIn]);
    if (!isLoggedIn) return "Loading..."; */
    return children;
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
