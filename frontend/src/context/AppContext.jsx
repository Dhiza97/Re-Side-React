import { createContext } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = "₦"
    const navigate = useNavigate();

    const value = {
        currency,
        navigate
    }

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
}

export default AppContextProvider;