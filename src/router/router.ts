import HomePage from "../pages/HomePage.svelte";
import ErrorScreen from "../pages/ErrorScreen.svelte";
import RegisterScreen from "../pages/RegisterScreen.svelte";
import LoginScreen from "../pages/LoginScreen.svelte";
import ProductsScreen from "../pages/ProductsScreen.svelte";
import CartScreen from "../pages/CartScreen.svelte";
import PaidScreen from "../pages/PaidScreen.svelte";


export const routes= {
   "/":  HomePage,
   "/login" : LoginScreen,
   "/register" : RegisterScreen,
   "/products" : ProductsScreen,
   "/cart" : CartScreen,
   "/paid" : PaidScreen,
    "*": ErrorScreen,
}