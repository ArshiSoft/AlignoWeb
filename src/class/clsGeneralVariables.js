import { message } from "antd";
import { getTime, min } from "date-fns";

export function getCurrentDate(separator = "-") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export function getCurrentTime(separator = "-") {
  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  return `${hours < 10 ? `0${hours}` : `${hours}`}${separator}${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }${separator}${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

export function getCurrentDateTime(
  addYears = 0,
  addMonths = 0,
  addDays = 0,
  addHours = 0,
  addMinutes = 0,
  addSeconds = 0
) {
  let newDate = new Date();
  newDate.setFullYear(newDate.getFullYear() + addYears);
  newDate.setMonth(newDate.getMonth() + addMonths);
  newDate.setDate(newDate.getDate() + addDays);
  newDate.setHours(newDate.getHours() + addHours);
  newDate.setMinutes(newDate.getMinutes() + addMinutes);
  newDate.setSeconds(newDate.getSeconds() + addSeconds);

  message.info(newDate);

  return newDate;
}

export function formatDate(date) {
  let strDate =
    date.getDate() + "-" + parseInt(date.getMonth()) + "-" + date.getFullYear();
  return strDate;
}
