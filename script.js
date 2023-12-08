// Dayjs plugins
dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_customParseFormat);

// Query selectors
const currentDayText = $("#currentDay");
const textArea9 = $("#textarea-9");
const textArea10 = $("#textarea-10");
const textArea11 = $("#textarea-11");
const textArea12 = $("#textarea-12");
const textArea13 = $("#textarea-13");
const textArea14 = $("#textarea-14");
const textArea15 = $("#textarea-15");
const textArea16 = $("#textarea-16");
const textArea17 = $("#textarea-17");


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


