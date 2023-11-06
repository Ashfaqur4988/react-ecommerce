export function addToCart(items) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart", {
      //had to remove s from the https for not working of the code
      method: "POST",
      body: JSON.stringify(items),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// fetching cart items by user ids
export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart");
    const data = await response.json();
    resolve({ data });
  });
}

//updating cart
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + update.id, {
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
    const response = await fetch("/cart/" + itemId, {
      //had to remove s from the https for not working of the code
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

//deleting from cart of a specific user
export function resetCart() {
  return new Promise(async (resolve) => {
    //async thunk accepts only promises
    const response = await fetchItemsByUserId(); //get all the items of user's cart
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id); //delete items of that user's cart
    }
    resolve({ status: "success" });
  });
}
