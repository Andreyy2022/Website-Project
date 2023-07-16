
let arr = [
    'https://anekdotovstreet.com/rabota-professii/parikmaher/',
    'https://kartinkof.club/jumor/prikolnie/4600-prikolnye-kartinki-pro-parikmahera-51-foto.html',
    'https://www.anekdotovmir.ru/anekdoty-pro/anekdoty-pro-zhenshhin/anekdoty-pro-prichesku/anekdoty-pro-parikmaxerskuyu/anekdoty-pro-parikmaxera/',
    'https://fydi.ru/prikolnye-kartinki-pro-parikmaherov-30-foto/',
    'https://etimolog.ucoz.ru/index/shutki_i_anekdoty_pro_parikmakherskuju/0-694',
    'https://krot.info/smeshnye/100456-prikoly-pro-parikmaherov.html',
    'https://www.vysokovskiy.ru/anekdot/parikmaher/1/',
    'https://mykaleidoscope.ru/x/jemocii/31517-smeshnoy-parikmaher-64-foto.html',
    'https://myfunnyday.ru/anekdoty/anekdoty-pro-parikmaherov.html'
];

function getRandomArrayElement(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

document.getElementById('link_3').onclick = function() {
    this.href = getRandomArrayElement(arr);

}