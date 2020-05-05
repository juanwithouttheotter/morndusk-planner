var now = moment().format("[Today is ] dddd, MMMM Do YYYY");
$("#currentDay").html(now);
var workDay = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var calendar = function () {
  for (hour of workDay) {
    $(".container").append(`
      <div class="input-group row time-block">
        <div class="hour col-md-1">${hour}</div>
        <input type="text" id="${hour}" class="form-control description col-md-10" aria-label="Today's event" aria-describedby="Calendar input">
        <button class="btn btn-outline-secondary col-md-1 saveBtn" type="button">Button</button> 
      </div>
    `);
  }
  whatTime();
}

var whatTime = function () {
  for (hour of workDay) {
    var format = 'hh:A'
    var time = moment();
    console.log(time);
    //feed in var time to do a time check for startHour/endHour
    var startHour = moment().startOf('hour').subtract(1, 'h');
    var endHour = moment().startOf('hour').add(1, 'h');
    hourCheck = moment(hour, format);
    if (hourCheck.isBetween(startHour, endHour)) {
      $(`input[id='${hour}']`).addClass("present");
    } else if (hourCheck.isAfter(time)) {
      $(`input[id='${hour}']`).addClass("future");
    } else if (hourCheck.isBefore(time)) {
      $(`input[id='${hour}']`).addClass("past");
    } else {
      console.log("Timey whimey stuff. ")
    }
  }
}

calendar();








var isNine = function () {
  var beforeTime = moment('09:00:00', format);
  var afterTime = moment('09:59:59', format);

  if (time.isAfter(afterTime)) {
    $('#nine').addClass("past");
  } else if (time.isBefore(beforeTime)) {
    $('#nine,#ten, #eleven, #twelve, #one, #two, #three, #four, #five').addClass("future");
  } else {
    $('#nine').addClass("present");
    $('#ten, #eleven, #twelve, #one, #two, #three, #four, #five').addClass("future");

    console.log('it is 9');
  }
}
// var isTen = function () {
//   beforeTime = moment('10:00:00', format);
//   afterTime = moment('10:59:59', format);

//   if (time.isAfter(afterTime)) {
//     $('#nine,#ten').addClass("past");
//   } else if (time.isBefore(beforeTime)) {
//     $('#eleven, #twelve, #one, #two, #three, #four, #five').addClass("future");
//   } else {
//     $('#ten').addClass("present");
//     $('#eleven, #twelve, #one, #two, #three, #four, #five').addClass("future");

//     console.log('it is 10');
//   }
// }
// var isEleven = function () {
//   beforeTime = moment('11:00:00', format);
//   afterTime = moment('11:59:59', format);

//   if (time.isAfter(afterTime)) {
//     $('#nine,#ten,#eleven').addClass("past");
//   } else if (time.isBefore(beforeTime)) {
//     $('#twelve, #one, #two, #three, #four, #five').addClass("future");

//     console.log('it is before 11');

//   } else {
//     $('#eleven').addClass("present");
//     $('#twelve, #one, #two, #three, #four, #five').addClass("future");
//   }
// }
// var isTwelve = function () {
//   beforeTime = moment('12:00:00', format);
//   afterTime = moment('12:59:59', format);

//   if (time.isAfter(afterTime)) {

//     console.log('it is after 12');

//   } else if (time.isBefore(beforeTime)) {

//     console.log('it is before 12');

//   } else {
//     console.log('it is 12');
//   }
// }
// var isOne = function () {
//   beforeTime = moment('13:00:00', format);
//   afterTime = moment('13:59:59', format);

//   if (time.isAfter(afterTime)) {

//     console.log('it is after 1');

//   } else if (time.isBefore(beforeTime)) {

//     console.log('it is before 1');

//   } else {
//     console.log('it is 1');
//   }
// }
// var isTwo = function () {
//   beforeTime = moment('14:00:00', format);
//   afterTime = moment('14:59:59', format);

//   if (time.isAfter(afterTime)) {

//     console.log('it is after 2');

//   } else if (time.isBefore(beforeTime)) {

//     console.log('it is before 2');

//   } else {
//     console.log('it is 2');
//   }
// }
// var isThree = function () {
//   beforeTime = moment('15:00:00', format);
//   afterTime = moment('15:59:59', format);

//   if (time.isAfter(afterTime)) {

//     console.log('it is after 3');

//   } else if (time.isBefore(beforeTime)) {

//     console.log('it is before 3');

//   } else {
//     console.log('it is 3');
//   }
// }
// var isFour = function () {
//   beforeTime = moment('16:00:00', format);
//   afterTime = moment('16:59:59', format);

//   if (time.isAfter(afterTime)) {

//     console.log('it is after 4');

//   } else if (time.isBefore(beforeTime)) {

//     console.log('it is before 4');

//   } else {
//     console.log('it is 4');
//   }
// }
// var isFive = function () {
//   beforeTime = moment('17:00:00', format);
//   afterTime = moment('17:59:59', format);

//   if (time.isAfter(afterTime)) {

//     console.log('it is after 5');

//   } else if (time.isBefore(beforeTime)) {

//     console.log('it is before 5');

//   } else {
//     console.log('it is 5');
//   }
// }
// isNine();
// isTen();
// isEleven();
// isTwelve();
// isOne();
// isTwo();
// isThree();
// isFour();
// isFive();
