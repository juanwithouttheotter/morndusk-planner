$(document).ready(function () {
  var now = moment().format("[Today is ] dddd, MMMM Do YYYY");
  $("#currentDay").html(now);

  if (localStorage.getItem('event') !== null) {
    var workDay = JSON.parse(localStorage.getItem('event'));
    console.log(workDay);
  } else {
    var workDay = {
      '9am': '',
      '10am': '',
      '11am': '',
      '12pm': '',
      '1pm': '',
      '2pm': '',
      '3pm': '',
      '4pm': '',
      '5pm': ''
    };
  }

  var calendar = function () {
    for (hour in workDay) {
      $(".container").append(`
      <div class="input-group row time-block">
        <div class="hour col-md-1">${hour}</div>
        <input type="text" id="${hour}" class="form-control description col-md-10" value="" aria-label="Today's event" aria-describedby="Calendar input">
        <button class="btn btn-outline-secondary col-md-1 saveBtn" type="button"><i class="fas fa-save"></i></button> 
      </div>
    `);
    }
    for (hour in workDay) {
      $(`input[id='${hour}']`).val(workDay[hour]);
    }

    $('.saveBtn').on('click', function () {
      for (hour in workDay) {
        var event = $(`input[id='${hour}']`).val();
        console.log(event, hour);
        workDay[hour] = event;
        localStorage.setItem('event', JSON.stringify(workDay));
      }
    });
    whatTime();
  }

  var whatTime = function () {
    for (hour in workDay) {
      var format = 'hh:A'
      var time = moment();
      //feed in var time to do a time check for startHour/endHour
      var startHour = moment().startOf('hour').subtract(1, 'h');
      var endHour = moment().startOf('hour').add(1, 'h');
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
  calendar();
});