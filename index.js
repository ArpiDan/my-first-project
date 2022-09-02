"use strict";
// Առաջադրանք
//ունեք 2 զանգված, առաջին զանգվածը իր մեջ պետք է պահի անուններ, 2-րդ զանգվածը պետք է պահի ազգանուններ,ու էնպես պետք ա 
//անեք, որ ռանդոմ անուն ազգանուններ գեներացվեն HTMLի վրա, գեներացվելուց հետո պետք է լոգիկա մշակել, որը անունով
// կհասկանա այդ մարդը կին է, թե տղամարդ, ու կանանց առանձնացնում եք մեկ այլ բլոկի (div) տղամարդկանց մեկ այլ

const names = ["Adelina", "Arpine", "Armen", "Ani", "Areg", "Natali"];
const lastNames = ["Hovhannisyan", "Danielyan", "Asatryan", "Karapetyan", "Martirosyan"];
const mens = document.querySelector(".sr .men ");
const womens = document.querySelector(".sr .women");
const image = document.querySelector("#nkar");



function randomMW(e) {
   let WM = Math.floor(Math.random() * names.length);
   let LN = Math.floor(Math.random() * lastNames.length);
      if (names[WM] === names[0] || names[WM] === names[1] || names[WM] === names[3] || names[WM] === names[5]) {
       womens.innerHTML = `${names[WM]} ${lastNames[LN]}`;
   } else {
      mens.innerHTML = `${names[WM]} ${lastNames[LN]}`;
   }
}

randomMW();
image.addEventListener("click", randomMW);
