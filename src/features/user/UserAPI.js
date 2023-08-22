// API to get the user information
export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

// API to get the user's order
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/orders/?users.id=" + userId //getting inside the json format to get the user ID
    );
    const data = await response.json();
    resolve({ data });
  });
}
