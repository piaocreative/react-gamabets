import * as uuid from "uuid";

export const DEVICE_ID = "DEVICE_ID";
export const AUTH_TOKEN = "AUTH_TOKEN";
export const USER_ID = "USER_ID";

export const setLS = (key, value) => localStorage.setItem(key, value);
export const getLS = (key) => localStorage.getItem(key);
export const clearLS = (key) => localStorage.removeItem(key);
export const randomId = () => uuid.v4();

export const getDeviceId = () => {
  const currentDeviceId = getLS(DEVICE_ID);
  if (currentDeviceId) return currentDeviceId;
  const newDeviceId = randomId();
  setLS(DEVICE_ID, newDeviceId);
  return newDeviceId;
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    // Ignore write error
  }
};

export const displayBalance = (val) => {
  if (typeof val === "string" || isNaN(val)) return val;
  const num = Number.parseFloat(val)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return ` ₹ ${num}`;
};

export const titleCase = (str = "") => {
  if (!str || str.length < 2) return str;
  const result = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  console.log("titleCase", { str, result });
  return result;
};

export const hasDuplicateDigit = (val = "") => {
  const arr = Array.from(val);
  const set = new Set(arr);
  return arr.length !== set.size;
};
