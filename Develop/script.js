$(document).ready(function () {
    // Current Date for top of the web page
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    // variable for the current hour, later in the .each we can define past, present and future for color coding
    var currentHour = moment().format("H");


    // Save content in text areas to local storage
    $(".saveBtn").on("click", function () {
        var value = $(this).prev().val();
        var key = $(this).parent().attr('id');
        console.log(key, value)
        localStorage.setItem(key, value);

    }
    )
    // if the current hour is greater than the hour in this time block give it the class of past
    // else if the current hour is equal to this time block give it the class of present
    // else (not greater and not equal to) give time block class of future
    $(".description").each(function () {
        if (Number($(this).attr('id')) < Number(currentHour)) {
            $(this).addClass("past")
        } else if (Number($(this).attr('id')) === Number(currentHour)) {
            $(this).addClass("present")
        } else $(this).addClass("future")
    })

    // In the time block with class of .time-block, we want to save text in text area with the class of .description
    $(".time-block").each(function () {
        var key = $(this).attr('id');
        var value = localStorage.getItem(key);
        $(this).children(".description").val(value);
    })
});
