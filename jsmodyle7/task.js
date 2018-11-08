'use strict'

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }

]
function createCards(posts){
    let body  =document.querySelector('body')
    for (let el of posts){
        let post = document.createElement('div');
        post.classList.add('post')
        body.append(post);
        let postImage=document.createElement('img')
        postImage.classList.add('post_image');
        postImage.setAttribute('src',el.img);
        postImage.setAttribute('alt','post image');
        post.append(postImage);
        let h2=document.createElement('h2');
        h2.classList.add('post_title');
        h2.textContent=el.title ;
        post.append(h2);
        let postTitle=document.createElement('p');
        postTitle.classList.add('post_text');
        postTitle.textContent=el.text;
        post.append(postTitle);
        let button=document.createElement('a');
        button.classList.add('button');
        button.setAttribute('href',el.link);
        button.textContent="Read more";
        post.append(button)

    }
}
createCards(posts)