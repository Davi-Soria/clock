let rDigital = document.querySelector('.digital');
let p_h = document.querySelector('.hora');
let p_m = document.querySelector('.minuto');
let p_s = document.querySelector('.segundo');

function uptadeClock () {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    rDigital.innerHTML = `${fixTime(hour)}:${fixTime(minute)}:${fixTime(second)}`; 

    let degSeconds = ((360/60)*second) - '90';
    let SecondsDegCalc = '0.1'*second;

    let degMinutes = ((360/60)* minute) - '90' +SecondsDegCalc;
    let MinutesDegCalc = '0.5'*minute;

    let degHour = ((360/12)* hour) - '90' + MinutesDegCalc;


    p_s.style.transform = `rotate(${degSeconds}deg)`;
    p_m.style.transform = `rotate(${degMinutes}deg)`;
    p_h.style.transform = `rotate(${degHour}deg)`;
}

function fixTime(time){
  return time<10? `0${time}`: time;
}


setInterval(uptadeClock, 1000);
uptadeClock();