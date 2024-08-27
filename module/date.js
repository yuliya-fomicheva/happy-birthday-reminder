
// преобразование списка именниников в {Имя: день месяц}
let formatDate = (dateString) => {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const [year, month, day] = dateString.split('-').map(Number);

    return `${day} ${months[month - 1]}`;
};

let today = new Date();
// преобразование сегодняшей даты (по умолчанию) или любой даты в формат "yyyy-mm-ddd"
let getTodayformatDate = (day = today) => {
    return (`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`)};


export {formatDate, getTodayformatDate };
