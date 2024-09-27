<template>
  <nav class="bg-gray-800 shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center justify-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img class="h-10 w-10" src="" alt="Drone Company Logo" />
          </div>
          <!-- Navigation Links (desktop) -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-6">
              <router-link
                to="/"
                class="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                @click="closeMenu"
                >Home</router-link
              >
              <router-link
                to="/about"
                class="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                @click="closeMenu"
                >About</router-link
              >
              <router-link
                to="/drones"
                class="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                @click="closeMenu"
                >Drones</router-link
              >
              <router-link
                to="/services"
                class="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                @click="closeMenu"
                >Services</router-link
              >
              <router-link
                to="/contact"
                class="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                @click="closeMenu"
                >Contact</router-link
              >
            </div>
          </div>
        </div>
        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none"
          >
            <!-- Conditional Rendering of Hamburger or X Icon -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="!isMenuOpen"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <!-- X Icon when menu is open -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden" v-if="isMenuOpen">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          to="/"
          class="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          @click="closeMenu"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          @click="closeMenu"
          >About</router-link
        >
        <router-link
          to="/drones"
          class="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          @click="closeMenu"
          >Drones</router-link
        >
        <router-link
          to="/services"
          class="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          @click="closeMenu"
          >Services</router-link
        >
        <router-link
          to="/contact"
          class="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          @click="closeMenu"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false; // Close the menu when a link is clicked
    },
  },
};
</script>

<style scoped>
/* Optional: Customize with additional styling */
</style>
