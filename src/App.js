import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductsDetails";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { useContext, useEffect } from "react";
import ShoppingContext from "./context/shopping/ShoppingContext";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout" >
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;

// checkout {isLogin} > Payment (isLogin) > PaidOrder (isLogin)
