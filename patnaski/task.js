'use strict'


let body =document.querySelector('body');
// let ul= document.createElement('ul')
// let li=document.createElement('li')
// let li2=document.createElement('li')
// let li3=document.createElement('li')

// body.append(ul);

// ul.append(li,li2,li3);


// let spis = document.querySelectorAll('li');
// let arr = Array.from(spis)
// console.log(arr);

// for (let el of arr){
//     el.textContent=arr.indexOf(el);

// }
// let li4=document.createElement('li');
// ul.append(li4)
// let lit =document.querySelectorAll('li');
// console.log(lit);


// ul.style.display='flex';
// ul.style.justifyContent='flex-start';
// ul.style.listStyle='none';
// ul.style.width='200px';
// li.style.border='2px solid black';li.style.padding='10px';
// li2.style.border='2px solid black';li2.style.padding='10px';
// li3.style.border='2px solid black';li3.style.padding='10px';
// li4.style.border='2px solid black';li4.style.padding='10px';

let ul = document.querySelector('ul');
// let spis = document.querySelectorAll('li')
let ter= document.querySelectorAll('li');
let arr1 = Array.from(ter)
console.log(arr1);// 
// 1.функация при нажатие переходит вправо если там пусто
// 2.Функция при нажатии переходить влево если там пусто
// 3. функация при нажитие переходить вверх есдли там пусто
// 4.Функция при нажатии переходить вниз еслим там пусто
// 5. Крайние елементы справа или слева снизу и вверх  не должны выйти из области .

function move (){

    console.log(event.target.nextElementSibling);
    console.log(event.target);
  
   if(   arr1.includes(event.target.nextElementSibling) && event.target.nextElementSibling.textContent==''){
   
    console.log(event.target.nextElementSibling.textContent);

    event.target.nextElementSibling.textContent=event.target.textContent
    event.target.textContent ='';
    }else if ( arr1.includes(event.target.previousElementSibling) && event.target.previousElementSibling.textContent==="" ){
       if(arr1.indexOf(event.target.nextElementSibling)%4==0 && !event.target.previousElementSibling.textContent===""){
            console.log('what');
  }
        
        else {event.target.previousElementSibling.textContent=event.target.textContent
            event.target.textContent ='';}}
    else if ( arr1[(arr1.indexOf(event.target.nextElementSibling))+3]&& arr1[(arr1.indexOf(event.target.nextElementSibling)+3)].textContent===""){
        arr1[(arr1.indexOf(event.target.nextElementSibling)+3)].textContent=event.target.textContent;
         event.target.textContent ='';
     }
     else if (arr1[(arr1.indexOf(event.target)-4)].textContent==""){
        arr1[(arr1.indexOf(event.target)-4)].textContent=event.target.textContent;
         event.target.textContent ='';
     }
        // else if ()
    
        console.log(arr1[(arr1.indexOf(event.target.nextElementSibling))+3])
        console.log(arr1.includes(event.target.previousElementSibling));
        ;
        console.log(arr1[(arr1.indexOf(event.target.nextElementSibling)+3)].textContent==="");
}
ul.addEventListener('click',move);



 