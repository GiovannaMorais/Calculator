const b0 = document.querySelector(".b0");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");
const b8 = document.querySelector(".b8");
const b9 = document.querySelector(".b9");
// console.log(b9)
const bC = document.querySelector(".bC");
const sum = document.querySelector(".sum");
const div = document.querySelector(".div");
const sub = document.querySelector(".sub");
const mult = document.querySelector(".mult");
const telinha = document.querySelector(".telinha");
const dark = document.querySelector(".dark");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
const operadores = document.querySelectorAll(".operadores");
const numerosB = document.querySelectorAll(".but")
const apagar = document.querySelector('.apagar')

const exp = document.querySelector(".exp");
const pont = document.querySelector(".pont");
const porce = document.querySelector(".porce");
const body = document.querySelector("body");


const arrayButtons = []
arrayButtons.push(b0)
arrayButtons.push(b1)
arrayButtons.push(b2)
arrayButtons.push(b3)
arrayButtons.push(b4)
arrayButtons.push(b5)
arrayButtons.push(b6)
arrayButtons.push(b7)
arrayButtons.push(b8)
arrayButtons.push(b9)

 
    for(let index = 0 ;index < arrayButtons.length;index +=1 ){
        const button = arrayButtons[index]
        button.addEventListener('click',(event) => {
            if(telinha.innerHTML === '' || telinha.innerHTML === '0' || telinha.innerHTML === undefined) {
                return telinha.innerHTML  =  event.target.innerHTML 
            }else{
                 telinha.innerHTML +=  event.target.innerHTML
                
            }
            tamanho()
        })
    }

    bC.addEventListener( 'click',() => {
        telinha.innerHTML = 0
           
    })



const arrayOperation =[]
arrayOperation.push(sum)
arrayOperation.push(sub)
arrayOperation.push(mult)
arrayOperation.push(div)
arrayOperation.push(exp)


arrayOperation.push(porce)
arrayOperation.push(pont)


    for(let index = 0 ;index < arrayOperation.length;index +=1 ){
        const button = arrayOperation[index]
        button.addEventListener('click',() => {
            tamanho()
            const numero = telinha.innerHTML += button.value
            return numero

    })
 }

// const operator = () => {
// // result.addEventListener('click',() => {
//     for(let index = 0 ;index < arrayButtons.length;index +=1 ){
//         const button = arrayButtons[index]
//         button.addEventListener('click',() => {
//            if (operadores.value === "+") return eval(telinha.innerHTML );
//         //    console.log("eval(telinha.innerHTML +  telinha.innerHTML)", eval(telinha.innerHTML +  visor.innerHTML));
//            if (operadores.value === "-") return eval(telinha.innerHTML)
//         //    console.log("eval(telinha.innerHTML -  visor.innerHTML)", eval(telinha.innerHTML));
//            if (operadores.value === "÷") return eval(telinha.innerHTML)
//         //    console.log(visor.innerHTML)
//            console.log("eval", eval(telinha.innerHTML ));
//            if (operadores.value === "x") return eval(telinha.innerHTML)
//         //    console.log("eval(telinha.innerHTML *  visor.innerHTML)", eval(telinha.innerHTML *  visor.innerHTML));


// })
  
// };
// }
// operator()


const operator = () => {
    const test = eval(telinha.innerHTML)
    console.log("telinha.innerHTML", test);
    if(operadores && telinha.innerHTML !== '' ) {
   telinha.innerHTML = test
   return test
}
}

result.addEventListener('click',operator)
clear.addEventListener('click',() =>{
    telinha.innerHTML = 0;
})

apagar.addEventListener('click',() => {
    if(telinha.innerHTML.length > 0 ) {
        telinha.innerHTML=telinha.innerHTML.replace(/.{0,1}$/, '')
    }if(telinha.innerHTML === '') {
        telinha.innerHTML = 0
    }
    
})


const tamanho = () => {
    const tela =telinha.innerHTML.substring(0,telinha.innerHTML.length -8)
    
    if(telinha.innerHTML.length > 13  === true ){

        console.log("telinha.innerHTML.length", telinha.innerHTML.length);
        telinha.innerHTML = Number(tela).toFixed(2) + 'e'

    }
}
tamanho()


const mode = () => {

    body.classList.contains('ativa') ? 
    dark.textContent = 'Dark Mode' :  dark.textContent = 'Light Mode'
    body.classList.toggle('ativa')
}


    dark.addEventListener('click',mode)


    window.onload = () => {
        body.classList.add('ativa')
    }