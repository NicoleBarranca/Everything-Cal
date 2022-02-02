var currentDate = moment().format("dddd, MMMM Do YYYY");



$( document ).ready(function() {
    $("#currentDay").innerHTML = currentDate;
    console.log(currentDate);
});


// document.getElementById('currentDay').innerHTML = currentDate;