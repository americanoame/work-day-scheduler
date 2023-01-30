var saveBtn = $('.saveBtn');
var currentDay = dayjs().format('MMMM DD, YYYY');
$('#currentDay').text(currentDay);
// use the currentDay to set the text of p tag with id currentDay
$(".saveBtn").dblclick(function () {
    console.log(this);
    console.log($(this).parent())
    var test = $(this).parent();

    var textarea = test[0].children[1].value;
    var id = test[0].id
    var idHour = id.split('-')[1];

    console.log(idHour)
    console.log(textarea)

    // comapre the idHour to the current hour to see if the time block is in the past,present, or future

    setLocalStorage(textarea, idHour);

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

})
function renderPrevNotes() {
    // get all the hours from local storage
    let oldLocal = getLocalStorage();
    let allTextAreas = $('textarea');

    //loop through them and place them in the text areas of correct block
    for (let i = 0; i < oldLocal.length; i++) {
        allTextAreas[i].value = oldLocal[i]
    }
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem('hours')) || ['', '', '', '', '', '', '', '', '']
};

function setLocalStorage(stringToAdd, hour) {
    let currentlyInLocal = getLocalStorage();
    currentlyInLocal[hour - 9] = stringToAdd;
    localStorage.setItem('hours', JSON.stringify(currentlyInLocal))
}

renderPrevNotes()
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?



    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
