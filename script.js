// Day.js display date format.
function displayTime() {
  var time = dayjs().format('MMM D, YYYY [at] hh:mm:ss a')
  $('#current-time-date').text(time);
  console.log(time)
}

// Added code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
$(document).ready(function() {
 const timeBlockContainer = $('#timeBlock')
 const currentTime = new Date().getHours()
 console.log(currentTime)
  for (let i = 1; i < 24; i ++ ){
    const timeBlock = $('<div class="row time-block"></div>')
    const time = $('<p class="col-2 col-md-1 hour text-center py-3"></p>')
    const text = $('<textarea class="col-8 col-md-10 description"></textarea>')
    const button = $('<button class="btn saveBtn col-2 col-md-1" aria-label ="save"></button>')
    const icon = $('<i class="fas fa-save" aria-hidden="true"></i>')
    const form = document.querySelector('form')

    let className;
    if (currentTime > i){
      className = 'past'
    }else if(i === currentTime){
      className = 'present'
    }else{
      className = 'future'
    } 
    let formattedTime;
    if (i < 12){
      formattedTime = i + "AM"
    }else if(i - 12) {
      formattedTime = (i - 12) + "PM"
    }else{
      formattedTime = "12PM"
    }
// Save content text to local storage.
    timeBlock.addClass(className)
    time.text(formattedTime)
    const saveText = localStorage.getItem(formattedTime) || ""
    text.val(saveText)

   button.append(icon)
   timeBlock.append(time, text, button,)
   timeBlockContainer.append(timeBlock)
  }
  displayTime()
  // Added a listener for click events on the save button. 
   $('.saveBtn').on('click', function(){
    var value = $(this).siblings('.description').val()
    var time = $(this).siblings()[0].textContent
    localStorage.setItem(time,value)
   })

});
