$(document).ready(function () {
  var now = moment().format("[Today is ] dddd, MMMM Do YYYY");
  $("#currentDay").html(now);
  var workDay = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
  var dayEvents = {};
  var calendar = function () {
    for (hour of workDay) {
      $(".container").append(`
      <div class="input-group row time-block">
        <div class="hour col-md-1">${hour}</div>
        <input type="text" id="${hour}" class="form-control description col-md-10" value="" aria-label="Today's event" aria-describedby="Calendar input">
        <button class="btn btn-outline-secondary col-md-1 saveBtn" type="button">Button</button> 
      </div>
    `);
    }
    $('.saveBtn').on('click', function () {
      for(hour of workDay) {
      var event = $(`input[id='${hour}']`).val();
      console.log(event,hour);
      dayEvents[hour] = event;
      }
      console.log(dayEvents);
    });


    whatTime();
  }

  var whatTime = function () {
    for (hour of workDay) {
      var format = 'hh:A'
      var time = moment('11:30:00:AM', format);
      //feed in var time to do a time check for startHour/endHour
      var startHour = moment(time).startOf('hour').subtract(1, 'h');
      var endHour = moment(time).startOf('hour').add(1, 'h');
      hourCheck = moment(hour, format);
      if (hourCheck.isBetween(startHour, endHour)) {
        $(`input[id='${hour}']`).addClass("present");
      } else if (hourCheck.isAfter(time)) {
        $(`input[id='${hour}']`).addClass("future");
      } else if (hourCheck.isBefore(time)) {
        $(`input[id='${hour}']`).addClass("past").prop("readonly", true);
      } else {
        console.log("Timey whimey stuff. ")
      }
    }
  }
  //working on saving key an object to the proper input
  //for loop
  // if key === in put id, add value/user input

  // $(document).on('click', '.saveBtn', function () {
  //     var event = $(this).closest("div.input-group").find("input[class='form-control']").val();
  //     console.log(event);
  //   });


  // $('.saveBtn').on('click', function(){
  //   console.log('I be clicked');
  // });



  calendar();

});