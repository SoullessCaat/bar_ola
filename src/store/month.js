const month = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const getMonth=(str)=>{
    for (let index = 0; index < month.length; index++) {
        if(str.includes(month[index]))
            return index;
    }
    return -1;
}

export default getMonth;
