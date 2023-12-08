// Dayjs plugins
dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_customParseFormat);

// Query selectors
const currentDayText = $("#currentDay");




// Variable of the current day
const currentDay = dayjs();

// Shows the current day
currentDayText.text(currentDay.format('dddd, MMMM Do'));



