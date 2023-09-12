# E-commerce

cleaning up codes not using in the project
change the feature folder's code, make it as a sample to use for other ecommerce feature
copied the counter folder and edited the template to use it as a product list feature
clearing up the unusable parts like subcategories

making a navbar folder and sending a children prop inside of it
children prop ->
by declaring a children prop we can pass anything inside and that will be seen inside the parent component in the UI.

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

create filter object ->
useState will be used. [filter, setFilter] -> filter = empty, setFilter(newFilter). newFilter is created in a variable and then passed to t all the needed functions

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

pagination:
the required query string is needed in order to fetch the exact data. so along with filter object and sort object, we added the pagination object
state for page with default 1 and made a constant file where we saved all our constants
made the handlePage function, setPage, page states and pass it to the pagination component. make a pagination object and sent it through useEffect.
made an array of the total_items / itemsPerPage and map it to produce page numbers. page numbers will be index+1 (index starts from 0)
put the onclick handlePage function there and send the index+1 there
Json server providing a header X-total-count where the total is given so we shall capture in our API file to get the total
tackling a problem whenever the filter is selected then we get showing 11 page 5 out of 5 results. to solve this we use another useEffect where the dependencies will be the totalItems and page will set to 1.
total items will be changed whenever the items in page will become more or less.

brand and categories DYNAMIC:
convert the categories and brands to json
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
authAPI:
used post method, stringify json for sending the data, provided headers for better understanding of data.
authSlice:
changed the actions names and formatted the data accordingly. to select the data of loggedInUsers we used an action creator.

signUp:
added the dispatch function in the page to call the api for posting the values, useSelector for getting the data from API. \*\*had to remove the s from https for not working properly
NEVER STORE PASSWORD AS PASSWORD

created a new file Protected for checking if the user exists or not, if true then go to the route (sent as children) or else navigate to the login page
put all the necessary routes inside the protected route in app.js

login page:
email validation and pwd validation added. created a new api call in authAPI for checking the user.
for now using a temporary logic for our password checking.
we have to change it later on.

if user true then redirect to the home page
replace={true} :
replace the current entry in the history stack instead of adding a new one.
added a logic for checking the user and a navigating. login page and sign up page.
{user && <Navigate to="/" replace={true}></Navigate>}

put the link to login page in the sign out button. (temporarily disabled)

Cart:  
 added a cart array into the json server file. new api call in the cartApi file.
similar to create user the fist step will be to create a cart with cart items, so copy the authAPI code.
initial state now have an items array to hold the items and pushing the items into the array.
in product details page added onClick on the add to cart button.
add the cart reducer in the store file. useSelector to select the required item.
make a new get api for fetching the items in the cart (like the fetchProducts). Fetch the items according to the user id.
making the new api, new async thunk, and dispatching it in.
NOTE:
we can dispatch it in the app component as after logging in we shall get an user and use the user.id to fetch the items.

useSelector to get the items in navbar component then in the icon part used items.length to get the exact number of items
wrap around the badge in a && logic so that if the length is more than 0 then only the badge appear

Cart component:
calculate the total price and total items using the reduce method
Update Cart:
updating cart details require re-rendering and that is done through state change / useEffect, so new API shall be required
created the new api with argument as update.id and used PATCH method and passing the data
find index of items in array which is equal to the item sent through the payload and then update the item in the index with the value
in cart component made a new onchange on the quantity selector then inside the handle function we dispatched the async func to complete the work
DELETE Cart:
we need the id to delete it from the state list, similar to the patch, use the id to find the index and then splice it from the existing state

CHECKOUT page:
adding the cart styling in the checkout page. as it is of the same design. (taking the complete cart code)
logic added: if cart is empty then go back to the home page.
**NOTE** : a bug has been fixed in the product detail page
using react hook form in handling the checkout address form
checked the data that has been saved.
creating a new api for saving our details in the users object in our API backend, send updateUser data along with an id so that we can distinguish which user to add the data & will be a Patch method
directly passing the payload (user and addresses array) in the state of users (an array of addresses is being pushed in the users array)
in createUserAsync we need to initialize an empty array [for now manually putting the field in the user api]
removing the addresses static array in the checkOut page and using the user.address array
in the dispatch function the user details has been sent once more along with the addresses details passed in the addresses field
creating a new useState for saving the selected address:
could not select the value as object in html, so used the index in the value field
creating a new useState for saving the selected payment method:
handle function to handle it and checked value has been used by a logic (should look into it)

Order creation:
change the button to a div and rename it as order now, add an onclick to the div and add a handler
order folder and 3 files, order, orderSlice and OrderAPI has been created
post method API has been created to send data to the server
in slice pushing the payload inside the order state (array)
calling our addOrderAsync in the checkoutPage inside Order Now button and passing the created order object with all the required data
attaching the order reducer to the store
if address and payment mode selected then pass the order details to the server and redirect to the order successful page
we need the an order id to mark the order so we are putting the current order into a state variable and getting all the data from there and also fetch the id and use it
using the fetched order id make a parameterized route and change in the routing accordingly
we can fetch the id using the useParam hook
this will help we can add a short circuit that if order placed true then navigate to order success page
after the Order Now button is clicked we need to clear the cart
clear cart:
copy the code of delete items from cart and edit it in the cartAPI
first we need to fetch the all the items in the user's cart and then delete them
get all the items of user's cart and then delete each -> mix of both algorithm
make the async thunk of the reset api
using a useEffect in orderSuccess page we can dispatch the rest cart api call (every time the order success page will be rendered the useEffect hook will get called each time) and the cart will be cleared
another dispatch for resetting the current orders
first time we used a normal reducer because we are not dealing with any async activity resetOrder: (state) => {
state.orderPlaced = null;
},

ERROR PAGE:
created the error page

ORDER SUCCESS PAGE:
created the order success page inside the pages folder. used the short circuit created {!order && ...}

My Order page:
in navbar change the links to /profile
create a new feature folder as user where all the details of user will be present, like profile, orders and etc
userAPI: fetchLoggedInUser to fetch all the information of the users logged in, important because we shall use this
API later to get every detail of the user (later we shall reduce the information in the login and sign up and increase
the information gathered from this api)
another API to fetch all the orders from the backend of the particular user
made the async thunks and all the external reducers, now we shall put our slice reducers in the store
useEffect(no dependencies added because need the data every time the page renders) to dispatch the call and fetch the details useSelector
inside the UI return, map the orders and display, used the cart ui template to render the details and modified them a lot
made the userOrderPage to put the component inside the navbar component to make the navbar appear

USER PROFILE:
taken the template of the userOrder page and edited, in user profile page the information of the user shall be there and all the addresses of the user
to bring the info we need to create an API and a new state variable to store all the info of the user
(for testing purpose we used the loggedInUserInfo)
added a remove and an edit button in the address field
need a form to edit the data in our page so we can take the address form in the checkOut page
in auth only the login info should be there so we took the update api from the auth api and paste it in the UserAPI
in the remove button we can use the index of map to splice the element
in UserSlice made an async action for the updateUserAsync action

dispatch the fetchLoggedInUserAsync in the App.js file because after the login is done the we can get the logged in user info
change all the instances where selectLoggedInUser is being used to userInfo (userSlice)

handleRemove: we need to remove the address and update the user, make a newUser and copy the details into it and then splice the required address using the map index, then dispatch the data to updateUser async func

handleEdit:
took the template from the checkout page and edited as per requirement, in handle submit the inside dispatch the new handleEdit is placed and inside handleEdit the new address is placed the older one removed
made a state variable initially -1 and whenever the edit button will be clicked then the variable will be equal to the selected address index and the form will show
the form is wrapped around a conditional render depending on the state variable
after updating the address the
changed the approach as we need to work on 2 things, 1 set values (using setValue) and 2 changing the state variable
inside the button the variable first set to index in the setter function and then the values to be set using setValue function
added a new button cancel to remove the form by setting the state variable as -1

add new address button:
used the same form and reset it to make it empty, used state variable to show and hide the form, use the same logic that used in the edit form to push the changes

Sign Out functionality:
in authAPI a new function to get the user.id and remove it from the state variable, make the state variable null
added the new api and the new action in the slice
making a new component to just dispatch the action and condition is to delay the navigation to login page after the user info is null
changed the path to /logout in the navbar
add the logout component in the app.js

Forgot Password:
new page and a component are being made
reused the login page code and kept only input field and the button
added route in the app.js

Admin panel:
first in create user role property has been added 'user' or 'admin'
make a new protectedAdmin component where it will check whether the user exists or not and checks for the role
depending on the role it will redirect to specific routes
making a new feature ADMIN
created the new AdminProductDetails.js AdminProductList.js and corresponding landing pages in the pages folder
AdminProductDetails will contain all the product specific detail (currently the template is of ProductDetails)
AdminProductList will contain all the product specific detail (currently the template is of ProductList)
added a condition in the user profile js file that only admin can see the role in frontEnd
add admin link in the menu section in the navbar & changing the hrefs to links
also changed the navigation and added admin and user booleans
now changed the link to /admin
In the admin product list page, provide an edit button to edit the products as admin
add new product button on top of product grid which redirects to the product form page
made all the js and page components of the product form
Add New Products:
in product form used the form validation and manipulated a lot of fields and data
to submit the data to an api to post it in the product json, use the product API and create one add product API
then push the gathered data in the products state variable
Edit existing Products:
use the same form but the path will have a parameter that is the ID to edit the particular product
link is added in place of button in the AdmProdList page
extracting the id in product form page and using useEffect fetching the data of that corresponding id
calling fetchProductById inside useEffect() all these steps inside the product form file
we are using the same file to get 2 actions done
making new slice and new api for this function (always find the index first in the splice to update it or in any other logic)
making a new reducer to reset the form data whenever we want to add a new product
Delete Product:
delete button added with a condition that only will be seen when entered through the edit button not add button
when selected a product to edit only then this delete button will apply
selecting the products by id and getting the information
adding a new property to it, deleted flag, because from admin side deletion is not done for the history of data
updating the deleted flag in the product in the server (in the database)

Admin Orders Panel:
admin can see all the orders coming to the server
new component is created
a tailwind template is taken from the tailwind components website
edited the template
make a new api to fetch all the orders from the backend in orderApi file
new async thunk for the corresponding
in the UI putting it inside a mapping func to layOut the structure (all the details required has been fetched and mapped)
made two selectors, one for the totalAmount and the other for all fetched orders, using both we show it in the page
handleShow -> to show the order
handleEdit -> edit some part of order for Admin
make state variable for handleEdit to store the particular order id so that we can use it in conditional rendering of the dropdown menu
make a new adminUpdateOrder API and slice, use the find Index logic and replace the index found with the payload
using switch case we gave colors to the statuses
pagination in admin orders page
make a new folder common where we can put all the required components which can be commonly used
