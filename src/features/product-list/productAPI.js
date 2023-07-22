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
export function fetchProductByFilters(filter, sort, pagination) {
  //filter object = {category: ["smartphone","laptop]"}
  //sort object = {_sort: "price", _order:"desc"}
  //pagination = {_page:1, _limit:10} //_page=1&_limit=10
  //TODO: on server we will support multiple value
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
