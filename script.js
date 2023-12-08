// Dayjs plugins
dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_customParseFormat);

// Query selectors

// Current day selector
const currentDayText = $("#currentDay");
const saveMessage = $("#saveMessage");

// Text area selectors
const textArea9 = $("#textarea-9");
const textArea10 = $("#textarea-10");
const textArea11 = $("#textarea-11");
const textArea12 = $("#textarea-12");
const textArea13 = $("#textarea-13");
const textArea14 = $("#textarea-14");
const textArea15 = $("#textarea-15");
const textArea16 = $("#textarea-16");
const textArea17 = $("#textarea-17");

// Save button selectors
const allSaveButtons = $(".saveBtn");
const saveButton9 = $(".btn-9");
const saveButton10 = $(".btn-10");
const saveButton11 = $(".btn-11");
const saveButton12 = $(".btn-12");
const saveButton13 = $(".btn-13");
const saveButton14 = $(".btn-14");
const saveButton15 = $(".btn-15");
const saveButton16 = $(".btn-16");
const saveButton17 = $(".btn-17");

// Variable of the current day
const currentDay = dayjs();

// Shows the current day
currentDayText.text(currentDay.format('dddd, MMMM Do'));

// Function to colour-code each time block based on past, present and future
const currentHour = parseInt(dayjs().format('H'));

$('textarea').each(function () {
    // Variable that holds the hour number for each text area time block
    const elementHour = parseInt($(this).attr('data-hour'));

    if (elementHour < currentHour) {
        $(this).addClass('past');
    } else if (elementHour === currentHour) {
        $(this).addClass('present');
    } else if (elementHour > currentHour) {
        $(this).addClass('future');
    }
})

$(document).ready(function () {

    // 9AM Save Button
    saveButton9.click(function () {
        const textArea9Content = $('#textarea-9').val();
        console.log(textArea9Content);
    });

    // 10AM Save Button
    saveButton10.click(function () {
        const textArea10Content = $('#textarea-10').val();
        console.log(textArea10Content);
    });


})

// Function when any save button is clicked a message will appear to let you know the text has been added
allSaveButtons.on("click", function () {
    saveMessage.text("Appointment added to local storage");

    function emptyMessage() {
        saveMessage.text("");
    }

    setTimeout(emptyMessage, 2000);
})

