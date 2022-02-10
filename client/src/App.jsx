import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./pages/CartScreen";
import Home from "./pages/Home/Home";
import OrderScreen from "./pages/OrderScreen";
import PaymentMethodScreen from "./pages/PaymentMethodScreen";
import ProductScreen from "./pages/ProductScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ShippingAddressScreen from "./pages/ShippingAddressScreen";
import SigninScreen from "./pages/SigninScreen";
import SeeOrderScreen from "./pages/SeeOrderScreen"
import OrderHistoryScreen from './pages/OrderHistoryScreen';
import ProfileScreen from "./pages/ProfileScreen";
import PrivateRoute from "./components/PrivatRoute";
import AdminRoute from "./components/AdminRouter";
import ProductListPage from "./pages/ProductListPage";
import ProductEditScreen from "./pages/ProductEditScreen";
import CreateProduct from "./pages/CreateProduct";
import OrderListScreen from './pages/OrderListScreen.js';
import UserListScreen from './pages/UserListScreen.js';
import UserEditScreen from './pages/UserEditScreen.js';
import Header from "./components/Header/Header"
import SearchScreen from "./pages/SearchScreen";


const App = () => {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <ProductScreen />
        </Route>
        <Route exact path="/product/create">
          <CreateProduct />
        </Route>
        <Route path="/signin">
          <SigninScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
        <Route path="/cart">
          <CartScreen />
        </Route>
        <Route path="/shipping">
          <ShippingAddressScreen />
        </Route>
        <Route path="/payment">
          <PaymentMethodScreen />
        </Route>
        <Route path="/placeorder">
          <OrderScreen />
        </Route>
        <Route path="/order/:id">
          <SeeOrderScreen />
        </Route>
        <Route
          exact path="/product/:id/edit"
          component={ProductEditScreen}

        ></Route>

        <Route path="/orderhistory">
          <OrderHistoryScreen />
        </Route>
        <PrivateRoute path="/profile" component={ProfileScreen} >
          <Route
            path="/search/:name"
            component={SearchScreen}
            exact
          ></Route>
        </PrivateRoute>
        <AdminRoute path="/productlist">
          <ProductListPage />
        </AdminRoute>
        <AdminRoute
          path="/orderlist"
          component={OrderListScreen}
        ></AdminRoute>
        <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
        <AdminRoute
          path="/user/:id/edit"
          component={UserEditScreen}
        ></AdminRoute>

      </BrowserRouter>


    </>
  );
};

export default App;