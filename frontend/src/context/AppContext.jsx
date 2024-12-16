import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { properties } from "../assets/assets";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const currency = "₦"
    const navigate = useNavigate();

    const value = {
        currency,
        navigate,
        properties,
        backendUrl,
    }

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
}

export default AppContextProvider;