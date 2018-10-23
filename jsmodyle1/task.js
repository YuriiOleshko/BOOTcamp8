'use strict';
 let canel ='Отменено пользователем';
 let notver= 'Доступ запрещенн';
 let ok = 'Добро пожаловать';
 const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let admin =prompt("Ввести логин");
let pasword;
if (admin===null){
    alert(canel);
}else if(admin===adminLogin){
 pasword =prompt("Ввести пароль")
 if (pasword===null){
    alert(canel);

}else if(pasword===adminPassword){
 alert(ok)
}else{
    alert(notver);
}
}else{
    alert(notver);
}



// const  sharm = 15;
// const hurgada = 25;
// const taba = 6;

// let info = Number(prompt('Ввести число неогбходимих мест'));

// if(info>= 0 && Number.isInteger(info)){
// alert("frtdhbjnjm");
// }else{
//     alert('Ошибка ввода');
// }
