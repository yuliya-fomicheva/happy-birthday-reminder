"use strict";

import { createBDayManListAndTitle} from "./module/next-birthday.js";

import { formatDate, getTodayformatDate } from "./module/date.js";

const birthdayData = [ 
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
    {
        name: 'Натали Портман',
        dateBirth: '1981-06-09'
    }]  ;


const birthdayList = document.querySelector('.birthday__list');
const birthdayListTemplate = document.querySelector('#birthday__list-template');
const remindNextBirthButton = document.querySelector('.birthday__button-remind');
const addNextBirthButton = document.querySelector('.birthday__button-add');


const popupBirtdayRemind = document.querySelector(".modal-remind");
const nextBirthList = popupBirtdayRemind.querySelector(".modal-remind__next-birthday-list");
const nextBtirthdayTemplate =  popupBirtdayRemind.querySelector("#modal-remind__next-birthday-template");
const dateNextBithTitle = popupBirtdayRemind.querySelector(".modal-remind__next-birtday-info");
const closeBirtdayRemind = popupBirtdayRemind.querySelector(".modal-remind__close");

const popupBirtdayAdd = document.querySelector(".modal-add");
const cancelBirtdayAdd = popupBirtdayAdd.querySelector(".modal-add__cancel");
const form = popupBirtdayAdd.querySelector(".modal-add__form");
const name = popupBirtdayAdd.querySelector("[name=name]");
const birtday = popupBirtdayAdd.querySelector("[name=birthday]");



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

function createReminderTitleAndList () {

	const birtdayManListAndTitle = createBDayManListAndTitle(birthdayData);
    dateNextBithTitle.textContent =  birtdayManListAndTitle.futureYearTitle;

    for (const birtdayManList of birtdayManListAndTitle.bDayManList) {
		let itemBirthdayList = nextBtirthdayTemplate.content.cloneNode(true);
		itemBirthdayList.querySelector('.modal-remind__item').textContent = birtdayManList;
		nextBirthList.appendChild(itemBirthdayList);
	}
};


birtday.setAttribute('max', getTodayformatDate());


showBirthdayList();


remindNextBirthButton.addEventListener('click', function  (evt) {
    evt.preventDefault();
    createReminderTitleAndList ();
    popupBirtdayRemind.classList.add("modal_show");
    

}) 

closeBirtdayRemind.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popupBirtdayRemind.classList.remove("modal_show");

})

addNextBirthButton.addEventListener('click', function  (evt) {
    evt.preventDefault();
    popupBirtdayAdd.classList.add("modal_show");
    
}) 

cancelBirtdayAdd.addEventListener ("click", function (evt) {
    evt.preventDefault();
    popupBirtdayAdd.classList.remove("modal_show");

})


addNextBirthButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBirtdayAdd.classList.add("modal-show");
    name.focus();
});


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
});

