"use strict"

let click=document.querySelector('.nav_menu')
let clickImg=document.querySelector('.img_menu');


const toggleMenu = () => {// Єто функция добовляет или приберает на нажатии меню
    click.classList.toggle('active');
    clickImg.classList.toggle('active');
  }
  
  clickImg.addEventListener('click', e => {
    e.stopPropagation();
  
    toggleMenu();
  });
  
  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == click || click.contains(target);
    let its_clickImg = target == clickImg;
    let click_is_active = click.classList.contains('active');
    
    if (!its_menu && !its_clickImg && click_is_active) {
      toggleMenu();
    }
  })

  const Card=[{
      title:'Легкий старт',
      desc:'Для тех, кто начинает изучение языка с нуля, желает получить  базовые знания. Вы расширяете лексический объём и получаете теорию по грамматике, каждый день применяете всё на практике.',
      img:'./img/icons8-knowledge-sharing-64One.png',
      price:'1050 ',
        sub:'1500 ',
      date:'грн./ 2 месяца',
      id:131,
  },{
    title:'Fluent in English ',
    desc:'Для тех, кто хочет быстро снять языковой барьер, увеличить словарный запас и начать общаться с иностранцами. Вы улучшите навык свободного и лёгкого общения на английском. ',
    img:'./img/icons8-voice-recognition-64Two.png',
    price:'4400 ',
    sub:'',
    date:'грн./ 6 месяцев',
    id:132,
},{
    title:'Будь готов к TOEFL',
    desc:'Специальный курс для тех, кто желает успешно сдать экзапмен TOEFL. Вы сможете решить задачи по чтению, аудированию, письму и говорению в отведённое время.',
    img:'./img/icons8-exam-64Three.png',
    price:'3500 ',
    sub:'',
    date:'грн./ 5 месяцев',
    id:133,
}]
let imgCard=document.querySelector('.sectionFive_img');
let titleCard=document.querySelector('.sectionFive_title');
let dateCard=document.querySelector('.sectionFive_date');
let descCard=document.querySelector('.sectionFive_desc');
let priceCard=document.querySelector('.sectionFive_price');
let subCard=document.querySelector('.sectionFive_sub');
let radio=document.querySelectorAll('.imgCard')

let rad=document.querySelector('.imgCardO');
let rad2=document.querySelector('.imgCardT');
let rad3=document.querySelector('.imgCardTh');

function changeCard(ev){
    let evt=ev.target.id;
    [...radio].map(el=>el.setAttribute('src',ev.target.src))
    console.log(ev.target.src);
   console.log(evt);
    let card=Card.filter(el=>el.id==evt);
    console.log(card);
    card.map(el=>{
        imgCard.setAttribute('src',el.img)
        console.log(el.img);
        console.log(imgCard);
        titleCard.textContent=el.title
        dateCard.textContent=el.date
        descCard.textContent=el.desc
        priceCard.textContent=el.price
        subCard.textContent=el.sub
        ev.target.setAttribute('src',"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2wAAAdsBV+WHHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHTSURBVEiJ7dZLTxNhFMbx/+k7svGyA23BBJSFX8FoE3Zo8NbAgo3fwZjowqUmEr6CiQs3LjSNwBCNumls0G/gxmsUCtEduiAyM48bm3TaTlvaGeKCZ3nOSX5zJnN54SD7FOt18Od0MR8MqWSyq0IngeF6C/iGbNnJPRt5XtlKBf5x5exkKHcfMQvkuoxHGGVn4Z2RlXcf+4Zrl4uzJj0CDne7wKb8ltn1gl9dShpI3KB26fxNk572gQIcMalcmzl3I2mg7cZbM8V5mR4n9fcQYZrP+2tPusLrF6fGnAveA0cHROvZ9nbtzPDL6mZjseVWe97uQooowLFgiIXmYmzjzWtT4wTBp3YXNGDCyOUmRpfffK8XYoDCsJQBCuBcFJUaCzHEpOkMUAAkLiTCYKezgoFTHWCdyBAudIAHfm97TvzhglqG1kYibPA5Q/hLIgxazYyV+cmwd2gViDJgw8iz2FIxOL9U+WrwMHXWeND41WqBAYLQuwv8SpHd9v7YveZiCzz2orIui+aAMAU0yOU01/xnagsDFPy3rwS3AQ2ARpJuHV9Ze92u+f8dfQAKfrUs88YxFoGdHsAdjEWZN9EJhf6Pt5PA6L/WBvBhr8fbg+xb/gLRI6VOKHaXSgAAAABJRU5ErkJggg==") 
    })
   

}

function firstCard(ev){
    // [...radio].map(el=>el.setAttribute('src',ev.target.src))f
    let card=Card.filter(el=>el.id==131);
    card.map(el=>{
        imgCard.setAttribute('src',el.img)
        titleCard.textContent=el.title
        dateCard.textContent=el.date
        descCard.textContent=el.desc
        priceCard.textContent=el.price
        subCard.textContent=el.sub
        rad.setAttribute('src',"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2wAAAdsBV+WHHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHTSURBVEiJ7dZLTxNhFMbx/+k7svGyA23BBJSFX8FoE3Zo8NbAgo3fwZjowqUmEr6CiQs3LjSNwBCNumls0G/gxmsUCtEduiAyM48bm3TaTlvaGeKCZ3nOSX5zJnN54SD7FOt18Od0MR8MqWSyq0IngeF6C/iGbNnJPRt5XtlKBf5x5exkKHcfMQvkuoxHGGVn4Z2RlXcf+4Zrl4uzJj0CDne7wKb8ltn1gl9dShpI3KB26fxNk572gQIcMalcmzl3I2mg7cZbM8V5mR4n9fcQYZrP+2tPusLrF6fGnAveA0cHROvZ9nbtzPDL6mZjseVWe97uQooowLFgiIXmYmzjzWtT4wTBp3YXNGDCyOUmRpfffK8XYoDCsJQBCuBcFJUaCzHEpOkMUAAkLiTCYKezgoFTHWCdyBAudIAHfm97TvzhglqG1kYibPA5Q/hLIgxazYyV+cmwd2gViDJgw8iz2FIxOL9U+WrwMHXWeND41WqBAYLQuwv8SpHd9v7YveZiCzz2orIui+aAMAU0yOU01/xnagsDFPy3rwS3AQ2ARpJuHV9Ze92u+f8dfQAKfrUs88YxFoGdHsAdjEWZN9EJhf6Pt5PA6L/WBvBhr8fbg+xb/gLRI6VOKHaXSgAAAABJRU5ErkJggg==") 
    })
}
rad.addEventListener('click',changeCard);
rad2.addEventListener('click',changeCard);
rad3.addEventListener('click',changeCard);
window.addEventListener('DOMContentLoaded',firstCard );



let btn=document.querySelector('.imgTeacO');
let btn2=document.querySelector('.imgTeacT');
let btn3=document.querySelector('.imgTeacTh');
let imgTeacher=document.querySelector('.sectionSeven_img');
let titleTeacher=document.querySelector('.sectionSeven_title');
let dateTeacher=document.querySelector('.sectionSeven_date');
let descTeacher=document.querySelector('.sectionSeven_point');
let priceTeacher=document.querySelector('.sectionSeven_price');
let radioTwo=document.querySelectorAll('.imgTeac')
const teacher=[{
    title:'Арина',
    point:'Опыт работы: 3 года',
    img:'./img/alina-kovalchuk-1143928-unsplash.png',
    price:'Стоимость: 1 урок 150 грн' ,
    date:'Образование: филолог, педагог',
    id:231,
},{
    title:'Наталья',
    point:'Опыт работы: 4 года',
    img:'./img/averie-woodard-319832-unsplash.png',
    price:'Стоимость: 1 урок 150 грн' ,
    date:'Образование: филолог, педагог',
    id:232,
},{
    title:'Орландо',
    point:'Опыт работы:5 лет, носитель языка',
    img:'./img/dana-jm-1176390-unsplash.png',
    price:'Стоимость: 1 урок c носителем языка 300 грн' ,
    date:'Образование: филолог, педагог',
    id:233,
}]


function changeTeacher(ev){
    let evt=ev.target.id;
    [...radioTwo].map(el=>el.setAttribute('src',ev.target.src))
    console.log(ev.target.src);
   console.log(evt);
    let card=teacher.filter(el=>el.id==evt);
    console.log(card);
    card.map(el=>{
        imgTeacher.setAttribute('src',el.img)
        console.log(el.img);
        // console.log(imgCard);
        titleTeacher.textContent=el.title
        dateTeacher.textContent=el.date
        descTeacher.textContent=el.desc
        priceTeacher.textContent=el.price
        ev.target.setAttribute('src',"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2wAAAdsBV+WHHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHTSURBVEiJ7dZLTxNhFMbx/+k7svGyA23BBJSFX8FoE3Zo8NbAgo3fwZjowqUmEr6CiQs3LjSNwBCNumls0G/gxmsUCtEduiAyM48bm3TaTlvaGeKCZ3nOSX5zJnN54SD7FOt18Od0MR8MqWSyq0IngeF6C/iGbNnJPRt5XtlKBf5x5exkKHcfMQvkuoxHGGVn4Z2RlXcf+4Zrl4uzJj0CDne7wKb8ltn1gl9dShpI3KB26fxNk572gQIcMalcmzl3I2mg7cZbM8V5mR4n9fcQYZrP+2tPusLrF6fGnAveA0cHROvZ9nbtzPDL6mZjseVWe97uQooowLFgiIXmYmzjzWtT4wTBp3YXNGDCyOUmRpfffK8XYoDCsJQBCuBcFJUaCzHEpOkMUAAkLiTCYKezgoFTHWCdyBAudIAHfm97TvzhglqG1kYibPA5Q/hLIgxazYyV+cmwd2gViDJgw8iz2FIxOL9U+WrwMHXWeND41WqBAYLQuwv8SpHd9v7YveZiCzz2orIui+aAMAU0yOU01/xnagsDFPy3rwS3AQ2ARpJuHV9Ze92u+f8dfQAKfrUs88YxFoGdHsAdjEWZN9EJhf6Pt5PA6L/WBvBhr8fbg+xb/gLRI6VOKHaXSgAAAABJRU5ErkJggg==") 
    })}
    function firstTeacher(ev){
        // let evt=ev.target.id;
        // [...radioTwo].map(el=>el.setAttribute('src',ev.target.src))
        // console.log(ev.target.src);
    //    console.log(evt);
        let card=teacher.filter(el=>el.id==231);
        console.log(card);
        card.map(el=>{
            imgTeacher.setAttribute('src',el.img)
            console.log(el.img);
            // console.log(imgCard);
            titleTeacher.textContent=el.title
            dateTeacher.textContent=el.date
            descTeacher.textContent=el.desc
            priceTeacher.textContent=el.price
            btn.setAttribute('src',"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2wAAAdsBV+WHHwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHTSURBVEiJ7dZLTxNhFMbx/+k7svGyA23BBJSFX8FoE3Zo8NbAgo3fwZjowqUmEr6CiQs3LjSNwBCNumls0G/gxmsUCtEduiAyM48bm3TaTlvaGeKCZ3nOSX5zJnN54SD7FOt18Od0MR8MqWSyq0IngeF6C/iGbNnJPRt5XtlKBf5x5exkKHcfMQvkuoxHGGVn4Z2RlXcf+4Zrl4uzJj0CDne7wKb8ltn1gl9dShpI3KB26fxNk572gQIcMalcmzl3I2mg7cZbM8V5mR4n9fcQYZrP+2tPusLrF6fGnAveA0cHROvZ9nbtzPDL6mZjseVWe97uQooowLFgiIXmYmzjzWtT4wTBp3YXNGDCyOUmRpfffK8XYoDCsJQBCuBcFJUaCzHEpOkMUAAkLiTCYKezgoFTHWCdyBAudIAHfm97TvzhglqG1kYibPA5Q/hLIgxazYyV+cmwd2gViDJgw8iz2FIxOL9U+WrwMHXWeND41WqBAYLQuwv8SpHd9v7YveZiCzz2orIui+aAMAU0yOU01/xnagsDFPy3rwS3AQ2ARpJuHV9Ze92u+f8dfQAKfrUs88YxFoGdHsAdjEWZN9EJhf6Pt5PA6L/WBvBhr8fbg+xb/gLRI6VOKHaXSgAAAABJRU5ErkJggg==") 
        })}
    btn.addEventListener('click',changeTeacher);
btn2.addEventListener('click',changeTeacher);
btn3.addEventListener('click',changeTeacher);
window.addEventListener('DOMContentLoaded',firstTeacher);

const viev=[{
    title:'Мария Тарасова',
    img:'./img/Ellipse1.png',
    date:'Я готовилась к IETLS сама, но потом поняла, что топчусь на месте. ',
    date1:'Я выбрала формат индивидуальных занятий. Мы  с моим преподавателем Михаилом, выработали эффективную стратегию, которая помогла мне существенно расширить мои знания и углубить их. ',
    date2:'Я сдала экзамен IETLS успешно с первого раза на 8,5 баллов! Теперь я уверена в своём английском на 100%!',

    id:331,
}, {title:'Рита Миронова',
img:'./img/Ellipse2.png',
date:'Когда я узнала, что переезжаю за границу, мне срочно понадобилось подтягнуть английский. ',
date1:'Курсы этой школы мне посоветовал друг, я попробовала и не прогадала! Здесь мне помогли собрать мой индивидуальный курс именно под мою основную задачу. ',
date2:'Я очень довольна, т.к. всего за два месяца курсов и ежедневных разговорных клубов я ощутила, что мне легко общаться на английском! ',

id:332,
}, {
    title:'Виктория Тищенко',
img:'./img/Ellipse.png',
date:'Английский я учу более 5 лет, поэтому я решила закрепить свои знания с носителем языка. Я провела несколько пробных уроков в разных школах, но выбор остановила на EngLear. ',
date1:'Я довольна и отношением преподавателя и соотношением цена-качество. ',
date2:'Теперь рекомендую эту школу друзьям.',

id:333,
}]
let left=document.querySelector('.sectionNine_left')
let right=document.querySelector('.sectionNine_right')
let imgViev=document.querySelector('.sectionNine_img');
let titleViev=document.querySelector('.sectionNine_title');
let dateViev=document.querySelector('.sectionNine_date');
let dateViev1=document.querySelector('.sectionNine_date1');
let dateViev2=document.querySelector('.sectionNine_date2');
let num=0;
console.log(dateViev);
function changeViev(){
        imgViev.setAttribute('src',viev[num].img)
        console.log(dateViev);
        let el=viev[num]
        titleViev.innerHTML=el.title
        dateViev.innerHTML=el.date
        dateViev1.innerHTML=el.date1
        dateViev2.innerHTML=el.date2
       return num;
    }
    function firstViev(){
        imgViev.setAttribute('src',viev[0].img)
        console.log(dateViev);
        let el=viev[0]
        titleViev.innerHTML=el.title
        dateViev.innerHTML=el.date
        dateViev1.innerHTML=el.date1
        dateViev2.innerHTML=el.date2
       return num;
    }

    function leftAr(){
       
        if(num===0){
            num=2
        }
        else if (num<=2){
            num=num-1;
        }
        else{
            num=0
        }
      
        changeViev(num);
        return num;
    }
    function rightAr(){
  
        if(num>=0 && num<2){
            num=num+1
        }
        else if (num==2){
            num=0;
        }
        else{
            
        }
      console.log(num);
        changeViev(num)
        return num;
    }
    left.addEventListener('click',leftAr);
    right.addEventListener('click',rightAr)
    document.addEventListener('DOMContentLoaded',firstViev)