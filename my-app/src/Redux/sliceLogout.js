import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../Redux/sliceLogin";
import { getFirstName } from "../Redux/sliceFirstname";
import { Navigate } from "react-router-dom";

function Logout() {
    // Change le token
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToken(0));
        dispatch(getFirstName(""));
        localStorage.removeItem("token");
    });
    

    // Redirection
    return <Navigate to="/" /> 
}

export default Logout;