import { createSignal, createRoot } from "solid-js";
import jwt_decode from "jwt-decode";
let cachedDecodedToken;

// const localStorageProxy = new Proxy(localStorage, {
//   set: function (target, key, value) {
//     if (key === "token") {
//       user = parseToken();
//       cachedDecodedToken = undefined;
//     }
//     return Reflect.set(...arguments);
//   },
// });

// function parseToken() {
//   if (!cachedDecodedToken) {
//     const token = localStorageProxy.getItem.call(localStorage, "token");
//     cachedDecodedToken = token ? jwt_decode(token) : "";
//   }

//   return cachedDecodedToken;
// }

function passUser() {
  if (!cachedDecodedToken) {
    const user = window.localStorage.getItem("user");
    // console.log({ userInPass: user });
    cachedDecodedToken = user ? JSON.parse(user) : "";
  }

  return cachedDecodedToken;
}

function createUser() {
  if (!window.localStorage.getItem("token")) {
    window.localStorage.setItem("token", "");
  }
  const [user, setUser] = createSignal(
    window.localStorage.getItem("token") ? passUser() : ""
  );
  return { user, setUser };
}

export default createRoot(createUser);
