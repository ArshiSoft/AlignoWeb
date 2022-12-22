import { message } from "antd";
import { getCurrentDate, getCurrentDateTime } from "./clsGeneralVariables";


export function isToken() {
 
  var rtnValue = true;

  if (!localStorage.getItem("token")) rtnValue = false;

  var datetime = localStorage.getItem("expiry");

  if (!datetime) rtnValue = false;

  var expiryDate = new Date(datetime);
  var currentDate = new Date();

  if (currentDate > expiryDate) rtnValue = false;

  return rtnValue;
}

export function updateTokenExpiry() {
  localStorage.setItem("expiry", getCurrentDateTime(0,0,0,1,0,0));
}

export function createToken(token) {
  var dateTime = getCurrentDateTime(0,0,0,1,0,0);

  localStorage.setItem("expiry", dateTime);
  localStorage.setItem("token", token);
}

export function removeToken() {
  
  localStorage.removeItem("token");
  localStorage.removeItem("expiry");
 
  
}
