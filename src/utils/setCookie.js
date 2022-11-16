/* eslint-disable no-debugger */
export const setCookie = (name, value) => {
    debugger;
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/`;
}