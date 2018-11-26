'use strict'

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const taImer={
  taimerStart :null,
  taimerDelta:null,
  isActife:false,
  id:null,
  // lab:[]

}
let p =document.querySelector('.time')
let reset =document.querySelector('.js-reset')
let  start2 =document.querySelector('.move')
let start =document.querySelector('.js-start')
let labul= document.querySelector('.js-take-lap')
let ul=document.querySelector('.laps')
function nOw(){
 taImer.taimerStart =  Date.now();
  if (!taImer.isActife){
    taImer.isActife=true;
    taImer.id = setInterval(taim,100)
    start.textContent='Pause'

  }else if (start.textContent==='Continue'){
    taImer.taimerStart= Date.now() -taImer.taimerDelta
    taImer.id = setInterval(taim,100)
    start.textContent='Pause'

  }
  else {
    clearInterval(taImer.id)
    start.textContent='Continue'
  }





function taim(){
  let two =Date.now()
  taImer.taimerDelta =two-taImer.taimerStart;
let sec =Math.floor(taImer.taimerDelta/1000%60);
let fsec=sec<10 ? `0${sec}`  :sec;
let i =Math.floor(taImer.taimerDelta
  /1000/60%60);
let min=i<10 ? `0${i}`: i;
console.log(i);
//   console.log(event);
  p.innerHTML=`${min}:${fsec}.${Math.floor(taImer.taimerDelta/100%10)}`

  // start.classList.remove('js-start')
  // start.classList.add('move')


}
}

function stopTime(){
  clearInterval(timEr)
  start.classList.remove('.move')
  start.classList.add('js-start')
}

function Reset(){
 
  p.textContent='00:00.0'
  clearInterval(taImer.id)
  taImer.isActife=false;
}

function labs(){
  let lab=[];
  lab.push(p.textContent);
for(let el of lab){
  let li=document.createElement('li');
  li.textContent=el;
  ul.append(li);
}
  console.log(lab);
}

start.addEventListener('click', nOw);
// // start.addEventListener('click',isActife==false ? nOw : stopTime);
// start2.addEventListener('click', stopTime);

labul.addEventListener('click',labs)
reset.addEventListener('click',Reset)