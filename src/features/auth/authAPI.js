// A mock function to mimic making an async request for data
//post method to send data to the api and create a new user
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      //had to remove s from the https for not working of the code
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info (not password)
    resolve({ data });
  });
}

//API to check the login user
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        //had to remove s from the https for not working of the code
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject({ error });
      }
    } catch (error) {
      reject({ error });
    }
  });
}

//API call for signOut
export function signOut() {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
