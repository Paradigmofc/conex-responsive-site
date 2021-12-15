"use strict"
// КНОПКА "ВВЕРХ"
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});


// ВАЛИДАЦИЯ ФОРМЫ

// Отправка данных на сервер
// function send(event, php){
//   console.log("Отправка запроса");
//   event.preventDefault ? event.preventDefault() : event.returnValue = false;
//   var req = new XMLHttpRequest();
//   req.open('POST', php, true);
//   req.onload = function() {
//     if (req.status >= 200 && req.status < 400) {
//     json = JSON.parse(this.response); // Ебанный internet explorer 11
//         console.log(json);
          
//         // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
//         if (json.result == "success") {
//           // Если сообщение отправлено
//           alert("Сообщение отправлено");
//         } else {
//           // Если произошла ошибка
//           alert("Ошибка. Сообщение не отправлено");
//         }
//       // Если не удалось связаться с php файлом
//       } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
//   // Если не удалось отправить запрос. Стоит блок на хостинге
//   req.onerror = function() {alert("Ошибка отправки запроса");};
//   req.send(new FormData(event.target));
//   }












// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('connection');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//       e.preventDefault();

//       let error = formValidate(form);
//       let formData = new. FormData(form);
  

//       if (error === 0) {
//         let response = await fetch ('mail.php', {
//           method: 'POST',
//           body: formData
//         });
//         if (response.ok) {
//           let result = await response.json();
//           alert(result.message);
//           form.reset();
//         } else {
//           alert("Ошибка")
//         }
//       } else {
//         alert('Заполните обязательные поля')
//       }
//   }


//   function formValidate(form) {
//       let error = 0;
//       let formReq = document.querySelectorAll('._req');

//       for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);

//         if (input.classList.contains('_email')){
//           if (input.value === '') {
//             formAddError(input);
//             error++;
//           }
//         }
//       }
//       return error; 
//   }
//   function formAddError(input) {
//       input.parentElement.classlist.add('_error');
//       input.classlist.add('_error');
//   }
//   function formRemoveError(input) {
//       input.parentElement.classlist.remove('_error');
//       input.classlist.remove('_error');
//   }
// })