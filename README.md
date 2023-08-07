# E-commerce

cleaning up codes not using in the project
change the feature folder's code, make it as a sample to use for other ecommerce feature
copied the counter folder and edited the template to use it as a product list feature
clearing up the unusable parts like subcategories

making a navbar folder and sending a children prop inside of it
children prop -> by declaring a children prop we can pass anything inside and that will be seen inside the parent component in the UI.

we shall get all the icons from the hero icons package that we installed

changing the icons and adding badges
adjusted some paddings

pagination is added at the bottom of the page but within the main tag
and the col span has been set to 3

created login, sign up page
created a new feature auth
which includes authSlice, authAPI and components folder in which we have login and sign up components. later we can render them inside the pages inside the pages folder
which includes both pages. The user can log into their account or create an account.

installed react-router-dom
set the routes for home, login and sign up page
and used links instead of hrefs for routing in all the other places

added a cart page and a cart component. added links to the cart icon and continue shopping link. also added the checkout page link
made the checkout page and edited some of the things that we wanted to change

next we shall make the product details component then render it inside navbar in a new page named ProductDetailPage

change the name of product list folder to product

we copied a dummy data of products from the dummy JSON website
then we changed the product list page to show the new data

then created a new data.json in app folder and added the dummy data there for our fetching
using a package name json server to create a dummy api
installed it, started the server on port 8080 (hyper terminal)
edited the productAPI file to fetch from the server

we added the reducers to the store file and changed the async thunk function as per the requirement in the productSlice page to fetch the data.
we selected the part of slice that we wanted to by useSelector hook
using useEffect hook to do the side effect actions (to fetch the data by using dispatch function)

checking the categories in our productList file and extracting categories present in the json
edited and inserted the values of the category filter

adding the filter feature in our app. find the exact location of the filter UI code then add a handler function to it
added onChange event listeners and passed e,section,option to the handler function.
we created another api call function in the productAPI to get data by filter. created another asyncThunk in the product slice file. in extra reducers added addCase and gave the asyncFunc. in the productList file useDispatch in the event Handler function to dispatch the created function and to pass the created filter object.

create filter object -> useState will be used. [filter, setFilter] -> filter = empty, setFilter(newFilter). newFilter is created in a variable and then passed to t all the needed functions

adding the sorting feature:
changed the fields in sortOptions: price and order. copied the handler function of filter and added the required logic to it using the state for filter only

making exclusive functions for each different JSX. passing all the required states and lists as props from top level to the necessary elements

added the logic for checked and unchecked: if (e.target.checked) {
newFilter[section.id] = option.value;
} else {
delete newFilter[section.id];
}
added fetchAllProductsByFilter(filter) in dispatch so that whenever the filter is empty it will fetch all and whenever the filter is having any value it will fetch the required one
same logic used for sorting and sent through dispatch to the backend API

pagination: the required query string is needed in order to fetch the exact data. so along with filter object and sort object, we added the pagination object
state for page with default 1 and made a constant file where we saved all our constants
made the handlePage function, setPage, page states and pass it to the pagination component. make a pagination object and sent it through useEffect.
made an array of the total_items / itemsPerPage and map it to produce page numbers. page numbers will be index+1 (index starts from 0)
put the onclick handlePage function there and send the index+1 there
Json server providing a header X-total-count where the total is given so we shall capture in our API file to get the total
tackling a problem whenever the filter is selected then we get showing 11 page 5 out of 5 results. to solve this we use another useEffect where the dependencies will be the totalItems and page will set to 1.
total items will be changed whenever the items in page will become more or less.

brand and categories DYNAMIC: convert the categories and brands to json
create new api calls for brand and category, similarly create new async thunks and selectors for both
then in the product list page put the selected in the options field of the filters objects
put the filters object inside the function and then pass the filter as a prop to all the other required components
make another useEffect to dispatch whenever the product list is fetched the filters should get fetched along with it
NOTE: remember to format the json file properly

for next page icon we shall add the onclick and make page + 1 but not while in the last page. this should be the restriction to be applied

product details page: added /:id -> implies a variable.
for the time being added && to all the map function.
changed product.name to product.title
changed reviews object as per our requirement
added a new api call with endpoint product id, created new async thunk and addCase then selected using the useSelector. then dispatch it inside an useEffect hook and passing the id as parameter.

LOGIN PAGE:
form handling we are going to use react-hook-form
all validations can be done with the help of this package
email validation, password pattern, regex pattern from the internet.
password validation is done with the form-hook documentation

API for sending our data to the backend, so edit the authSlice and authAPI
authAPI: used post method, stringify json for sending the data, provided headers for better understanding of data.
authSlice: changed the actions names and formatted the data accordingly. to select the data of loggedInUsers we used an action creator.

signUp: added the dispatch function in the page to call the api for posting the values, useSelector for getting the data from API. \*\*had to remove the s from https for not working properly
NEVER STORE PASSWORD AS PASSWORD

created a new file Protected for checking if the user exists or not, if true then go to the route (sent as children) or else navigate to the login page
put all the necessary routes inside the protected route in app.js

login page: email validation and pwd validation added. created a new api call in authAPI for checking the user.
for now using a temporary logic for our password checking.
we have to change it later on.

if user true then redirect to the home page
replace={true} : replace the current entry in the history stack instead of adding a new one.
added a logic for checking the user and a navigating. login page and sign up page.
{user && <Navigate to="/" replace={true}></Navigate>}

put the link to login page in the sign out button. (temporarily disabled)

Cart: added a cart array into the json server file. new api call in the cartApi file.
similar to create user the fist step will be to create a cart with cart items, so copy the authAPI code.
initial state now have an items array to hold the items and pushing the items into the array.
in product details page added onClick on the add to cart button.
add the cart reducer in the store file. useSelector to select the required item.
make a new get api for fetching the items in the cart (like the fetchProducts). Fetch the items according to the user id.
making the new api, new async thunk, and dispatching it in.
NOTE: we can dispatch it in the app component as after logging in we shall get an user and use the user.id to fetch the items.

useSelector to get the items in navbar component then in the icon part used items.length to get the exact number of items
wrap around the badge in a && logic so that if the length is more than 0 then only the badge appear

Cart component: calculate the total price and total items using the reduce method
Update Cart: updating cart details require re-rendering and that is done through state change / useEffect, so new API shall be required
created the new api with argument as update.id and used PATCH method and passing the data
find index of items in array which is equal to the item sent through the payload and then update the item in the index with the value
in cart component made a new onchange on the quantity selector then inside the handle function we dispatched the async func to complete the work
DELETE Cart: we need the id to delete it from the state list, similar to the patch, use the id to find the index and then splice it from the existing state
