

import Resimler from "./Resimler"

function Sonuc({havaDurumuAnlik }){

    let tarih = new Date();
    const days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];

//    console.log(havaDurumuAnlik.data.weather[0].id)

    return(
        <>
            

            {typeof havaDurumuAnlik != "undefined" && (

            <div>
            
            <div className="anlikHava">
                <div className="anlikHavaResim" >    
                    <Resimler  durum={"800"} />
                    <div className="anlikHavaDurum">Açık</div>
                </div>
                <div className="anlikHavaDerece">
                    33°C
                </div>
            </div>

            <div className="kutular">
                <div className="kutuBuGun">
                    <div className="gun">{days[((tarih.getDay())%7)]}</div>
                    <div className="derece">12°C</div>                   
                    <Resimler durum={"600"} />
                    <div className="durum">Açık</div>    
                    <div>
                        <div className="maxSicaklik">12°C</div>
                        <div className="minSicaklik">12°C</div>
                    </div>   
                </div>
                
                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+1)%7]}</div>
                    <div className="derece">12°C</div>                   
                    <img src="{cokBulutlu}" ></img>
                    <div className="durum">Açık</div>                    
                    <div>
                        <div className="maxSicaklik">12°C</div>
                        <div className="minSicaklik">12°C</div>
                    </div> 
                </div>
                
                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+2)%7]}</div>
                    <div className="derece">12°C</div>                   
                    <img src="{saganakYagisli}" ></img>
                    <div className="durum">Açık</div>
                    <div>
                        <div className="maxSicaklik">12°C</div>
                        <div className="minSicaklik">12°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+3)%7]}</div>
                    <div className="derece">12°C</div>                   
                    <img src="{azBulutlu}" ></img>
                    <div className="durum">Açık</div>
                    <div>
                        <div className="maxSicaklik">12°C</div>
                        <div className="minSicaklik">12°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+4)%7]}</div>
                    <div className="derece">12°C</div>                   
                    <img src="{yerYerYagisli}" ></img>
                    <div className="durum">Açık</div>
                    <div>
                        <div className="maxSicaklik">12°C</div>
                        <div className="minSicaklik">12°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+5)%7]}</div>
                    <div className="derece">12°C</div>                   
                    <img src="{yagmurVeKar}" ></img>
                    <div className="durum">Açık</div>
                    <div>
                        <div className="maxSicaklik">12°C</div>
                        <div className="minSicaklik">12°C</div>                       
                    </div>                    
                </div>

                <div className="kutu">
                    <div className="gun">{days[(tarih.getDay()+6)%7]}</div>
                    <div className="derece">12°C</div>                   
                    <img src="{saganakKarYagisi}" ></img>
                    <div className="durum">Açık</div>
                    <div>
                        <div className="maxSicaklik">12°C</div>
                        <div className="minSicaklik">12°C</div>                       
                    </div>                    
                </div>                
            </div>
            </div>
            )}
            <br /><br /><br /><br />

            <div>y</div>
        </> 
    )
}
export default Sonuc;