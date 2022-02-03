$( document ).ready(function() {
    
    var currentDate = moment().format("dddd, MMMM Do YYYY");


$( document ).ready(function() {
    $("#currentDay").text(currentDate);
});

// add event listeners to individual buttons
var saveBtns = $(".saveBtn");
console.log(saveBtns)

saveBtns.each(function( index ) {
    $(saveBtns[index]).on("click", function() {
        alert("button Clicked with index# " + index)
      //  localStorage.textAreas(".description")
    })

    // var time = $('.hour')
    // var value = $('#9').val();

    // localStorage.setItem();

});

var textAreas = $(".description");
console.log(textAreas)

// try rewriting this code to fit your array needs
// localStorage only supports strings. Use JSON.stringify() and JSON.parse().

// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));

// var animals = ["dog", "cat", "monkey", "beaver"]

// $(animals).each(function(i) {
//     console.log(animals[i])
// })

// for(var i = 0; i < animals.length; i++) {
//     console.log(animals[i])
// }

// associate buttons with appropriate text areas

// based on the indivduls button we want to save appropriate text area value to local storage

// make sure all text areas have correct background color

// document.getElementById('currentDay').innerHTML = currentDate;
});