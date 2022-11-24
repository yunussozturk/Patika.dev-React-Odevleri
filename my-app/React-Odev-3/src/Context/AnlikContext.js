import {createContext , useState , useContext} from "react";

const HavaDurumuAnlikContext = createContext();

export const HavaDurumuAnlikProvider = ({children}) =>{

    const [havaDurumuAnlik , setHavaDurumuAnlik] = useState({});

    const values = {havaDurumuAnlik , 
        setHavaDurumuAnlik,
    }

    return(
        <HavaDurumuAnlikContext.Provider value={values}>
            {children}
        </HavaDurumuAnlikContext.Provider>
    );
};

export const useTheme1 = () => useContext(HavaDurumuAnlikContext);


