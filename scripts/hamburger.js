let button1 = document.querySelector('.btn');



button1.addEventListener('click', () => {
    button1.classList.toggle('newstyle');
})

const date_area = document.querySelector('.date')

// const date_now = new Date();

// const full_date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date_now);

// date_area.innerHTML = `<em>${full_date}</em>`


let mydate = new Date();
let day = mydate.getDay();
let month = mydate.getMonth();
let num = mydate.getDate();
let year = mydate.getFullYear();

console.log(day);
console.log(month);
console.log(num);

let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


console.log(w_names[day]);
console.log(m_names[month]);

const dateoutput = document.querySelector('.date');
dateoutput.textContent = w_names[day] + ', ' + m_names[month] + ' ' + num + ' ' + year
