let amount = 0;

let divElemnts = document.querySelector('.links-continer');
var liElements = divElemnts.querySelectorAll('li');

function privuosLink(){
    if(amount > -(liElements.length-25)*(100/liElements.length)){
        amount -=100/liElements.length;
        divElemnts.querySelectorAll('ul')[0].style.transform=`translateX(${amount}%)`;
    }  
}

function nextLink(){

    if(amount<0){
        amount +=100/liElements.length;
        divElemnts.querySelectorAll('ul')[0].style.transform=`translateX(${amount}%)`;
    }
}