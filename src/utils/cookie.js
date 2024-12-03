// Function to set a cookie
export const setCookie = (name, value, mins) => {
  let expires = "";
  if (mins) {
    const date = new Date();
    date.setTime(date.getTime() + mins * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
};

// Function to get a cookie by name
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

export const deleteCookie = (name) => {
  console.log("deleteCookie 🐶");
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
