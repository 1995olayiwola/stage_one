const date = new Date();
const dayOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentDayOfTheWeek = dayOfTheWeek[date.getDay()];
console.log(currentDayOfTheWeek);
const current = document.querySelector('.day');
const time = document.querySelector('.time');
current.innerHTML = currentDayOfTheWeek;
time.innerHTML =   date.getTime();