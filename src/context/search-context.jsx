import { createContext, useState } from "react";

export const searchContext = createContext(null);

const SearchContextProvider = (props) => {
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(true);

    const contextValue = {
        value,
        setValue,
        loading,
        setLoading
    };

    return ( 
        <searchContext.Provider value={contextValue}>
            {props.children}
        </searchContext.Provider>
     );
}
 
export default SearchContextProvider;