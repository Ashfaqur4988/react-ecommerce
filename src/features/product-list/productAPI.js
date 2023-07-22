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
export function fetchProductByFilters(filter, sort) {
  //filter object = {category: ["smartphone","laptop]"}
  //sort object = {_sort: "price", _order:"desc"}
  //TODO: on server we will support multiple value
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key]; //complete array saved
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]; //picking up the last value
      queryString = queryString + `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString = queryString + `${key}=${sort[key]}&`;
  }
  return new Promise(async (resolve) => {
    // TODO: we will not hard code server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
