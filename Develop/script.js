$(document).ready(function () {
    $("#currentDay").text(currentDate);
    var currentDate = moment().format("dddd, MMMM Do YYYY");


    $(".saveBtn").on("click", function () {
        var value = $(this).prev().val();
        var key = $(this).parent().attr('id');

        localStorage.setItem(key, value);
        // console.log(value)
    }
    )




    //    alert("button Clicked with index# " + index)
    //  localStorage.textAreas(".description")

    // var textAreas = $(".description");
    // console.log(textAreas)

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