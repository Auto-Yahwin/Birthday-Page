/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let day=document.getElementById("days")
let hrs=document.getElementById("hours")
let mins=document.getElementById("minutes")
let secs=document.getElementById("seconds")
let card=document.getElementById("resultCard")
let resultCard=document.getElementById("resultCard")
let cancel=document.getElementById("x")
let titleTxt=document.getElementById("h3")
let linkOrNumber=document.getElementById("anchor")
let submit=document.getElementById("contactForm")
let message=document.getElementById("message").value
let cake=document.getElementsByClassName("cake")[0]
let laugh=document.getElementsByClassName("laugh")[0]
/*let surprise1=document.getElementById("surprise1")
let surprise2=document.getElementById("surprise2")
let surprise3=document.getElementById("surprise3")*/

targetDate=new Date("Febraury 11 2025 00:00")
setInterval(countDown,1000)
function countDown() {
    currentDate=new Date()
    let dayVal=Math.floor((targetDate-currentDate)/1000/60/60/24)
    let hrsVal=Math.floor((targetDate-currentDate)/1000/60/60)%24
    let minsVal=Math.floor((targetDate-currentDate)/1000/60)%60
    let secsVal=Math.floor((targetDate-currentDate)/1000)%60
    if (targetDate-currentDate <= 0) {
        day.innerHTML="00"
        hrs.innerHTML="00"
        mins.innerHTML="00"
        secs.innerHTML="00"
    } else {
        day.innerHTML=format(dayVal)
        hrs.innerHTML=format(hrsVal)
        mins.innerHTML=format(minsVal)
        secs.innerText=format(secsVal)
        secs.style.color=== "white"? secs.style.color="red":secs.style.color="white"
        return currentDate
    }
}

function format(value) {
    return value < 10 ? `0${value}` : value
}

function event1() {
    resultCard.style.display="block"
    if (targetDate-currentDate <=0) {
        titleTxt.innerHTML="<i class='fa-solid fa-cake-candles fa-3x cake'></i><br>Congratulations, You Now Have a Portfolio.<br>Access it with the link below"
        linkOrNumber.innerHTML="Your Portfolio Page"
    } else {
        titleTxt.innerHTML="A little patience!!<br>This surpise isn't available untill 11th of Febraury"
    }
}
function event2() {
    resultCard.style.display="block"
    if (targetDate-currentDate <=0) {
        titleTxt.innerHTML="<i class='fa-regular fa-face-laugh-squint fa-3x'></i><br>Gotcha!!<br> There's no surprise package here"
        linkOrNumber.innerHTML=""
    } else {
        titleTxt.innerHTML="A little patience!!<br>This surpise isn't available untill 11th of Febraury"
    }
    
}
function event3() {
    resultCard.style.display="block"
    if (targetDate-currentDate <=0) {
        titleTxt.innerHTML="<i class='fa-solid fa-cake-candles fa-3x cake'></i><br>Contact the number below for your surprise package"
        linkOrNumber.innerHTML="+2348083953823"
    } else {
        titleTxt.innerHTML="A little patience!!<br>This surpise isn't available untill 11th of Febraury"
    }
}

function x() {
    resultCard.style.display="none"
}

function whatsapp() {
    var url="https://wa.me/2348101299724?text="+message.replace(" ", "%20")
    //alert(url)
    window.open(url,"_blank").focus()
}