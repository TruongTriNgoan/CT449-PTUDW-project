<template>
  <div class="header">
    <!-- Navbar -->
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Navbar brand (Logo on the left) -->
        <a class="navbar-brand mt-2 mt-lg-0 d-none d-md-block" href="#">
          <img
            src="trip-n-travel.jpeg"
            height="80"
            alt="Logo"
            loading="lazy"
          />
        </a>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <!-- Centered Navbar Links -->
          <ul class="navbar-nav">
            <router-link :to="{ name: 'home' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Trang chủ</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'product' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Tour</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'blog' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Tin tức</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'introduce' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Giới thiệu</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'contact' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
              </li>
            </router-link>
          </ul>
        </div>

        <!-- Right aligned (User and Cart section) -->
        <div id="user-cart" class="d-flex align-items-center">
          <!-- Search Form -->
          <!-- <form class="d-flex input-group w-auto me-2">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </form> -->

          <!-- Cart -->
          <a class="text-reset me-3" href="#">
            <router-link :to="{ name: 'cart' }" class="router-css router-cart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
            <span class="badge rounded-pill badge-notification bg-danger">
              {{ totalQuantity }}
            </span>
          </a>

          <!-- User Dropdown -->
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle button-user"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                style="color: black; font-size: 18px"
                class="fa-solid fa-user"
              ></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <router-link
                v-show="isLoggedIn"
                :to="{ name: 'profile' }"
                class="router-css"
              >
                <li>
                  <a class="dropdown-item" href="#">Tài khoản</a>
                </li>
              </router-link>
              <router-link
                v-show="!isLoggedIn"
                :to="{ name: 'signin' }"
                class="router-css"
              >
                <li>
                  <a class="dropdown-item" href="#">Đăng nhập</a>
                </li>
              </router-link>
              <router-link
                v-show="!isLoggedIn"
                :to="{ name: 'signup' }"
                class="router-css"
              >
                <li>
                  <a class="dropdown-item" href="#">Đăng ký</a>
                </li>
              </router-link>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import { useCartStore } from "@/stores/cart.js";

export default {
  setup() {
    const authStore = useAuthStore();
    const cart = useCartStore();
    const isLoggedIn = computed(() => authStore.isUserLoggedIn);
    const totalQuantity = computed(() => cart.totalQuantity);
    return {
      isLoggedIn,
      totalQuantity,
    };
  },
};
</script>

<style>
/* Toàn bộ header */
.header {
  font-family: "Arial", sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Navbar tổng thể */
.navbar {
  height: 80px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
}

/* Căn giữa navbar-nav */
.navbar-nav {
  margin: 0 auto;
}

/* Căn phải các phần tử trong khu vực tìm kiếm, giỏ hàng, và dropdown */
#user-cart {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Font chữ và hover */
.nav-link {
  color: #5a5a5a !important;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ff7a59 !important;
}

/* Badge (giỏ hàng) */
.badge-notification {
  font-size: 12px;
  font-weight: bold;
}

/* Responsive logo */
@media (max-width: 599px) {
  .navbar-brand img {
    display: none;
  }
}
</style>
