// A mock function to mimic making an async request for data
export function createOrder(orderData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders", {
      //had to remove s from the https for not working of the code
      method: "POST",
      body: JSON.stringify(orderData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
