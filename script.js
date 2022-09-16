//create a function to store time

function displayTime() {

	var dateTime = new Date();
	var hours = dateTime.getHours();
	var minutes = dateTime.getMinutes();
	var seconds = dateTime.getSeconds();
	var session = document.getElementById('sessions');

// if statment to switvh from AM to PM
	if (hours >= 12) {
		session.innerHTML = 'PM';
	} else {
		session.innerHTML = 'AM';
	}

// if statment to switch to 12 hour format

	if (hours > 12) {
		hours = hours - 12;
	}



	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;

} 
setInterval(displayTime, 10); 

var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();
 
 setInterval (
 		function () {

 			d = new Date();
 			second = d.getSeconds() * 6;
 			minute = d.getMinutes() * 6;
 			hour = d.getHours() * 30 + Math.round (minute / 12);
 			document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
 			document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
 			document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
 		}, 10
 	)
var digitalSwitch = document.getElementById('class');
var container = document.getElementById('container');
var analog = document.getElementById('analog');
var analogSwitch = document.getElementById('analog1');

digitalSwitch.addEventListener("click" , e => {
	container.classList.remove('hidden');
	analog.classList.add('hidden');
	analog1.classList.remove('hidden');
	digitalSwitch.classList.add('hidden')
})

analogSwitch.addEventListener('click' , e => {
	container.classList.add('hidden');
	analog.classList.remove('hidden');
	analog1.classList.add('hidden');
	digitalSwitch.classList.remove('hidden')
})



// document.getElementsByTagName('span').onmouseover.style.color = 'linear-gradient(to right, rgb(38, 232, 174), rgb(0, 255, 17))';