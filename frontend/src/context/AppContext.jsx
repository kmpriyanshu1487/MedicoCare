import { createContext } from "react";
import PropTypes from "prop-types"; // For prop validation
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const currenctSymbol='$'
    const value = {
        doctors, currenctSymbol
    };
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default AppContextProvider;
