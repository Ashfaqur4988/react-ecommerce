//post method to send data to the api and create a new user
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("/auth/signup", {
      //had to remove s from the https for not working of the code
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

//API to check the login user
export function login(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/login", {
        //had to remove s from the https for not working of the code
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

//API to check the login user is authenticated or not
export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/check");
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

//API to reset password request
export function resetPasswordRequest(email) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/reset-password-request", {
        //had to remove s from the https for not working of the code
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

//API to handle the reset password request
export function resetPassword(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/reset-password", {
        //had to remove s from the https for not working of the code
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

//API call for signOut
export function signOut() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/logout");
      if (response.ok) {
        resolve({ data: "success" });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}
