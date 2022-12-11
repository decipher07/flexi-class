
/** Setting BatchId and Hashmaps */
const batchIdAndTimings = new Map();
batchIdAndTimings.set(5, "6.00 to 7.00");
batchIdAndTimings.set(6, "7.00 to 8.00");
batchIdAndTimings.set(7, "8.00 to 9.00");
batchIdAndTimings.set(8, "17.00 to 18.00");

/** Setting monthId and Hashmaps */
const monthIdAndMonth = new Map();
monthIdAndMonth.set(1, "January");
monthIdAndMonth.set(2, "February");
monthIdAndMonth.set(3, "March");
monthIdAndMonth.set(4, "April");
monthIdAndMonth.set(5, "May");
monthIdAndMonth.set(6, "June");
monthIdAndMonth.set(7, "July");
monthIdAndMonth.set(8, "August");
monthIdAndMonth.set(9, "September");
monthIdAndMonth.set(10, "October");
monthIdAndMonth.set(11, "November");
monthIdAndMonth.set(12, "December");

/** Backend Url */
const backendUrl = "http://localhost:3000"

export { batchIdAndTimings, monthIdAndMonth, backendUrl };