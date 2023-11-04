// const fs = require('fs/promises');

// async function countFilesInPath(path) {
//   try {
//     const files = await fs.readdir(path);
//     return files.length;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// }

// // Example usage
// const path = '/path/to/your/specific/path';
// countFilesInPath(path)
//   .then(fileCount => {
//     console.log(`Number of files in ${path}: ${fileCount}`);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


let body = document.getElementsByTagName('body')[0];
let amount = 0;
let linksContiner = document.createElement('div');
linksContiner.classList.add('links-continer');

let homePath = '../index.html';
let homeAnchor = document.createElement('a');
homeAnchor.href=homePath;
let homeIcon = document.createElement('i');
homeIcon.classList.add('fa', 'fas', 'fa-home','home-icon');
homeAnchor.appendChild(homeIcon);
linksContiner.appendChild(homeAnchor);

let leftRight = document.createElement('div');
leftRight.classList.add('left-right');

let next = document.createElement('li');
let nextIcon = document.createElement('i');
nextIcon.classList.add('fa-solid', 'fa-chevron-left', 'left-link');
next.style.listStyle="none";
next.appendChild(nextIcon)

let previous = document.createElement('li');
let previousIcon = document.createElement('i');
previousIcon.classList.add('fa-solid', 'fa-chevron-right', 'right-link');
previous.appendChild(previousIcon);
previous.style.listStyle="none";


leftRight.appendChild(next);
leftRight.appendChild(previous);

linksContiner.appendChild(leftRight);

let pageLinks = document.createElement('div');
pageLinks.classList.add('page-links');

let ulLinks = document.createElement('ul');

for(let i=1;i<=34;i++){
    let li = document.createElement('li');
    let a = document.createElement('a')
    a.href=`./ch${i}.html`;
    a.innerHTML=i;
    li.appendChild(a);
    ulLinks.appendChild(li);
}
pageLinks.appendChild(ulLinks);
linksContiner.appendChild(pageLinks);
body.appendChild(linksContiner);



let divElemnts = document.querySelector('.links-continer');
var liElements = divElemnts.querySelectorAll('li');

var liLength = liElements.length-2;

next.addEventListener('click',function(){
    if(amount<0){
        amount +=100/liLength;
        divElemnts.querySelectorAll('ul')[0].style.transform=`translateX(${amount}%)`;
    }
});

previous.addEventListener('click',function(){
    if(amount > -(liLength-25)*(100/liLength)){
        amount -=100/liLength;
        divElemnts.querySelectorAll('ul')[0].style.transform=`translateX(${amount}%)`;
    } 
});

  linksContiner.addEventListener('mouseenter', function() {
    this.style.bottom = "2%";
    homeAnchor.style.left='5%';
    leftRight.style.right='5%';
  });

  linksContiner.addEventListener('mouseleave', function() {
    var that = this;
    setTimeout(function() {
      that.style.bottom = "-8%";
      homeAnchor.style.left='-10%';
      leftRight.style.right='-10%';
    }, 10000);
  });