function $(select) {
    return document.querySelectorAll(select);
}

class createElem {
    constructor(element, src, className, parent) {
        let elem = document.createElement(element);
        elem.src = src;
        elem.className = className;
        parent.appendChild(elem);
        return elem;
    }
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

let flexsArr = [

    icon = [{ src: "images/fire.png" }, { src: "images/water.png" }, { src: "images/light.png" }],

    {
        src: "images/mobile-operator.png",
    },
    {
        src: "images/bank-xidmetleri.png",

    },
    {
        src: "images/DB.png",

    },
    {
        src: "images/TV.png",

    },
    {
        src: "images/internet.png",

    },
    {
        src: "images/telephone.png",

    },
    {
        src: "images/game.png",

    },
    {
        src: "images/e-pulqabi.png",

    }
]

function Create() {
    let container = new createElem("div", null, "container", document.body);
    let header = new createElem("div", null, "header", container);
    let timePart = new createElem("div", null, "timePart", header);
    let pTime = new createElem("p", null, "pTime", timePart);
    let logoPart = new createElem("div", null, "logoPart", header);
    let logoImg = new createElem("img", "images/E-manat.png", "logoImg", logoPart);
    let logoImgInfo = new createElem("img", "images/info.png", "logoImgInfo", logoPart);
    let flagPart = new createElem("div", null, "flagPart", header);
    let logoIng = new createElem("img", "images/ING.png", "logoFlag", flagPart);
    let logoRu = new createElem("img", "images/RU.png", "logoFlag", flagPart);
    let logoAze = new createElem("img", "images/AZE.png", "logoFlag", flagPart);
    let navPart = new createElem("div", null, "navPart", container);
    for (let i = 0; i < topPartArr.length; i++) {
        let flexElem = new createElem("div", null, "flexElem", navPart);
        let flexItemImg = new createElem("img", topPartArr[i].src, "flexItemImg", flexElem)
    }
    let main = new createElem("div", null, "main", container);
    let mainAdvertLeft = new createElem("div", null, "mainAdvertLeft", main);
    let mainFlex = new createElem("div", null, "mainFlex", main);
    let btnFirst = new createElem("button", null, "btnFirst", mainFlex);
    let mainLeftIcon = new createElem("img", "images/mainLeftIcon.png", "mainIcon", btnFirst);
    let mainFlexDiv = new createElem("div", null, "mainFlexDiv", mainFlex);
    for (let i = 0; i < 9; i++) {
        mainFlexs = new createElem("div", null, "mainFlexs", mainFlexDiv);
        if (i == 0) {
            for (let k = 0; k < flexsArr[i].length; k++) {
                flexsIcon = new createElem("img", flexsArr[i][k].src, "firstFlexsIcon", mainFlexs);
            }
        }
        else {
            flexsIcon = new createElem("img", flexsArr[i].src, "flexsIcon", mainFlexs);
        }
        let flexsText=new createElem("h3",null,"flexsText",mainFlexs);
    }
    let btnSecond = new createElem("button", null, "btnSecond", mainFlex);
    let mainRightIcon = new createElem("img", "images/mainRightIcon.png", "mainIcon", btnSecond);
    let mainAdvertRight = new createElem("div", null, "mainAdvertRight", main);
    let footer = new createElem("div", null, "footer", container);
    let footerText = new createElem("p",null,"footerText",footer);
}

Create();