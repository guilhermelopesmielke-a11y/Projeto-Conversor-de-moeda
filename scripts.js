const convertButton= document.querySelector(".convert-button")
const currencyFromSelect=document.querySelector(".currency-from")
const currencyToSelect=document.querySelector(".currency-to")
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert= document.querySelector(".currency-value-to-convert")
    const currencyValueConverted= document.querySelector(".currency-value")

    const rates={
        real:1,
        dolar:5.2,
        euro:6.2,
        libra:7.0,
        bitcoin:562709.92
    }
     
    const from = currencyFromSelect.value
    const to=currencyToSelect.value

    const valueInReal=inputCurrencyValue*rates[from]
    const convertedValue=valueInReal/rates[to]

    const formats = {
    real: ["pt-BR", { style: "currency", currency: "BRL" }],
    dolar: ["en-US", { style: "currency", currency: "USD" }],
    euro: ["de-DE", { style: "currency", currency: "EUR" }],
    libra: ["en-GB", { style: "currency", currency: "GBP" }],
    bitcoin: ["en-US", { style: "currency", currency: "BTC" }]
}


    currencyValueToConvert.innerHTML=Number(inputCurrencyValue).toLocaleString(...formats[from])
    currencyValueConverted.innerHTML=convertedValue.toLocaleString(...formats[to])
}

function changeCurrencyFrom(){

    const currencyName=document.querySelector(".currency")
    const currencyImage=document.querySelector(".img-to")

    if(currencyFromSelect.value=="dolar"){
        currencyName.innerHTML="Dólar americano"
        currencyImage.src="./assets/estados-unidos (1) 1.png"
    }

    if(currencyFromSelect.value=="euro"){
        currencyName.innerHTML="Euro"
        currencyImage.src="./assets/Design sem nome 3.png"
    }

    if(currencyFromSelect.value=="libra"){
        currencyName.innerHTML="Libra Esterlina"
        currencyImage.src="./assets/libra 1.png"
    }

    if(currencyFromSelect.value=="bitcoin"){
        currencyName.innerHTML="Bitcoin"
        currencyImage.src="./assets/bitcoin 1.png"
    }

    if(currencyFromSelect.value=="real"){
        currencyName.innerHTML="Real"
        currencyImage.src="./assets/brasil 2.png"
    }
    
    convertValues()
}

function changeCurrencyTo(){
    const currencyNameTo=document.querySelector(".currency-name")
    const currencyImageTo=document.querySelector(".currency-img")

    if(currencyToSelect.value=="dolar"){
        currencyNameTo.innerHTML="Dólar americano"
        currencyImageTo.src="./assets/estados-unidos (1) 1.png"
    }

    if(currencyToSelect.value=="euro"){
        currencyNameTo.innerHTML="Euro"
        currencyImageTo.src="./assets/Design sem nome 3.png"
    }

    if(currencyToSelect.value=="libra"){
        currencyNameTo.innerHTML="Libra Esterlina"
        currencyImageTo.src="./assets/libra 1.png"
    }

    if(currencyToSelect.value=="bitcoin"){
        currencyNameTo.innerHTML="Bitcoin"
        currencyImageTo.src="./assets/bitcoin 1.png"
    }

    if(currencyToSelect.value=="real"){
        currencyNameTo.innerHTML="Real"
        currencyImageTo.src="./assets/brasil 2.png"
    }
    
    convertValues()
}

currencyToSelect.addEventListener("change",changeCurrencyTo)
currencyFromSelect.addEventListener("change",changeCurrencyFrom)
convertButton.addEventListener("click",convertValues)