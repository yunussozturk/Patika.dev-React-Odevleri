import {createContext , useState , useContext} from "react";

const HavaDurumuHaftalikContext = createContext();

export const HavaDurumuHaftalikProvider = ({children}) =>{

    const [havaDurumuHaftalik , setHavaDurumuHaftalik] = useState({});

    const values = {havaDurumuHaftalik , 
        setHavaDurumuHaftalik,
    };

    return(
        <HavaDurumuHaftalikContext.Provider value={values}>
            {children}
        </HavaDurumuHaftalikContext.Provider>
    );
};

export const useTheme2 = () => useContext(HavaDurumuHaftalikContext);
