// Dayjs plugins
dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_customParseFormat);

// Query selectors

// Current day selector
const currentDayText = $("#currentDay");
const saveMessage = $("#saveMessage");

// Text area selector
const allTextAreas = $("textarea")

// Save button selector
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

// Sets the initial text area content for each time block using local storage
allTextAreas.each(function () {
    $(this).text(workDayText["time" + this.dataset.hour]);
});

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