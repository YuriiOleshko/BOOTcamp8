/*
  Создайте компонент галлереи изображений следующего вида.
  
    
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: 'img/first.jpg', fullview: 'img/two.jpg', alt: "alt text 1" ,width:'120px',height: '80px',widthf:'640px',heightf: '480px'},
    { preview: 'img/pre.jpg', fullview: 'img/full1.jpg', alt: "alt text 2" ,width:'120px',height: '80px', widthf:'640px',heightf: '480px'},
    { preview: 'img/pre2.jpeg', fullview: 'img/full2.jpeg', alt: "alt text 3",width:'120px',height: '80px',widthf:'640px',heightf: '480px' },
    { preview: 'img/pre3.jpg', fullview: 'img/full3.jpg', alt: "alt text 4" ,width:'120px',height: '80px',widthf:'640px',heightf: '480px'},
    { preview: 'img/pre4.jpeg', fullview: 'img/full4.jpeg', alt: "alt text 5" ,width:'120px',height: '80px',widthf:'640px',heightf: '480px'},
    { preview: 'img/pre5.jpeg', fullview: 'img/full5.jpeg', alt: "alt text 6",width:'120px',height: '80px',widthf:'640px',heightf: '480px' },
    { preview: 'img/pre6.jpeg', fullview: 'img/ful6.jpeg', alt: "alt text 7",width:'120px',height: '80px',widthf:'640px',heightf: '480px'}

  ];

  let ul = document.querySelector('ul');
  let div = document.querySelector('.fullview')


  for (let el of galleryItems){

    let li =document.createElement('li');
    let img=document.createElement('img');
    li.append(img);
    img.style.width="100%";
    img.style.height='100%'
    // li.classList.add('par')
    img.setAttribute('src',el.preview)
    img.setAttribute('alt',el.alt)
    img.setAttribute('data-fullview',el.fullview)
    ul.append(li)

  }
  
  function start (){
    let first = document.createElement('img');
    first.classList.add('big');
  // let flew=document.querySelector('li>img')
  // let first =flew.cloneNode(true)
  first.setAttribute('src', galleryItems[0].preview)
  // console.log(first);
  div.append(first)
  }
  document.addEventListener('DOMContentLoaded',start)
  
  function move(){
  //  div.innerHTML='';
  //  let first =event.target.cloneNode(true)
  //  div.append(first) ;
  let bigImg = document.querySelector('.big');
  bigImg.setAttribute('src',event.target.dataset.fullview)
  // let mas = Arry.from(document.querySelectorAll('.par'))
  event.target.classList.add('par')



  }
  
  
  function red(){
// let li =document.querySelectorAll('img') 
event.target.classList.remove('par')
      }

  ul.addEventListener('click',move)
  // let li
  ul.addEventListener('mouseout', red)