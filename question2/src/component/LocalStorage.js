export const getLocalItems = () => {
  let list = localStorage.getItem("AllTodo");
  if (list) {
    return JSON.parse(localStorage.getItem("AllTodo"));
  } else {
    return [];
  }
};

const date = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
export let nowDay = weekday[date.getDay()];
