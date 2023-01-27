//***
// Counter Buttons & Fields
var iCardCount = 18;
var cnt = 0;
var strPath = "./cards/";
var arrCards = new Array(iCardCount - 1);

resetCards();

function nextCard() {
    cnt += 1;
    if (cnt > iCardCount) {
        resetCards();
        cnt = 0;
    }

    var strCard = "Card" + getNextCard() + ".png";
    document.getElementById("AutomaCard").src = strPath + strCard;
}

function resetCards() {
    var i;
    console.log("reshuffle");
    for (i=0; i < iCardCount; i++) {
        arrCards[i] = 0;
    }
}

function getNextCard() {
    var res = 1;
    var i = 0;
    while (res == 1) {
        i = Math.floor(Math.random() * iCardCount);
        res = arrCards[i];
        //console.log(i + " - " + res);
    }
    arrCards[i] = 1;
    return(i+1);
}