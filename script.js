$(function () {
  
  $(".saveBtn").on("click", function () {
  
    var userInput = $(this).siblings("textarea").val();

    
    var timeBlockId = $(this).closest(".time-block").attr("id");

    
    localStorage.setItem(timeBlockId, userInput);
  });

  
  var currentHour = dayjs().format("H");
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //  local storage to save user inputs
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId);
    if (savedUserInput) {
      $(this).find("textarea").val(savedUserInput);
    }
  });

  
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
