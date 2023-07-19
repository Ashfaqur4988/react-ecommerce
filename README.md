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
