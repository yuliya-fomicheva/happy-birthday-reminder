
let formatDate = (dateString) => {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const [year, month, day] = dateString.split('-').map(Number);

    return `${day} ${months[month - 1]}`;
};

export {formatDate};
