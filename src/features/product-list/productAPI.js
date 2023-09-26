// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

//fetch filter data and sort API
export function fetchProductByFilters(filter, sort, pagination, admin) {
  //filter object = {category: ["smartphone","laptop]"}
  //sort object = {_sort: "price", _order:"desc"}
  //pagination = {_page:1, _limit:10} //_page=1&_limit=10
  //TODO: on server we will support multiple value
  // TODO: Server will filter the deleted products (will not send)
  let queryString = ""; //making an empty string
  for (let key in filter) {
    //traversing through the objects
    const categoryValues = filter[key]; //complete array saved
    if (categoryValues.length) {
      //checking if the length is empty or not
      const lastCategoryValue = categoryValues[categoryValues.length - 1]; //picking up the last value
      queryString = queryString + `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString = queryString + `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString = queryString + `${key}=${pagination[key]}&`;
  }

  if (admin) {
    queryString = queryString + `admin=true`;
  }
  return new Promise(async (resolve) => {
    // TODO: we will not hard code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: totalItems } });
  });
}

// A mock function to mimic making an async request for data for categories
export function fetchAllCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/category");
    const data = await response.json();
    resolve({ data });
  });
}

// A mock function to mimic making an async request for data for categories
export function fetchAllBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}

// A mock function to mimic making an async request for data for product by Id
export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

// A mock function to mimic making an async post data of a new product
export function addProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// A mock function to mimic making an async post data of a new product
export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-Type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
