//***
// Counter Buttons & Fields
var iCardCount = 18;
var cnt = 0;
var strPath = "./cards/";
var arrCards = new Array(iCardCount - 1);


window.addEventListener("load", (event) => {
    initializeCards();
  });

function initializeCards() {
    initArray();
    resetCards();
    showNextCard();
}

function showNextCard() {
    cnt += 1;
    if (cnt >= iCardCount) {
        resetCards();
        cnt = 0;
    }
    console.log(arrCards[cnt] + 1);
    var strCard = "Card" + (arrCards[cnt]) + ".png";
    document.getElementById("AutomaCard").src = strPath + strCard;
}

function initArray() {
    for (i=0; i < iCardCount; i++) {
        arrCards[i] = i+1;
    }
}
function resetCards() {
    var i;
    console.log("reshuffle");
    shuffle(arrCards);
    document.getElementById("alertReshuffle").style.display = "block";
    setTimeout(function(){document.getElementById("alertReshuffle").style.display = "none"}, 1000);

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

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function showPage1() {
    document.getElementById("imgPage1").style.display = "block";
}
function hidePage1() {
    document.getElementById("imgPage1").style.display = "none";
}
function showPage2() {
    document.getElementById("imgPage2").style.display = "block";
}
function hidePage2() {
    document.getElementById("imgPage2").style.display = "none";
}
