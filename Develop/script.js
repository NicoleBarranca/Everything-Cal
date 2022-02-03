var currentDate = moment().format("dddd, MMMM Do YYYY");
var textAreas = $('.description')
var timeContainer = $('.time-container')
var timeArea = $('.time-area')

$(document).ready(function () {
    $("#currentDay").text(currentDate);
});

var timeSlots = [
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
];


timeSlots.forEach(function (timeSlot) {
    var timeListContainer = document.createElement('div')
    var timeList = document.createElement('div')
    var timeNumber = document.createElement('p')
    var inputContainer = document.createElement('div')
    var input = document.createElement('textarea')
    var saveBtnContainer = document.createElement('div')
    var saveBtn = document.createElement('button')
    input.setAttribute("id", timeSlot)
    input.setAttribute("class", "description")

    if (timeSlot >= 9) {
        timeNumber.textContent = timeSlot + 'am'
    } else {
        timeNumber.textContent = timeSlot + 'pm'
    }

    if (timeSlot === 12) {
        timeNumber.textContent = timeSlot + 'pm'
    }

    saveBtn.textContent = 'SAVE'
    timeListContainer.append(timeList)
    timeList.append(timeNumber)
    inputContainer.append(input)
    saveBtnContainer.append(saveBtn)

    timeNumber.setAttribute('data-time', timeSlot)
    saveBtn.setAttribute('class', 'saveBtn')

    timeArea.append(timeListContainer, inputContainer, saveBtnContainer)
    timeContainer.append(timeArea)
});

var saveBtns = $(".saveBtn");
console.log(saveBtns)

saveBtns.each(function (index) {
    $(saveBtns[index]).on("click", function () {
        alert("button Clicked with index# " + index)
        var time = $(this).parent().attr('id')
        var value = $('description').val();
        localStorage.setItem(time, value);
    })
});


    

  












// $('#test').html("Test");
// localStorage.content = $('#test').html();
// $('#test').html(localStorage.content);
// })

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