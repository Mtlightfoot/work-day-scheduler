// Dayjs plugins
dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_customParseFormat);

// Query selectors

// Current day selector
const currentDayText = $("#currentDay");
const saveMessage = $("#saveMessage");

// Text area selectors
const allTextAreas = $("textarea")
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

// Function when save button is clicked, text area for that div is saved
allSaveButtons.each(function () {
    $(this).on("click", function () {

        // Sets text area values to local storage
        const i = this.dataset.hour;
        workDayText["time" + i] = $(this).siblings("textarea").val();
        localStorage.setItem("local-storage-data", JSON.stringify(workDayText));

        // Shows message when a save button is clicked
        saveMessage.text("Appointment added to local storage");

        function emptyMessage() {
            saveMessage.text("");
        }

        setTimeout(emptyMessage, 2000);
    })
})