var currentDate = moment().format("dddd, MMMM Do YYYY");

$( document ).ready(function() {
    $("#currentDay").text(currentDate);
});


// document.getElementById('currentDay').innerHTML = currentDate;