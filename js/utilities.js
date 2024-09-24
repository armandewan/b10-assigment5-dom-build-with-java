function getInputAmountFile(id){
const inputAdd = document.getElementById(id).value;
const inputNumber = parseFloat(inputAdd);

return inputNumber;

}

function getTextValueFile(id){
    const textAmount = document.getElementById(id).innerText;
    const textAmountNumber = parseFloat(textAmount);
    return textAmountNumber;
}

function donateHistory (donate,data){
    const time = new Date()
   const donation ={donate,text:data,time};
   history.push(donation);

}

