
import Container from './Bilesenler/Container';
import {HavaDurumuAnlikProvider} from "./Context/AnlikContext";
import {HavaDurumuHaftalikProvider} from "./Context/HaftalikContext";

function App() {
  return ( 
    <>
      <HavaDurumuAnlikProvider>
        <HavaDurumuHaftalikProvider>
          <Container />
        </HavaDurumuHaftalikProvider>
      </HavaDurumuAnlikProvider>    
    </>  
  );
}
export default App;


/*
import "./App.css"

import Container from "./deneme/Container";
import { ThemeProvider } from "./deneme/ThemeContext"
import { UserProvider } from "./deneme/UserContext";

function App(){
  return(
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
};
export default App;
*/