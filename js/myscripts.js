//***
// Counter Buttons & Fields
var iCardCount = 18;
var cnt = 0;
var strPath = "./cards/";
var arrCards = new Array(iCardCount - 1);

resetCards();

function showNextCard() {
    cnt += 1;
    if (cnt > iCardCount) {
        resetCards();
        cnt = 0;
    }

    var strCard = "Card" + (arrCards[cnt] + 1) + ".png";
    document.getElementById("AutomaCard").src = strPath + strCard;
}

function resetCards() {
    var i;
    console.log("reshuffle");
    shuffle(arrCards);
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
