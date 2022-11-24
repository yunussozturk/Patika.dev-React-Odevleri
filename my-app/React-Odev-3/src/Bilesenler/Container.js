import '../App.css';
import ArkaPlan from "./ArkaPlan"
import Arama from "./Arama"
import Sonuc from './Sonuc/index';


function Container() {
  return (
    <div className="App">
        <ArkaPlan />
        <br />
        <Arama />
        <br />
        <Sonuc />
    </div>
  );
}
export default Container;
