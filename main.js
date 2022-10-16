"use strict";


// clock -시계
const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
};

// first time
setClock();
// Update every 1000 ms
setInterval(setClock, 1000);

const switchTheme = (evt) => {
	const switchBtn = evt.target;
	if (switchBtn.textContent.toLowerCase() === "light") {
		switchBtn.textContent = "dark";
		// localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute("data-theme", "dark");
	} else {
		switchBtn.textContent = "light";
		// localStorage.setItem("theme", "light"); //add this
		document.documentElement.setAttribute("data-theme", "light");
	}
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "dark";
// currentTheme = localStorage.getItem("theme")
// 	? localStorage.getItem("theme")
// 	: null;

if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);
	switchModeBtn.textContent = currentTheme;
}
// -- clock -시계


// Alarm 
const alarmButton = document.querySelector(".btn-alarm");
const snoozeButton = document.querySelector(".btn-snooze");
const stopButton = document.querySelector(".btn-stopalarm");
const time = document.querySelector(".alarm-time");
const options = document.querySelector(".options");
const alarmSound = new Audio();

/* 
* I cannot guarantee this url
* will not change and break 
* the sound functionality. 
*/

alarmSound.src = "http://soundbible.com/mp3/Rooster-SoundBible.com-1114473528.mp3";
let alarmTimer;

// initially hides snooze and stop alarm options until they're useful
options.style.display = "none";

function setAlarm() {
  let ms =
    new Date().setHours(0, 0, 0, 0) +
    time.valueAsNumber;
  if (isNaN(ms)) {
    alert(" 알람이 설정되었습니다.");
    return;
  }
  let alarm = new Date(ms);
  var dt = new Date().getTime();
  let differenceInMs = alarm.getTime() - dt;

  if (differenceInMs < 0) {
    alert(
      "It looks like that's a date from the past! Are you a time traveler?!"
    );
    return;
  }
  alarmTimer = setTimeout(initAlarm, differenceInMs);
  alarmButton.innerText = "Cancel Alarm";
  alarmButton.setAttribute("onclick", "cancelAlarm(this);");
  options.style.display = "";
}

function cancelAlarm() {
  clearTimeout(alarmTimer);
  alarmButton.innerText = "Set Alarm";
  alarmButton.setAttribute("onclick", "setAlarm(this);");
  options.style.display = "none";
}

function initAlarm() {
  alarmSound.play();
  alarmSound.loop = true;
  options.style.display = "";
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  options.style.display = "none";
}

function snooze() {
  stopAlarm();
  setTimeout(initAlarm, 5000);
}

alarmButton.addEventListener("click", setAlarm, false);
snoozeButton.addEventListener("click", snooze, false);
stopButton.addEventListener("click", stopAlarm, false);
// --Alarm




 // 자동모드 
 function auto() {
   iframe.location.href=("/a");
}

// 수동모드
function manual() {
   iframe.location.href=("/b");
}


// 30도씩 각도 조절 
function servo_0() {
   iframe.location.href=("/servo0");
}
function servo_30() {
   iframe.location.href=("/servo30");
}
function servo_60() {
   iframe.location.href=("/servo60");
}
function servo_90() {
   iframe.location.href=("/servo90");
}
function servo_120() {
   iframe.location.href=("/servo120");
}
function servo_150() {
   iframe.location.href=("/servo150");
}
function servo_180() {
   iframe.location.href=("/servo180");
}   


// 블라인드 조절 button
function down() {
   iframe.location.href=("/down");
}
function up() {
   iframe.location.href=("/up");
}


// 알람을 삭제 해주는 함수 
function del_1() {
 document.getElementById('input1').innerHTML = '';
 document.getElementById('input2').innerHTML = '';
 document.getElementById('input3').innerHTML = '';
   iframe.location.href=("/d1");
}
function del_2() {
 document.getElementById('input2').innerHTML = '';
 document.getElementById('input3').innerHTML = '';
   iframe.location.href=("/d2");
}
function del_3() {
 document.getElementById('input3').innerHTML = '';
   iframe.location.href=("/d3");
}





// clock - 글자
var clockTarget = document.getElementById("clock");
function clock() {
   var date = new Date();
   var month = date.getMonth();
   var clockDate = date.getDate();
   var day = date.getDay();
   var week = ['일', '월', '화', '수', '목', '금', '토'];
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();
   clockTarget .innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일` +

   `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
}

//시간을 1초마다 업데이트 
function init() {
clock();
setInterval(clock, 1000);
}
init();



/*Up/Down, Degree switch */
var MainNav = $('.MainNav-Button');

MainNav.on('mousedown', function(){
	var $this = $(this);
	$this.parent().find('.MainNav-Button').removeClass('MainNav-Button_LeftOfActive MainNav-Button_RightOfActive MainNav-Button_Active');
	$this.addClass('MainNav-Button_Active').prev().addClass('MainNav-Button_LeftOfActive');
	$this.next().addClass('MainNav-Button_RightOfActive');
});

MainNav.on('click', function(event){
	event.preventDefault();
});


//auto switch 
'use strict';

var switchButton 			= document.querySelector('.switch-button');
var switchBtnRight 			= document.querySelector('.switch-button-case.right');
var switchBtnLeft 			= document.querySelector('.switch-button-case.left');
var activeSwitch 			= document.querySelector('.active');

function switchLeft(){
	switchBtnRight.classList.remove('active-case');
	switchBtnLeft.classList.add('active-case');
	activeSwitch.style.left 						= '0%';
}

function switchRight(){
	switchBtnRight.classList.add('active-case');
	switchBtnLeft.classList.remove('active-case');
	activeSwitch.style.left 						= '50%';
}

switchBtnLeft.addEventListener('click', function(){
	switchLeft();
}, false);

switchBtnRight.addEventListener('click', function(){
	switchRight();
}, false);

