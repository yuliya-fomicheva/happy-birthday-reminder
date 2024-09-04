"use strict";

import { createBDayManListAndTitle} from "./module/next-birthday.js";

import { formatDate, getTodayformatDate } from "./module/date.js";


//пока статические данные
const birthdayData = [  {
        name: 'Натали Портман',
        dateBirth: '1981-06-09'
    },
	{ 
        name: 'Джонни Депп' , 
        dateBirth: '1963-06-09' 
    },
    {
         name: 'Крис Эванс' ,
         dateBirth: '2002-06-13',

	},
    { 
        name: 'Джон Траволта' , 
        dateBirth: '1954-02-18' 
    }, 
    { 
        name: 'Игорь Николаев' , 
        dateBirth: '1960-01-17' 
    }, 
   
    { 
        name: 'Джим Керри' , 
        dateBirth: '1962-01-17' 
    }, 
    
    ]  ;

//для отрисовка гланой страницы
const birthdayList = document.querySelector('.birthday__list');
const birthdayListTemplate = document.querySelector('#birthday__list-template');
const remindNextBirthButton = document.querySelector('.birthday__button-remind');
const addNextBirthButton = document.querySelector('.birthday__button-add');

// попап напоминалка
const popupBirtdayRemind = document.querySelector(".modal-remind");
const nextBirthList = popupBirtdayRemind.querySelector(".modal-remind__next-birthday-list");
const nextBtirthdayTemplate =  popupBirtdayRemind.querySelector("#modal-remind__next-birthday-template");
const dateNextBithTitle = popupBirtdayRemind.querySelector(".modal-remind__next-birtday-info");
const closeBirtdayRemind = popupBirtdayRemind.querySelector(".modal-remind__close");

// попап с формой для записи нового именинника 
const popupBirtdayAdd = document.querySelector(".modal-add");
const cancelBirtdayAdd = popupBirtdayAdd.querySelector(".modal-add__cancel");
const form = popupBirtdayAdd.querySelector(".modal-add__form");
const name = popupBirtdayAdd.querySelector("[name=name]");
const birtday = popupBirtdayAdd.querySelector("[name=birthday]");


// преобразование списка именинников в {Имя: день месяц}
let renderBithMan = (birthdayList) => {
    const itemBirthdayList = birthdayListTemplate.content.cloneNode(true);
    itemBirthdayList.querySelector('.birthday__date').textContent =  formatDate(birthdayList.dateBirth);
    itemBirthdayList.querySelector('.birthday__name').textContent = birthdayList.name;
    return itemBirthdayList;
}

function showBirthdayList() {
    for (const birthdayItem of birthdayData) {
        birthdayList.appendChild(renderBithMan(birthdayItem));
    };
}

showBirthdayList();

//установка макс-значения для ввода даты
// birtday.setAttribute('max', getTodayformatDate());

//создание Заголовка и списка ближайших именинников 
function createReminderTitleAndList () {

	const birtdayManListAndTitle = createBDayManListAndTitle(birthdayData);
    dateNextBithTitle.textContent =  birtdayManListAndTitle.futureYearTitle;

    for (const birtdayManList of birtdayManListAndTitle.bDayManList) {
		let itemBirthdayList = nextBtirthdayTemplate.content.cloneNode(true);
		itemBirthdayList.querySelector('.modal-remind__item').textContent = birtdayManList;
		nextBirthList.appendChild(itemBirthdayList);
	}
};

// показ попапа напоминалки
remindNextBirthButton.addEventListener('click', function  (evt) {
    evt.preventDefault();
    createReminderTitleAndList ();
    popupBirtdayRemind.classList.add("modal_show");
    addNextBirthButton.disabled = true;
   

    

}) 
// закрытие попапа напоминалки
closeBirtdayRemind.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popupBirtdayRemind.classList.remove("modal_show");
    addNextBirthButton.disabled = false;
    let itemNextBirthList = nextBirthList.querySelectorAll('.modal-remind__item');
    itemNextBirthList.forEach(li => {li.remove();});
 
})
// показ попапа с формой для добавления нового именинника 
addNextBirthButton.addEventListener('click', function  (evt) {
    evt.preventDefault();
    popupBirtdayAdd.classList.add("modal_show");
    name.focus();
    remindNextBirthButton.disabled = true;
    
}) 
// закрыть попапа с формой для добавления нового именинника без изменений
cancelBirtdayAdd.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popupBirtdayAdd.classList.remove("modal_show");
    remindNextBirthButton.disabled = false;

})


// проверка валидности формы и добавление нового значения в массив
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let newMan = {name: name.value , 
                dateBirth: birtday.value
            };

    birthdayData.push(newMan);
        
    let itemNextBirthList = birthdayList.querySelectorAll('.birthday__item');
    itemNextBirthList.forEach(li => {li.remove();});

    showBirthdayList();
            
    popupBirtdayAdd.classList.remove("modal_show");
    remindNextBirthButton.disabled = false;

});

