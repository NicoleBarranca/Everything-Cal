$(document).ready(function () {
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    
    var currentHour = moment().format("H");


 
    $(".saveBtn").on("click", function () {
        var value = $(this).prev().val();
        var key = $(this).parent().attr('id');
        console.log(key, value)
        localStorage.setItem(key, value);
     
    }
    )

    $(".description").each(function(){
        if (Number($(this).attr('id')) < Number(currentHour)){
            $(this).addClass("past")
        } else if (Number($(this).attr('id')) === Number(currentHour)){
                $(this).addClass("present")
        } else $(this).addClass("future")
    })
    

        $(".time-block").each(function(){
            var key = $(this).attr('id');
            var value = localStorage.getItem(key);
            $(this).children(".description").val(value);
        })
});
