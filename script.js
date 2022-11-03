const nav_btns = document.querySelectorAll('.nav-btn');
        nav_btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                nav_btns.forEach((button) => button.classList.remove('active'));
                btn.classList.add('active');
            })
        })

const country = document.getElementById("country");
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");


$(document).ready(function(){
    // e.preventDefault(); 
    fetch('./datacovid.json')
    .then(res => res.json())
    .then (res =>{
        country.innerHTML = `${res.name}`;
        data1.innerHTML = `${res.numbers.recovered}`;
        data2.innerHTML = `${res.numbers.infected}`;
        data3.innerHTML = `${res.numbers.fatal}`;
        console.log(res)
    })
})

