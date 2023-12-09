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

let workDayText = {
    time9: "",
    time10: "",
    time11: "",
    time12: "",
    time13: "",
    time14: "",
    time15: "",
    time16: "",
    time17: ""
}

workDayText = JSON.parse(localStorage.getItem("local-storage-data"));

if (workDayText === null) {
    workDayText = {};
};

textArea9.text(workDayText.time9);
textArea10.text(workDayText.time10);
textArea11.text(workDayText.time11);
textArea12.text(workDayText.time12);
textArea13.text(workDayText.time13);
textArea14.text(workDayText.time14);
textArea15.text(workDayText.time15);
textArea16.text(workDayText.time16);
textArea17.text(workDayText.time17);


// 9AM Save Button
saveButton9.click(function () {
    workDayText.time9 = $('#textarea-9').val();
    console.log(workDayText);
    localStorage.setItem("local-storage-data", JSON.stringify(workDayText));
});

// 10AM Save Button
saveButton10.click(function () {
    workDayText.time10 = $('#textarea-10').val();
    console.log(workDayText);
    localStorage.setItem("local-storage-data", JSON.stringify(workDayText));
});


// Function when any save button is clicked a message will appear to let you know the text has been added
allSaveButtons.on("click", function () {
    saveMessage.text("Appointment added to local storage");

    function emptyMessage() {
        saveMessage.text("");
    }

    setTimeout(emptyMessage, 2000);
})