let gProtein = document.getElementById("protein_g_textbox");
let kcalProtein = document.getElementById("protein_kcal");
let gFat = document.getElementById("fat_g_textbox");
let kcalFat = document.getElementById("fat_kcal");
let gCarbo = document.getElementById("carbo_g_textbox");
let kcalCarbo = document.getElementById("carbo_kcal");
let kcalTotal = document.getElementById("total_kcal");
let kcalWbt = document.getElementById("wbt_kcal");
let kcalWw = document.getElementById("ww_kcal");
let valueWbt = document.getElementById("wbt");
let valueWw = document.getElementById("ww");
let perWbt = document.getElementById("wbt_percentage");
let perWw = document.getElementById("ww_percentage");

let countTotalKcal = () => {
    kcalTotal.innerText = Math.round(100*(parseFloat(kcalProtein.textContent) + parseFloat(kcalFat.textContent) + parseFloat(kcalCarbo.textContent))) / 100;
}

let sumExchanger = () => {
    kcalWbt.innerText = Math.round(100*(parseFloat(kcalProtein.textContent) + parseFloat(kcalFat.textContent))) / 100;
    kcalWw.innerText = parseFloat(kcalCarbo.textContent);
}

let countExchanger = () => {
    valueWbt.innerText = Math.round((parseFloat(kcalWbt.textContent))) / 100;
    valueWw.innerText = Math.round((parseFloat(kcalWw.textContent))) / 40;
}

let countExchangerPercentage = () => {
    let wbt = parseFloat(kcalWbt.textContent);
    let ww = parseFloat(kcalWw.textContent);
    let countedWbt = Math.round(wbt * 10000 / (wbt + ww)) / 100;
    let countedWw = Math.round(ww * 10000 / (wbt + ww)) / 100;
    let resultWbt, resultWw;

    if(isNaN(countedWbt) || isNaN(countedWw)) {
        resultWbt = ""
        resultWw = resultWbt;
    } else {
        resultWbt = countedWbt;
        resultWw = countedWw;
    }
    perWbt.innerText = resultWbt;
    perWw.innerText = resultWw;
}

let countAll = () => {
    countTotalKcal();
    sumExchanger();
    countExchanger();
    countExchangerPercentage();
}


let checkAndCount = (grams, kcals, counter) => {
    if (isNaN(grams.value)) {
        kcals.innerText = "Podaj liczbę";
    } else {
        kcals.innerText = Math.round(grams.value * counter * 100) / 100;
        countAll();
        document.getElementById("tester").innerText = typeof parseInt(kcalProtein.textContent);
    }  
}

gProtein.addEventListener("keyup", () => {
    checkAndCount(gProtein, kcalProtein, 4);
}, false);

gFat.addEventListener("keyup", () => {
    checkAndCount(gFat, kcalFat, 9);
}, false);

gCarbo.addEventListener("keyup", () => {
    checkAndCount(gCarbo, kcalCarbo, 4);
}, false);
