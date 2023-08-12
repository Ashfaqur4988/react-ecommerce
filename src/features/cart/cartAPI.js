export function addToCart(items) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      //had to remove s from the https for not working of the code
      method: "POST",
      body: JSON.stringify(items),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info (not password)
    resolve({ data });
  });
}

// fetching cart items by user ids
export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code server URL here
    const response = await fetch("http://localhost:8080/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

//updating cart
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + update.id, {
      //had to remove s from the https for not working of the code
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

//deleting from cart
export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      //had to remove s from the https for not working of the code
      method: "DELETE",
      body: JSON.stringify(itemId),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}
