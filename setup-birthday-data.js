"use strict";

 import { createBDayManListAndTitle} from "./module/next-birthday.js";

import { formatDate } from "./module/date.js";

const birthdayData = [ 
	{ 
        name: 'Валерий Глебович' , 
        dateBirth: '1999-08-06' 
    },
    {
         name: 'Мариша' ,
         dateBirth: '2002-06-13',

	},
    { 
        name: 'Мама' , 
        dateBirth: '1977-01-17' 
    }, 
    { 
        name: 'Папа' , 
        dateBirth: '1977-01-17' 
    }, 
    {
        name: 'Димок',
        dateBirth: '1998-06-13'
    }]  ;


const birthdayList = document.querySelector('.birthday-list');
const birthdayListTemplate = document.querySelector('#birthday-list-template');
const remindNextBirthButton = document.querySelector('.button');

const popupBirtdayRemind = document.querySelector(".modal-remind");
const nextBirthList = popupBirtdayRemind.querySelector(".next-birthday-list");
const nextBtirthdayTemplate =  popupBirtdayRemind.querySelector("#next-birthday-template");
const dateNextBithTitle = popupBirtdayRemind.querySelector(".date-next-bith-title");
const closeBirtdayRemind = popupBirtdayRemind.querySelector(".button");



let renderBithMan = (birthdayList) => {
    const itemBirthdayList = birthdayListTemplate.content.cloneNode(true);
    itemBirthdayList.querySelector('.birthday-date').textContent =  formatDate(birthdayList.dateBirth);
    itemBirthdayList.querySelector('.birthman-name').textContent = birthdayList.name;
    return itemBirthdayList;
}

for (const birthdayItem of birthdayData) {
    birthdayList.appendChild(renderBithMan(birthdayItem));
};


function createReminderTitleAndList () {

	const birtdayManListAndTitle = createBDayManListAndTitle(birthdayData);

    dateNextBithTitle.textContent =  birtdayManListAndTitle.futureYearTitle;

    for (const birtdayManList of birtdayManListAndTitle.bDayManList) {
		let itemBirthdayList = nextBtirthdayTemplate.content.cloneNode(true);
		itemBirthdayList.querySelector('.item-next-birthday-list').textContent = birtdayManList;
		nextBirthList.appendChild(itemBirthdayList);
	}
};

remindNextBirthButton.addEventListener('click', function  (evt) {
    evt.preventDefault();
    createReminderTitleAndList ();
    popupBirtdayRemind.classList.add("modal-show");
    

}) 


closeBirtdayRemind.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBirtdayRemind.classList.remove("modal-show");
	let itemNextBirthList = nextBirthList.querySelectorAll('.item-next-birthday-list');
	itemNextBirthList.forEach(li => {li.remove();});
	
});
 