import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import SearchBox from "./components/SearchBox";
import SellerRoute from "./components/SellerRoute";
import CartScreen from "./Screens/CartScreen";
import HomeScreen from "./Screens/HomeScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import OrderListScreen from "./Screens/OrderListScreen";
import OrderScreen from "./Screens/OrderScreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductScreen from "./Screens/ProductScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import SearchScreen from "./Screens/SearchScreen";
import SellerScreen from "./Screens/SellerScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import SigninScreen from "./Screens/SigninScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import UserListScreen from "./Screens/UserListScreen";
import { listProductCategories } from "./actions/productActions";
import MessageBox from "./components/MessageBox";
import LoadingBox from "./components/LoadingBox";
import MapScreen from "./Screens/MapScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            {/* <Link to="/">
              <i
                className="fa fa-joomla fa-2x brand-icon"
                aria-hidden="true"
              ></i>
            </Link> */}
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">
              Jowett Inc.
            </Link>
          </div>
          <div className="search">
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div>
            {/* <Link to="/contactus">
              <i className="fa fa-comments" aria-hidden="true"></i> Contact Us
            </Link> */}

            <Link to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  <i className="fa fa-user " aria-hidden="true"></i>
                  {" " + userInfo.name + " "}
                  <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <i className="fa fa-history" aria-hidden="true"></i>
                    <Link to="/orderhistory">Order History</Link>
                  </li>

                  {userInfo && userInfo.isAdmin === true && (
                    <ul>
                      <li>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <Link to="/dashboard">Dashborad</Link>
                      </li>
                      <li>
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <Link to="/productlist">Products</Link>
                      </li>
                      <li>
                        <i className="fa fa-archive" aria-hidden="true"></i>
                        <Link to="/orderlist">Orders</Link>
                      </li>
                      <li>
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <Link to="/userlist">Users</Link>
                      </li>{" "}
                    </ul>
                  )}
                  {userInfo && userInfo.isSeller === true && (
                    <ul>
                      <li>
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <Link to="/productlist/seller">My Products</Link>
                      </li>
                      <li>
                        <i className="fa fa-archive" aria-hidden="true"></i>
                        <Link to="/orderlist/seller">My Sales Orders</Link>
                      </li>
                    </ul>
                  )}
                  <ul>
                    <li>
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            ) : (
              <Link to="/signin">
                <i class="fa fa-sign-in" aria-hidden="true"></i> Sign In
              </Link>
            )}
          </div>
        </header>
        <aside className={sidebarIsOpen ? "open" : ""}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                type="button"
                className="close-sidebar"
                onClick={() => setSidebarIsOpen(false)}
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        <main>
          <Route path="/seller/:id?" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
                    <PrivateRoute
            path="/map"
            component={MapScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>

          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>

          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>

          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>

          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          <p className="lac">©</p> 2021, Jowett.com, Inc. All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
