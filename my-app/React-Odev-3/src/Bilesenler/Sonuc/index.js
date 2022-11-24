import Resimler from "./Resimler"
import {useTheme1} from "../../Context/AnlikContext";
import {useTheme2} from "../../Context/HaftalikContext";

function Sonuc(){

    const {havaDurumuAnlik} = useTheme1();
    const {havaDurumuHaftalik} = useTheme2();

    let tarih = new Date();
    const days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];

    //console.log(havaDurumuAnlik.data.weather[0].id)
    /**
      
      
      <Resimler durum={havaDurumuHaftalik.data.data[1].weather.code} />
     
    */
    

    return(
        <>
            {typeof havaDurumuAnlik != "undefined" && (

            <div>
            
            <div className="anlikHava">
                <div className="anlikHavaResim" >
                    <Resimler  durum={havaDurumuAnlik.data.weather[0].id} />
                    <div className="anlikHavaDurum">{havaDurumuAnlik.data.weather[0].description}</div>
                </div>
                <div className="anlikHavaDerece">
                    {Math.round(havaDurumuAnlik.data.main.temp)}°C
                </div>
            </div>

            <div className="kutular">
                <div className="kutuBuGun">
                    <div className="gun">{days[((tarih.getDay())%7)]}</div>
                    <div className="derece">{Math.round(havaDurumuHaftalik.data.data[0].temp)}°C</div>                   
                    <Resimler durum={havaDurumuHaftalik.data.data[0].weather.code} />
                    <div className="durum">{havaDurumuHaftalik.data.data[0].weather.description}</div>    
                    <div>
                        <div className="maxSicaklik">{Math.round(havaDurumuHaftalik.data.data[0].max_temp)}°C</div>
                        <div className="minSicaklik">{Math.round(havaDurumuHaftalik.data.data[0].min_temp)}°C</div>
                    </div>   
                </div>
                
                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+1)%7]}</div>
                    <div className="derece">{Math.round(havaDurumuHaftalik.data.data[1].temp)}°C</div>                   
                    <Resimler durum={havaDurumuHaftalik.data.data[1].weather.code} />
                    <div className="durum">{havaDurumuHaftalik.data.data[1].weather.description}</div>                    
                    <div>
                        <div className="maxSicaklik">{Math.round(havaDurumuHaftalik.data.data[1].max_temp)}°C</div>
                        <div className="minSicaklik">{Math.round(havaDurumuHaftalik.data.data[1].min_temp)}°C</div>
                    </div> 
                </div>
                
                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+2)%7]}</div>
                    <div className="derece">{Math.round(havaDurumuHaftalik.data.data[2].temp)}°C</div>                   
                    <Resimler durum={havaDurumuHaftalik.data.data[2].weather.code} />
                    <div className="durum">{havaDurumuHaftalik.data.data[2].weather.description}</div>
                    <div>
                        <div className="maxSicaklik">{Math.round(havaDurumuHaftalik.data.data[2].max_temp)}°C</div>
                        <div className="minSicaklik">{Math.round(havaDurumuHaftalik.data.data[2].min_temp)}°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+3)%7]}</div>
                    <div className="derece">{Math.round(havaDurumuHaftalik.data.data[3].temp)}°C</div>                   
                    <Resimler durum={havaDurumuHaftalik.data.data[3].weather.code} />
                    <div className="durum">{havaDurumuHaftalik.data.data[3].weather.description}</div>
                    <div>
                        <div className="maxSicaklik">{Math.round(havaDurumuHaftalik.data.data[3].max_temp)}°C</div>
                        <div className="minSicaklik">{Math.round(havaDurumuHaftalik.data.data[3].min_temp)}°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+4)%7]}</div>
                    <div className="derece">{Math.round(havaDurumuHaftalik.data.data[4].temp)}°C</div>                   
                    <Resimler durum={havaDurumuHaftalik.data.data[4].weather.code} />
                    <div className="durum">{havaDurumuHaftalik.data.data[4].weather.description}</div>
                    <div>
                        <div className="maxSicaklik">{Math.round(havaDurumuHaftalik.data.data[4].max_temp)}°C</div>
                        <div className="minSicaklik">{Math.round(havaDurumuHaftalik.data.data[4].min_temp)}°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+5)%7]}</div>
                    <div className="derece">{Math.round(havaDurumuHaftalik.data.data[5].temp)}°C</div>                   
                    <Resimler durum={havaDurumuHaftalik.data.data[5].weather.code} />
                    <div className="durum">{havaDurumuHaftalik.data.data[5].weather.description}</div>
                    <div>
                        <div className="maxSicaklik">{Math.round(havaDurumuHaftalik.data.data[5].max_temp)}°C</div>
                        <div className="minSicaklik">{Math.round(havaDurumuHaftalik.data.data[5].min_temp)}°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+6)%7]}</div>
                    <div className="derece">{Math.round(havaDurumuHaftalik.data.data[6].temp)}°C</div>                   
                    <Resimler durum={havaDurumuHaftalik.data.data[6].weather.code} />
                    <div className="durum">{havaDurumuHaftalik.data.data[6].weather.description}</div>
                    <div>
                        <div className="maxSicaklik">{Math.round(havaDurumuHaftalik.data.data[6].max_temp)}°C</div>
                        <div className="minSicaklik">{Math.round(havaDurumuHaftalik.data.data[6].min_temp)}°C</div>                       
                    </div>                    
                </div>                
            </div>
            </div>
            )}
        </> 
    )
}
export default Sonuc;