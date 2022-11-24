function Resimler({durum}){

const hafifYagmurluFirtina = "https://www.weatherbit.io/static/img/icons/t01d.png"
const yagmurluFirtina = "https://www.weatherbit.io/static/img/icons/t02d.png"
const siddetliYagmurIleFirtina = "https://www.weatherbit.io/static/img/icons/t03d.png"
const hafifCiseleyenFirtina = "https://www.weatherbit.io/static/img/icons/t04d.png"
const ciseleyenYagmur = "https://www.weatherbit.io/static/img/icons/t04d.png"
const siddetliCisentiIleFirtina = "https://www.weatherbit.io/static/img/icons/t04d.png"
const doluIleFirtina = "https://www.weatherbit.io/static/img/icons/t05d.png"
const hafifCiseleyenYagmur = "https://www.weatherbit.io/static/img/icons/d01d.png"
const yogunCiseleyenYagmur = "https://www.weatherbit.io/static/img/icons/d03d.png"
const hafifYagmur = "https://www.weatherbit.io/static/img/icons/r01d.png"
const ilimliYagmur = "https://www.weatherbit.io/static/img/icons/r02d.png"
const yogunYagis = "https://www.weatherbit.io/static/img/icons/r03d.png"
const dondurucuYagmur = "https://www.weatherbit.io/static/img/icons/f01d.png"
const dusYagmur = "https://www.weatherbit.io/static/img/icons/r05d.png"
const siddetliSaganakYagmur = "https://www.weatherbit.io/static/img/icons/r06d.png"
const hafifKar = "https://www.weatherbit.io/static/img/icons/s01d.png"
const kar = "https://www.weatherbit.io/static/img/icons/s02d.png"
const yogunKarYagisi = "https://www.weatherbit.io/static/img/icons/s03d.png"
const karYagmurKarisimi = "https://www.weatherbit.io/static/img/icons/s04d.png"
const suluKar = "https://www.weatherbit.io/static/img/icons/s05d.png"
const yogunSuluKar = "https://www.weatherbit.io/static/img/icons/s05d.png"
const karDusu = "https://www.weatherbit.io/static/img/icons/s01d.png"
const telaslar = "https://www.weatherbit.io/static/img/icons/s06d.png"
const sis = "https://www.weatherbit.io/static/img/icons/a01d.png"
const sigaraIcmek = "https://www.weatherbit.io/static/img/icons/a02d.png"
const pus = "https://www.weatherbit.io/static/img/icons/a03d.png"
const dondurucuSis = "https://www.weatherbit.io/static/img/icons/a06d.png"
const acikHava = "https://www.weatherbit.io/static/img/icons/c01d.png"
const bulutlar = "https://www.weatherbit.io/static/img/icons/c02d.png"
const daginikBulutlar = "https://www.weatherbit.io/static/img/icons/c02d.png"
const kirikBulutlar = "https://www.weatherbit.io/static/img/icons/c03d.png"
const bulutluBulutlar = "https://www.weatherbit.io/static/img/icons/c04d.png"
const bilinmeyenYagis = "https://www.weatherbit.io/static/img/icons/u00d.png"



    switch(durum){
        case 200 :
            return <img src={hafifYagmurluFirtina} ></img> 
        case 201 :
            return <img src={yagmurluFirtina} ></img>
        case 202 :
            return <img src={siddetliYagmurIleFirtina} ></img> 
        case 230 :
            return <img src={hafifCiseleyenFirtina} ></img> 
        case 231 :
            return <img src={ciseleyenYagmur} ></img> 
        case 232 :
            return <img src={siddetliCisentiIleFirtina} ></img>
        case 233 :
            return <img src={doluIleFirtina} ></img> 
        case 300 :
            return <img src={hafifCiseleyenYagmur} ></img>
        case 302 :
            return <img src={yogunCiseleyenYagmur} ></img> 
        case 500 :
            return <img src={hafifYagmur} ></img>
        case 501 :
            return <img src={ilimliYagmur} ></img> 
        case 502 :
            return <img src={yogunYagis} ></img>
        case 511 :
            return <img src={dondurucuYagmur} ></img> 
        case 521 :
            return <img src={dusYagmur} ></img>
        case 522 :
            return <img src={siddetliSaganakYagmur} ></img> 
        case 600 :
            return <img src={hafifKar} ></img>
        case 601 :
            return <img src={kar} ></img> 
        case 602 :
            return <img src={yogunKarYagisi} ></img>
        case 610 :
            return <img src={karYagmurKarisimi} ></img> 
        case 611 :
            return <img src={suluKar} ></img>
        case 612 :
            return <img src={yogunSuluKar} ></img> 
        case 621 :
            return <img src={karDusu} ></img>
        case 623 :
            return <img src={telaslar} ></img> 
        case 700 :
            return <img src={sis} ></img>
        case 711 :
            return <img src={sigaraIcmek} ></img> 
        case 721 :
            return <img src={pus} ></img>
        case 751 :
            return <img src={dondurucuSis} ></img> 
        case 800 :
            return <img src={acikHava} ></img>
        case 801 :
            return <img src={bulutlar} ></img> 
        case 802 :
            return <img src={daginikBulutlar} ></img>
        case 803 :
            return <img src={kirikBulutlar} ></img> 
        case 804 :
            return <img src={bulutluBulutlar} ></img>
        default:
            return <img src={bilinmeyenYagis} ></img>        
    }
}
export default Resimler;
