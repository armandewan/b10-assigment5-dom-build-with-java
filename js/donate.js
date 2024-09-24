const history =[];

document.getElementById('noakhali-donate-btn')
.addEventListener('click',function(){   

const noakhaliInput = getInputAmountFile('noakhali-input');

const noakhaliAmount = getTextValueFile('noakhali-amount');
if(isNaN (noakhaliInput) || noakhaliInput < 0){
    alert('please look carefully and inter amount');
    return;
}
const balance = noakhaliInput + noakhaliAmount;

const defaultAmount = getTextValueFile("default-amount");
if(defaultAmount < noakhaliInput){
    alert('You have not enough money!');
    return;
}
document.getElementById('noakhali-amount').innerText = balance;
const newAmount = defaultAmount - noakhaliInput;
document.getElementById("default-amount").innerText = newAmount;
document.getElementById('noakhali-input').value = "";
 const text = noakhaliInput +" Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";
donateHistory(noakhaliInput, text);
 document.getElementById('my_modal_1').showModal();
})

document.getElementById("fani-donate-btn")
.addEventListener('click',function(){  

const faniInput = getInputAmountFile("fani-input");

const faniAmount = getTextValueFile('fani-amount');
if(isNaN (faniInput) || faniInput < 0 ){
    alert('please look carefully and inter amount');
    return;
}
const balance = faniInput + faniAmount;
const defaultAmount = getTextValueFile("default-amount");
if(defaultAmount < faniInput){
    alert('You have not enough money!');
    return;
}
document.getElementById('fani-amount').innerText = balance;
const newAmount = defaultAmount - faniInput;
document.getElementById("default-amount").innerText = newAmount;
document.getElementById("fani-input").value = "";
const text = faniInput + 'Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh';
donateHistory(faniInput, text);
document.getElementById('my_modal_1').showModal();
})

document.getElementById("injured-donate-btn")
.addEventListener('click',function(){
   
const injuredInput = getInputAmountFile("injured-input");

const injuredAmount = getTextValueFile('injured-for-money');
if(isNaN (injuredInput) || injuredInput < 0){
    alert('please look carefully and inter money');
    return;
}
const balance = injuredInput + injuredAmount;
const defaultAmount = getTextValueFile("default-amount");
if(defaultAmount < injuredInput){
    alert('You have not enough money!');
    return;
}
document.getElementById('injured-for-money').innerText = balance;

const newAmount = defaultAmount - injuredInput;
document.getElementById("default-amount").innerText = newAmount;
document.getElementById("injured-input").value = "";
const text = injuredInput +" Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";
donateHistory(injuredInput, text);
document.getElementById('my_modal_1').showModal();
})
// history discrive
function historyElement(){
    const historyList = document.getElementById('history-list')
    history.forEach(element => {
        const li = document.createElement('li');
        li.classList.add("p-2", 'border-2','rounded-md','border-slate-400','my-1');
        li.innerHTML =`
        <p> ${element.text}</p>
        <p class="from-neutral-500">Date: ${element.time}</p>
        `
        historyList.appendChild(li);
    });
    
}

