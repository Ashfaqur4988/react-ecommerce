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
