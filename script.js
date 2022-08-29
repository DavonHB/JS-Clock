const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let ids = ["name", "month", "number", "year", "hour", "minutes", "seconds", "period"]

function updateClock() {
    let now = new Date()

    // date variables
    let name = now.getDay()
    let month = now.getMonth()
    let number = now.getDate()
    let year = now.getFullYear()

    // time variables
     let hour = now.getHours()
     let minute = now.getMinutes()
     let seconds = now.getSeconds()
     let period = "AM"

     if (hour == 0) {
        hour = 12;
     }

     if ( hour >= 12 && hour < 24) {
        period = "PM"
     }

     if (hour > 12) {
        hour = hour - 12
     }

     if (hour < 10) {
        hour = "0" + hour;
     }

     if (number < 10) {
        number = "0" + number
     }

     if (seconds < 10) {
        seconds = "0" + seconds
     }

     let values = [week[name], months[month], number, year, hour, minute, seconds, period]

     // iterate through ids

     for (let i = 0; i < ids.length; i++) 
     document.getElementById(ids[i]).firstChild.nodeValue = values[i]

}


function initializeClock() {
    updateClock();

    window.setInterval("updateClock()", 1)
}