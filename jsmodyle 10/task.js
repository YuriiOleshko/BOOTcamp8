/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const state ={

}
const openList=()=>{
  fetch('https://test-users-api.herokuapp.com/users/').then(response=>response.json()).then(data=>{getAllUsers(data.data); console.log(data); }).catch(err=>console.log(err))
}

let list =document.querySelector('.open')
let spis=document.querySelector('ul');
let elemSpis=document.createElement('li')
let input=document.querySelector('.inp')
let form=document.querySelector('form')
let button =document.querySelector('.button')
let upbutton =document.querySelector('.up')
let upeper = document.querySelector('.upper')

const getAllUsers=(data)=>{
 for(let el of data){
  state.array=data
  let elemSpis=document.createElement('li')
   elemSpis.textContent=`Name :${el.name} age: ${el.age}`; 

   elemSpis.id=el.id
   console.log(elemSpis);
   spis.append(elemSpis) }

}
const changeValue=(ev)=>{
  console.log(state.array);
  console.log(input.value);
  let idUser=state.array.find(el=>input.value===el.name )
  console.log(idUser);
  getUserById(idUser)
}

const getUserById=(id)=>{
  fetch(`https://test-users-api.herokuapp.com/users/${id.id}`).then(response=>response.json()).then(data=>{ console.log(data); searchId(data.data)  }).catch(err=>console.log(err))

}
const searchId=(dat)=>{
  console.log(dat.name);
  let elemSpisw=document.createElement('li')
   elemSpisw.textContent=`Name :${dat.name} age: ${dat.age}`; 

   elemSpisw.id=dat.id

   spis.prepend(elemSpisw)
}
const submitForm=(evt)=>{
  evt.preventDefault()
let name=document.querySelector('#blue')
let age=document.querySelector('#red')
const addNewUser={
  name:name.value,
  age:age.value
};
console.log(addNewUser);
addUser(addNewUser)}

const addUser=(user)=>{
  fetch('https://test-users-api.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}).then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR' + error));
}
const deleteValue=()=>{
  console.log(state.array);
  console.log(input.value);
  let idUser=state.array.find(el=>input.value===el.name )
  console.log(idUser);
  removeUser(idUser)
}
const removeUser=(id)=>{


fetch( `https://test-users-api.herokuapp.com/users/${id.id}`, {
  method: 'DELETE'
}).then(() => console.log('success'))
.catch(error => console.log('ERROR' + error));
}
const userUpdate=(evt)=>{
  evt.preventDefault()
  let name=document.querySelector('#blue')
  let age=document.querySelector('#red')
  const updateNewUser={
    name:name.value,
    age:age.value
  };
  console.log(updateNewUser);
  let idUser=state.array.find(el=>input.value===el.name )
  // addUser(addNewUser)
  updateUser(idUser.id,updateNewUser)
}
const updateUser=(id, user)=>{
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR' + error));
}
list.addEventListener('click',openList)
upeper.addEventListener('click',changeValue)
form.addEventListener('submit',submitForm)
button.addEventListener('click',deleteValue)
upbutton.addEventListener('click',userUpdate)