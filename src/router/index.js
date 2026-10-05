import { createRouter, createWebHistory } from "vue-router";

/* CUSTOMER */

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
import KidsWear from "../pages/KidsWear.vue";

/* PRODUCT */

import ProductDetails from "../components/ProductDetails.vue";

/* ADMIN */

import Admin from "../pages/Admin.vue";
import Dashboard from "../pages/Admin/Dashboard.vue";
import Products from "../pages/Admin/Products.vue";
import Orders from "../pages/Admin/Orders.vue";
import Customers from "../pages/Admin/Customers.vue";
import CustomOrders from "../pages/Admin/Custom Orders.vue";
import StyleStories from "../pages/Admin/StyleStories.vue";
import ContactMessages from "../pages/Admin/ContactMessages.vue";

/* ROUTER */

const router = createRouter({
  history: createWebHistory(),

  routes: [
    /* CUSTOMER */

    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/dresses",
      name: "Dresses",
      component: Dresses,
    },

    {
      path: "/sarees",
      name: "Sarees",
      component: Sarees,
    },

    {
      path: "/kids-wear",
      name: "KidsWear",
      component: KidsWear,
    },

    {
      path: "/customised-dresses",
      name: "CustomisedDresses",
      component: CustomisedDresses,
    },

    /* PRODUCT DETAILS */

    {
      path: "/product/:id",
      name: "ProductDetails",
      component: ProductDetails,
    },

    {
      path: "/login",
      name: "Login",
      component: Login,
    },

    {
      path: "/about",
      name: "About",
      component: About,
    },

    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },

    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },

    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
    },

    {
      path: "/payment-success",
      name: "PaymentSuccess",
      component: PaymentSuccess,
    },

    {
      path: "/wishlist",
      name: "Wishlist",
      component: Wishlist,
    },

    {
      path: "/account",
      name: "Account",
      component: Account,
    },

    /* ADMIN LOGIN */

    {
      path: "/admin",
      name: "AdminLogin",
      component: Admin,
    },
    {
      path: "/admin/contact-messages",
      component: ContactMessages,
      meta: {
        requiresAdmin: true,
      },
    },

    /* ADMIN DASHBOARD */

    {
      path: "/admin/dashboard",
      name: "AdminDashboard",
      component: Dashboard,
      meta: {
        requiresAdmin: true,
      },
    },

    /* ADMIN PRODUCTS */

    {
      path: "/admin/products",
      name: "AdminProducts",
      component: Products,
      meta: {
        requiresAdmin: true,
      },
    },

    /* ADMIN ORDERS */

    {
      path: "/admin/orders",
      name: "AdminOrders",
      component: Orders,
      meta: {
        requiresAdmin: true,
      },
    },

    /* ADMIN STYLE STORIES */

    {
      path: "/admin/style-stories",
      name: "AdminStyleStories",
      component: StyleStories,
    },

    /* ADMIN CUSTOMERS */

    {
      path: "/admin/customers",
      name: "AdminCustomers",
      component: Customers,
      meta: {
        requiresAdmin: true,
      },
    },

    /* ADMIN CUSTOM ORDERS */

    {
      path: "/admin/custom-orders",
      name: "AdminCustomOrders",
      component: CustomOrders,
      meta: {
        requiresAdmin: true,
      },
    },
  ],
});

/* JWT PAYLOAD */

function getAdminTokenPayload() {
  const token =
    localStorage.getItem("adminAccessToken") ||
    sessionStorage.getItem("adminAccessToken");

  if (!token) {
    return null;
  }

  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      return null;
    }

    const payload = parts[1];

    const decodedPayload = JSON.parse(
      decodeURIComponent(
        atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
          .split("")
          .map(
            (char) => "%" + ("00" + char.charCodeAt(0).toString(16)).slice(-2),
          )
          .join(""),
      ),
    );

    return decodedPayload;
  } catch (error) {
    console.error("Unable to read admin token:", error);

    return null;
  }
}

/* ADMIN GUARD */

router.beforeEach((to) => {
  const token =
    localStorage.getItem("adminAccessToken") ||
    sessionStorage.getItem("adminAccessToken");

  const loggedIn =
    localStorage.getItem("adminLoggedIn") === "true" ||
    sessionStorage.getItem("adminLoggedIn") === "true";

  if (to.meta.requiresAdmin) {
    if (!token || !loggedIn) {
      return {
        name: "AdminLogin",
      };
    }

    const payload = getAdminTokenPayload();

    if (!payload || payload.role !== "ADMIN") {
      localStorage.removeItem("adminAccessToken");

      sessionStorage.removeItem("adminAccessToken");

      localStorage.removeItem("adminLoggedIn");

      sessionStorage.removeItem("adminLoggedIn");

      return {
        name: "AdminLogin",
      };
    }
  }

  return true;
});

export default router;
