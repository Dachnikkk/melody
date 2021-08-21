$(document).ready(function () {
  // ========================= Главная =====================================
  let currentFloor = 2; // выбранный этаж
  let floorPath = $(".main__image path"); // все path этажи
  let counterUp = $(".counter__button--up"); // стрелка вверх
  let counterDown = $(".counter__button--down"); // стрелка вниз
  // ========================= Модальное окно =====================================
  let flatPath = $(".modal__image path"); // все path квартиры
  let flatInfo = $(".flat__link"); // все link info на квартиры
  let modal = $('.modal');  // модальное окно
  let openModal = $(".btn"); // кнопка открывания модального окна
  let closeModal = $(".modal__btn"); // закрытие модального окна
  let modalCounter = $(".modal__counter"); // номер этажа 

  floorPath.on("mouseover", function () { // функция на наведение курсора на этаж
    currentFloor = $(this).attr("data-floor"); // номер выбранного этажа
    $(".counter__count").text(currentFloor); // записываем в каунтер выбранный этаж
  })

  floorPath.on("mouseout", function () { // функция при убирания курсора с этажа
    let activeEl = $(".current__floor"); // активный этаж
    currentFloor = $(activeEl).attr("data-floor"); // получаем номер этажа
    $(".counter__count").text(currentFloor); // записываем в каунтер
  })

  floorPath.on("click", function () { // функция на клик на этаж
    currentFloor = $(this).attr("data-floor"); // получаем номер кликнутого этажа
    $(".counter__count").text(currentFloor); // записываем номер этажа в каунтер
    floorPath.removeClass("current__floor"); // снимаем класс с прошлого этажа
    $(`[data-floor=${currentFloor}]`).toggleClass("current__floor"); // добавляем класс новому этажу
  })

  // ========================= Модальное окно =====================================

  openModal.on("click", function () { // функция на открытие модального окна
    let usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); // перевод в нужный формат числа этажа
    modalCounter.text(usCurrentFloor) // в модальный каунтер записываем номер выбранного этажа
    modal.toggleClass("modal__is-open"); // открываем модальное окно 
  })

  closeModal.on("click", function () { // функция на закрытие модального окна
    modal.removeClass("modal__is-open"); // закрываем модальное окно 
  })

  counterUp.on("click", function () { // функция на клик на стрелку вверх
    if (currentFloor < 18) { // если этаж меньше 18 т.к. в доме всего 18 этажей
      currentFloor++; // увеличиваем этаж
      let usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); // перевод в нужный формат числа этажа
      $(".counter__count").text(usCurrentFloor); // записываем номер этажа в каунтер
      floorPath.removeClass("current__floor"); // снимаем класс с прошлого этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor"); // добавляем класс новому этажу
    }
  })

  counterDown.on("click", function () { // функция на клик на стрелку вниз
    if (currentFloor > 2) { // если этаж больше 2
      currentFloor--; // уменьшаем этаж
      let usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }); // перевод в нужный формат числа этажа
      $(".counter__count").text(usCurrentFloor); // записываем номер этажа в каунтер
      floorPath.removeClass("current__floor"); // снимаем класс с прошлого этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor"); // добавляем класс новому этажу
    }
  })

  flatPath.on("mouseover", function () {  // функция на наведение курсора на квартиру
    let currentFlat = $(this).attr("data-flat"); // записываем номер квартиры 
    flatPath.removeClass("modal__current-image"); // убираем класс выбранного с прошлой картинки
    flatInfo.removeClass("flat__current-link"); // убираем класс выбранного с прошлой ссылки
    $(`[data-flat=${currentFlat}]`).toggleClass("modal__current-image"); // добавляем класс выбранного для картинки
    $(`[data-flat-info=${currentFlat}]`).toggleClass("flat__current-link"); // добавляем класс выбранного для ссылки
  })

  flatInfo.on("mouseover", function () { // функция на наведение курсора на ссылку квартиры
    let currentFlat = $(this).attr("data-flat-info"); // записываем номер квартиры 
    flatPath.removeClass("modal__current-image"); // убираем класс выбранного с прошлой картинки
    flatInfo.removeClass("flat__current-link"); // убираем класс выбранного с прошлой ссылки
    $(`[data-flat=${currentFlat}]`).toggleClass("modal__current-image"); // добавляем класс выбранного для картинки
    $(`[data-flat-info=${currentFlat}]`).toggleClass("flat__current-link"); // добавляем класс выбранного для ссылки
  })

})

