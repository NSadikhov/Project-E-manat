function $(select) {
    return document.querySelector(select);
}

function createElem(element, src, className, parent) {
    let elem = document.createElement(element);
    elem.src = src;
    elem.className = className;
    parent.appendChild(elem);
    return elem;
}

let topPartArr = [
    {
        src: "images/azerqaz.png",
    },
    {
        src: "images/azersu.png",
    },
    {
        src: "images/azercell.png",
    },
    {
        src: "images/bakcell.png",
    },
    {
        src: "images/nar.png",
    },
    {
        src: "images/azerisiq.png",
    },
    {
        src: "images/halkaSigorta.png",
    },
]


let months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
let days = ["bazar", "bazarertəsi", "çərşəmbə axşamı", "çərşəmbə", "cümə axşamı", "cümə", "şənbə"];

function Create() {
    let container = createElem("div", null, "container", document.body);
    let header = createElem("div", null, "header", container);
    let timePart = createElem("div", null, "timePart", header);
    let pTime = createElem("p", null, "pTime", timePart);
    let time = new Date();
    pTime.innerText = time.getHours() + ":" + time.getMinutes() + " " + time.getDay() + " " + months[time.getMonth()] + " " + days[time.getDay()];
    let logoPart = createElem("div", null, "logoPart", header);
    let logoImg = createElem("img", "images/E-manat.png", "logoImg", logoPart);
    let logoImgInfo = createElem("img", "images/info.png", "logoImgInfo", logoPart);
    let flagPart = createElem("div", null, "flagPart", header);
    let logoIng = createElem("img", "images/ING.png", "logoFlag", flagPart);
    let logoRu = createElem("img", "images/RU.png", "logoFlag", flagPart);
    let logoAze = createElem("img", "images/AZE.png", "logoFlag", flagPart);
    let navPart = createElem("div", null, "navPart", container);
    for (let i = 0; i < topPartArr.length; i++) {
        let flexElem = createElem("div", null, "flexElem", navPart);
        let flexItemImg=createElem("img",topPartArr[i].src,"flexItemImg",flexElem)
    }
}
Create();