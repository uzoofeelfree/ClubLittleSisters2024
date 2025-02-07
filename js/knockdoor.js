let doorstr1 = "문을";
let doorstr2 = "노크하세요";
// "문을 노크하세요"
let doorstrKor = doorstr1 + "&nbsp;" + "&nbsp;" + doorstr2; 

var doorspansKor =
  "<span>" + doorstrKor.split("").join("</span><span>") + "</span>";
doorspansKor = doorstrKor.replace(
  /&nbsp;|./g,
  (char) => `<span>${char}</span>`
);

//EN
let doorstr3 = "knock";
let doorstr4 = "on";
let doorstr5 = "the";
let doorstr6 = "door";
let doorstrEng =
  doorstr3 +
  "&nbsp;" +
  "&nbsp;" +
  doorstr4 +
  "&nbsp;" +
  "&nbsp;" +
  doorstr5 +
  "&nbsp;" +
  "&nbsp;" +
  doorstr6; // "knock on the door"

var doorspansEng =
  "<span>" + doorstrEng.split("").join("</span><span>") + "</span>";
doorspansEng = doorstrEng.replace(
  /&nbsp;|./g,
  (char) => `<span>${char}</span>`
);

//FR
//Frappez à la port
let doorstr7 = "Frappez";
let doorstr8 = "à";
let doorstr9 = "la";
let doorstr10 = "porte";
let doorstrFr =
  doorstr7 +
  "&nbsp;" +
  "&nbsp;" +
  doorstr8 +
  "&nbsp;" +
  "&nbsp;" +
  doorstr9 +
  "&nbsp;" +
  "&nbsp;" + doorstr10; //Frappe à la porte

var doorspansFr =
  "<span>" + doorstrFr.split("").join("</span><span>") + "</span>";
doorspansFr = doorstrFr.replace(/&nbsp;|./g, (char) => `<span>${char}</span>`);

function textImplication1() {
  $(doorspansKor)
    .hide()
    .appendTo("#textKnockDoorKR1 ")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

function textImplication2() {
  $("#textKnockDoorKR1").empty();
  $(doorspansKor)
    .hide()
    .appendTo("#textKnockDoorKR1")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
  //console.log("Continue");
}

function textImplication3() {
  $(doorspansEng)
    .hide()
    .appendTo("#textKnockDoorEN1")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
  //console.log("First order");
}

function textImplication4() {
  $("#textKnockDoorEN1").empty();
  $(doorspansEng)
    .hide()
    .appendTo("#textKnockDoorEN1")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
  //console.log("Continue");
}

function textImplication5() {
  $(doorspansFr)
    .hide()
    .appendTo("#textKnockDoorFR1")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

function textImplication6() {
  $("#textKnockDoorFR1").empty();
  $(doorspansFr)
    .hide()
    .appendTo("#textKnockDoorFR1")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

/****2nd KR EN FR****/
function textImplication7() {
  $(doorspansKor)
    .hide()
    .appendTo("#textKnockDoorKR2")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

function textImplication8() {
  $("#textKnockDoorKR2").empty();
  $(doorspansKor)
    .hide()
    .appendTo("#textKnockDoorKR2")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

function textImplication9() {
  $(doorspansEng)
    .hide()
    .appendTo("#textKnockDoorEN2")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

function textImplication10() {
  $("#textKnockDoorEN2").empty();
  $(doorspansEng)
    .hide()
    .appendTo("#textKnockDoorEN2")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

function textImplication11() {
  $(doorspansFr)
    .hide()
    .appendTo("#textKnockDoorFR2")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

function textImplication12() {
  $("#textKnockDoorFR2").empty();
  $(doorspansFr)
    .hide()
    .appendTo("#textKnockDoorFR2")
    .each(function (i) {
      $(this)
        .delay(400 * i)
        .fadeIn()
        .css("opacity", 0)
        .animate({ opacity: 1 }, 500);
      $(this)
        .delay(400 * i + 4400)
        .animate({ opacity: 0 });
    });
}

textImplication1();
setInterval(textImplication2, 16000); //disappear KR1 text
textImplication3();
setInterval(textImplication4, 16000); //disappear EN1 text
textImplication5();
setInterval(textImplication6, 16000); //disappear FR1 text

textImplication7();
setInterval(textImplication8, 16000); //disappear KR2 text
textImplication9();
setInterval(textImplication10, 16000); //disappear EN2 text
textImplication11();
setInterval(textImplication12, 16000); //disappear FR2 text
