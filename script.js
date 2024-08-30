let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let day = document.getElementById('day');
let year = document.getElementById('year');

function displayTime(){
    let date = new Date();
    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let dd = date.getDate();
    let mo = date.getMonth();
    let yy = date.getFullYear();
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    day.innerText = dd + ' : ' + mo;
    year.innerText = yy;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);
