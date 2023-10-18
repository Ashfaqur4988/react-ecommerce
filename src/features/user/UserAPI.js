// API to get the user information
export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/own");
    const data = await response.json();
    resolve({ data });
  });
}

// API to get the user's order
export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "/orders/own" //getting inside the json format to get the user ID
    );
    const data = await response.json();
    resolve({ data });
  });
}

//posting the new address data in our users API
export function updateUser(updateData) {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/" + updateData.id, {
      //had to remove s from the https for not working of the code
      method: "PATCH",
      body: JSON.stringify(updateData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info (not password)
    resolve({ data });
  });
}
