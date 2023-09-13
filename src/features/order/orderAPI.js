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

// A mock function to mimic making an async request to fetch all data of
export function fetchAllOrders({ pagination, sort }) {
  //pagination = {_page:1, _limit:10} //_page=1&_limit=10
  let queryString = ""; //making an empty string

  for (let key in pagination) {
    queryString = queryString + `${key}=${pagination[key]}&`;
  }

  for (let key in sort) {
    queryString = queryString + `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    // TODO: we will not hard code server URL here
    const response = await fetch("http://localhost:8080/orders?" + queryString);
    const data = await response.json();
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: totalOrders } });
  });
}

//update order form the admin side
export function adminUpdateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders/" + order.id, {
      //had to remove s from the https for not working of the code
      method: "PATCH",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
