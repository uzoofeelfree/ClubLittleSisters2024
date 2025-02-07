let str1 = "편지봉투를";
let str2 = "클릭하세요";
let strKor = str1 + "&nbsp;" + "&nbsp;" + str2; // "편지봉투를 클릭하세요"

let str3 = "click";
let str4 = "on";
let str5 = "the";
let str6 = "envelop";
let strEng =
  str3 +
  "&nbsp;" +
  "&nbsp;" +
  str4 +
  "&nbsp;" +
  "&nbsp;" +
  str5 +
  "&nbsp;" +
  "&nbsp;" +
  str6; // "click on the envelop"

let str7 = "cliquez";
let str8 = "sur";
let str9 = "l'enveloppe";
let strFr = str7 + "&nbsp;" + "&nbsp;" + str8 + "&nbsp;" + "&nbsp;" + str9; //cliquez sur l'enveloppe

//var spansKor = "<span>" + strKor.split("").join("</span><span>") + "</span>";
var spansKor = "<span>" + strKor.split("").join("</span><span>") + "</span>";
spansKor = strKor.replace(/&nbsp;|./g, (char) => `<span>${char}</span>`);

//EN
var spansEng = "<span>" + strEng.split("").join("</span><span>") + "</span>";
spansEng = strEng.replace(/&nbsp;|./g, (char) => `<span>${char}</span>`);

//FR
var spansFr = "<span>" + strFr.split("").join("</span><span>") + "</span>";
spansFr = strFr.replace(/&nbsp;|./g, (char) => `<span>${char}</span>`);

  function textanimation1() {
    $(spansKor)
      .hide()
      .appendTo("#textEnvKR1")
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
  };

function textanimation2() {
  $("#textEnvKR1").empty();
  $(spansKor)
    .hide()
    .appendTo("#textEnvKR1")
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

function textanimation3() {
  $(spansEng)
    .hide()
    .appendTo("#textEnvEN1")
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

function textanimation4() {
  $("#textEnvEN1").empty();
  $(spansEng)
    .hide()
    .appendTo("#textEnvEN1")
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

function textanimation5() {
  $(spansFr)
    .hide()
    .appendTo("#textEnvFR1")
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

function textanimation6() {
  $("#textEnvFR1").empty();
  $(spansFr)
    .hide()
    .appendTo("#textEnvFR1")
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
/****2nd KR EN FR****/
function textanimation7() {
  $(spansKor)
    .hide()
    .appendTo("#textEnvKR2")
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

function textanimation8() {
  $("#textEnvKR2").empty();
  $(spansKor)
    .hide()
    .appendTo("#textEnvKR2")
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

function textanimation9() {
  $(spansEng)
    .hide()
    .appendTo("#textEnvEN2")
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

function textanimation10() {
  $("#textEnvEN2").empty();
  $(spansEng)
    .hide()
    .appendTo("#textEnvEN2")
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

function textanimation11() {
  $(spansFr)
    .hide()
    .appendTo("#textEnvFR2")
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

function textanimation12() {
  $("#textEnvFR2").empty();
  $(spansFr)
    .hide()
    .appendTo("#textEnvFR2")
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

textanimation1();
setInterval(textanimation2, 16000);//disappear KR1 text
textanimation3();
setInterval(textanimation4, 16000);//disappear EN1 text
textanimation5();
setInterval(textanimation6, 16000);//disappear FR1 text

textanimation7();
setInterval(textanimation8, 16000);//disappear KR1 text
textanimation9();
setInterval(textanimation10, 16000);//disappear EN1 text
textanimation11();
setInterval(textanimation12, 16000);//disappear FR1 text
