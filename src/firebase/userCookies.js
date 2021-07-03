import cookies from "js-cookies";

export const getUserFromCookie = () => {
  const cookie = cookies.getItem("auth");

  if (!cookie) return;

  return JSON.parse(cookie);
};

export const setUserCookie = (user) => {
  cookies.setItem("auth", JSON.stringify(user), {
    expires: 1 / 24,
  });
};

export const removeUserCookie = () => cookies.removeItem("auth");
