import {useState , useEffect} from "react";
import axios from "axios";
import {useTheme1} from "../../Context/AnlikContext";
import {useTheme2} from "../../Context/HaftalikContext";

function Arama(){
    
    const {setHavaDurumuAnlik} = useTheme1();
    const {setHavaDurumuHaftalik} = useTheme2();
    

    const api1 = {
        key : "f68b79f09532d4a3d41e112354ee470f",
        base : "https://api.openweathermap.org/data/2.5/weather",
    }

    const api2 = {
        key : "16dc9f36f74a4d08b94eed88cc71d6fa",
        base : "https://api.weatherbit.io/v2.0/forecast/daily",
    }

    const [sehir , setSehir] = useState([]);
    const [city , setCity] = useState("Adana")

    
    
// şehir isimleri ( sehir ) 'e eklendi.
    useEffect(() =>{
        axios("https://raw.githubusercontent.com/snrylmz/il-ilce-json/master/js/il-ilce.json")
        .then((aaa) => setSehir(aaa.data.data.map((bbb) =>(bbb.il_adi))))
    },[])


// tıklanan şehrin value'su ( city )'ye eklendi.
    const handleChange = (e) =>{
        setCity(e.target.value)
    }


// anlık api bilgilerini openweathermap'den aldık
    useEffect(() =>{
        axios(`${api1.base}?q=${city}&units=metric&lang=tr&appid=${api1.key} `)
        .then((aaa) => setHavaDurumuAnlik(aaa))
    },[city])


// 1 haftalık api bilgileri weatherbit'den aldık
    useEffect(() =>{
        axios(`${api2.base}?city=${city},TR&units=M&lang=tr&days=7&key=${api2.key}`)
        .then((aaa) => setHavaDurumuHaftalik(aaa))
    },[city])

  
 // şehir ismini yazdırdık. işin bitince kaldır..   
   {city != "" &&
   console.log(city)
    }


    return(
        <div className="sehirlerArkaPlan">
            <select className="sehir" name='sehirler' onChange={handleChange}>
                {sehir.map((ccc) => (
                    <option key={ccc} value={ccc}>{ccc}</option>
                ))}        
            </select>
        </div>
    )
}
export default Arama;