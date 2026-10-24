// æfing 1

// búa til breytur fyrir nafn, aldur og hvort við eigum gæludýr
// og console.log a það

const nafn = "HotMofo";
let aldur = 49;
const gaeludyr = true;
console.log(nafn, aldur, gaeludyr, aldur);
console.log("Hvað er í gangeeeeeeaaaha");
console.log(2 * 3);
console.log(7 / 6 + " erfið tala, drengz");

// 2 Nota typeof til að prenta út týpuna af breytunum okkar

console.log(typeof nafn); // string
console.log(typeof aldur); // númer
console.log(typeof gaeludyr); //boolean

// 3 Búa til breytu faedingarar og reiknaðu aldurin út frá árinu 2026

const faedingararar = 1977;
const reiknadurAldur = 2026 - faedingararar;
console.log("Og þá kemur út:", reiknadurAldur);

// 4 Það er ekkert búið að gerast meira með lyklaborðið
// Prenta strenginn ég heiti þetta og er  þetta ára bæði með bakkkomum, dollaramerki og curly wurlys
// og með bara plús

console.log("Ég heiti " + nafn + " og er " + aldur + " ára!");
console.log(`Ég heiti ${nafn} og er ${aldur} ára!`);

console.log(`to your own self be ${gaeludyr}`);

//prófa að breyta const og sjá hvað gerist

//nafn = "Sjomle";

// æfing 2 verður sexi IF else og föll

// 1. Skeila true ef aldurinn er 18 eða meira, annars skila false
function erFullordin(aldur) {
  return aldur >= 18;
}

console.log(erFullordin(20));
console.log(erFullordin(3));
console.log(erFullordin(18));

//einkunn skila frábært ef einkunn er 90+,
// gott ef það er 70-89
// staðið ef það er 50-69
// fall ef það er undir50

//function fyrstaEinkunn(stig) {
//if ((stig = 69)) {
// return "noice, nice";
//} else {
// return "Gjemle gjemle þú drezl";
// }
//}

//console.log(fyrstaEinkunn(70));

// æfingin áfram eins og í tímanum þetta er vitlaust btw

function einkunn(stig) {
  if (stig >= 90) {
    return "frábært annað fresh";
  } else if (stig >= 70) {
    return "gott I guess";
  } else if (stig >= 50) {
    return "standari";
  } else if (stig > 68 < 70) {
    return "NIIIIIICE";
  } else if (stig < 50) {
    return "Fallinn kallinn";
  }
}

console.log(einkunn(99));
console.log(einkunn(89));
console.log(einkunn(65));
console.log(einkunn(69));
console.log(einkunn(40));

//3.Skila hvort að talan sé slétt tala eða oddatala
// notuð % en ef það er afgangur þá er það oddatala

function slettEdaOdda(tala) {
  if (tala % 2 === 0) {
    return "slétt tala";
  } else {
    return "oddatala";
  }
}

console.log(slettEdaOdda(6));
console.log(slettEdaOdda(377));

//4. reikna verð eftir afslátt

function verdEftirAfslatt(verd, afslattur) {
  return verd - (verd * afslattur) / 100;
}

console.log(verdEftirAfslatt(299999, 15));

//skila stærstu tölu af þremur

function staerst(tala1, tala2, tala3) {
  if (tala1 >= tala2 && tala1 >= tala3) {
    return tala1;
  } else if (tala2 >= tala3) {
    return tala2;
  } else {
    return tala3;
  }
}
console.log(staerst(3, 5, 9));
console.log(staerst(6, 3, 2));

//aukaæfing hjá mér úr tímanum

function sayHello() {
  alert("Halló!");
  console.log("smellt á takka");
}
