import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Dresses from "../pages/Dresses.vue";
import Sarees from "../pages/Sarees.vue";
import CustomisedDresses from "../pages/CustomisedDresses.vue";
import Login from "../pages/Login.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";
import PaymentSuccess from "../pages/PaymentSuccess.vue";
import Wishlist from "../pages/Wishlist.vue";
import Account from "../pages/Account.vue";

import Admin from "../pages/Admin.vue";
import Dashboard from "../pages/admin/Dashboard.vue";
import Products from "../pages/admin/Products.vue";
import Orders from "../pages/admin/Orders.vue";
import Customers from "../pages/admin/Customers.vue";
import CustomOrders from "../pages/Admin/Custom Orders.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    // HOME
    {
      path: "/",
      component: Home,
    },

    // DRESSES
    {
      path: "/dresses",
      component: Dresses,
    },

    // SAREES
    {
      path: "/sarees",
      component: Sarees,
    },

    // CUSTOMISED DRESSES
    {
      path: "/customised-dresses",
      component: CustomisedDresses,
    },

    // LOGIN
    {
      path: "/login",
      component: Login,
    },

    // ABOUT
    {
      path: "/about",
      component: About,
    },

    // CONTACT
    {
      path: "/contact",
      component: Contact,
    },

    // CART
    {
      path: "/cart",
      component: Cart,
    },

    // CHECKOUT
    {
      path: "/checkout",
      component: Checkout,
    },

    // PAYMENT SUCCESS
    {
      path: "/payment-success",
      component: PaymentSuccess,
    },

    {
      path: "/wishlist",
      component: Wishlist,
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
    },

    // ADMIN

    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },

    {
      path: "/admin/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/products",
      name: "AdminProducts",
      component: Products,
      meta: {
        requiresAdmin: true,
      },
    },
    {
      path: "/admin/orders",
      name: "AdminOrders",
      component: Orders,
      meta: {
        requiresAdmin: true,
      },
    },

    {
      path: "/admin/customers",
      component: Customers,
      beforeEnter: () => {
        if (localStorage.getItem("adminLoggedIn") !== "true") {
          return "/admin";
        }

        return true;
      },
    },

    {
      path: "/admin/custom-orders",
      component: CustomOrders,
      beforeEnter: () => {
        if (localStorage.getItem("adminLoggedIn") !== "true") {
          return "/admin";
        }

        return true;
      },
    },
  ],
});

export default router;
