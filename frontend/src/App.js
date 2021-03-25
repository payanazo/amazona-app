import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
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
import SellerScreen from "./Screens/SellerScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import SigninScreen from "./Screens/SigninScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import UserListScreen from "./Screens/UserListScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/">
              <i
                className="fa fa-joomla fa-2x brand-icon"
                aria-hidden="true"
              ></i>
            </Link>
            <Link className="brand" to="/">
              Jowett Inc.
            </Link>
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
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
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
