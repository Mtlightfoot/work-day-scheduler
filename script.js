dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_customParseFormat);

const currentDayText = $("#currentDay");



const currentDay = dayjs();

console.log(currentDay.format('dddd, MMMM Do'))
