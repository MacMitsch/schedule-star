
$(document).ready(function () {

//uses moment.js to get the date 
  $("#currentDay").text(moment().format("dddd, MMM Do YYYY "))

  $(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })
 

  function hourEvents() {
    var currentHour = moment().hour();

    // Loop function for the Time block
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1])
    
        // sweep through conditions to determine the status of the time block
      if (blockTime < currentHour) {
        $(this).addClass("past");
       
      } else if (blockTime === currentHour) {
        $(this).addClass("present");
     
      } else {
        $(this).addClass("future");
    
      }
    })
  }
//   retrieves the stored data from the local storage based off the id.
  $("#hour8 .description").text(localStorage.getItem("hour8"));
  $("#hour9 .description").text(localStorage.getItem("hour9"));
  $("#hour10 .description").text(localStorage.getItem("hour10"));
  $("#hour11 .description").text(localStorage.getItem("hour11"));
  $("#hour12 .description").text(localStorage.getItem("hour12"));
  $("#hour13 .description").text(localStorage.getItem("hour13"));
  $("#hour14 .description").text(localStorage.getItem("hour14"));
  $("#hour15 .description").text(localStorage.getItem("hour15"));
  $("#hour16 .description").text(localStorage.getItem("hour16"));
  $("#hour17 .description").text(localStorage.getItem("hour17"));
  $("#hour18 .description").text(localStorage.getItem("hour18"));


  hourEvents();
})