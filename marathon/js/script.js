//====================popup==================
// let modal = document.querySelector('.modalWindow');
// let img = document.querySelectorAll('.popup_img');
// let close = document.querySelector('.close');
// let popup = document.querySelector('.popup');

// for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener('click', function(){
//         modal.style.display = 'block';
//         popup.src = this.id;
//     });
// }
// close.onclick = function () {
//     modal.style.display = 'none';
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }

//===========================

//     //модальное окно
//     const modalBtn = document.querySelectorAll('[data-modal]'),
//     closeBtn = document.querySelector('[data-close]'),
//     modal = document.querySelector('.modal');

//     function openModal() {// функция открытия модального окна
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         clearInterval(modalTimerId);
//     }

// modalBtn.forEach(btn => {// получаем все кнопки открытия модального окна
//     btn.addEventListener('click', openModal);
// });

// function closeModal(a) { // фунуция закрытия модального окна
//     modal.classList.remove('show');
//     modal.classList.add('hide');
//     document.body.style.overflow = '';
// }

// closeBtn.addEventListener('click', closeModal);// закрытие модального окна по кнопке

// modal.addEventListener('click', (e) => {// закрытие по щелчку на пустом поле
//     if (e.target === modal) {
//         closeModal();
//     };
// });

// document.addEventListener('keydown', (e) => {// закрытие клавишей escape
//     if (e.code === 'Escape' && modal.classList.contains('show')) {
//         closeModal();
//     }
// })

// const modalTimerId = setTimeout(openModal, 6000);// показ модального окна через 6 секунд

// function showModalByScroll() {//при скролле до конца страницы открывается модальное окно
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//         openModal();
//         window.removeEventListener('scroll', showModalByScroll);
//     };
// };

//     window.addEventListener('scroll', showModalByScroll);

//=========== ajax =====================

// const forms = document.querySelectorAll('form');

// const massage = {
//     loading: 'loading',
//     success: 'Спасибо, мы скоро с вами свяжемся',
//     failure: 'Произошла ошибка отправки'
// }

// forms.forEach(item => {
//     bindPostData(item);
// });

// const postData = async (url, data) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: data
//     });
//     return await res.json();
// };

// function bindPostData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const statusMessage = document.createElement('img');
//         statusMessage.src = message.loading;
//         statusMessage.style.cssText = `
//         display: block;
//         margin: 0 auto;
//         `;
//         form.insertAdjacentElement('afterend', statusMessage);

//         const formData = new FormData(form);
//         const json = JSON.stringify(Object.fromEntries(formData.entries()));

// postData('http://localhost:3000/requests', json)
//     .then(data => {
//         console.log(data);
//         showThanksModal(message.success);
//         statusMessage.remove();
//     }).catch(() => {
//         showThanksModal(message.failure);
//     }).finally(() => {
//         form.reset();
//     });

//     });
// };

// function showThanksModal(message) {
//     const prevModalDialog = document.querySelector('.modal__dialog');
//     prevModalDialog.classList.add('hide');
//     openModal();
//     const thanksModal = document.createElement('div');
//     thanksModal.classList.add('modal_dialog');
//     thanksModal.innerHTML = `
//         <div class = 'modal__content'>
//          <div class = "modal__close" data-close>x</div>
//          <div class = 'modal__title'> ${message}</div>
//         </div>
//     `;
//     document.querySelector('.modal').append(thanksModal);
//     setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//     }, 8000);
// };

//таймер
const deadline = "2022-08-15";
// const end = document.querySelector('.promo_endtime');
// end.innerHTML += deadline;
//получаем остаток времени до дедлайна
function getTimeRemaining(endTime) {
  const t = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    seconds = Math.floor((t / 1000) % 60);
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

// добавляем 0 если число меньше 10
function getZero(num) {
  if (num > 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

//вывод на экран
function setTimer(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);

  function updateClock() {
    const t = getTimeRemaining(endtime);
    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.timer <= 0) {
      clearInterval(timeInterval);
    }
  }
}
setTimer(".timer", deadline);

//=====================faq================

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const plus = document.querySelectorAll(".plus");

plus.forEach((item) => {
  item.addEventListener("click", (e)=> {
    e.target.classList.toggle("active");
    if(e.target.classList.contains("active")) {
        e.target.src = "img/close.svg";
    } else {
        e.target.src = "img/plus.svg";
    }
      let panel = e.target.parentNode.nextElementSibling;
      console.log(panel);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.padding = "20px 30px";
      }

  });
});
