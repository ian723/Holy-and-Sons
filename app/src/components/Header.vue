<template>
  <nav class="bg-gray-900 text-white fixed w-full z-20">
    <div class="container mx-auto flex justify-between items-center p-4">
      <a href="#" class="text-3xl font-bold">DroneWeb</a>
      <button @click="toggleMenu" class="text-xl md:hidden focus:outline-none">
        ☰
      </button>
      <ul
        :class="[
          'md:flex',
          'absolute',
          'md:static',
          'bg-gray-900',
          'w-full',
          'md:w-auto',
          'left-0',
          'top-full',
          menuOpen ? 'block' : 'hidden',
        ]"
      >
        <li>
          <router-link
            to="#home"
            class="block py-2 px-4 hover:text-blue-400"
            @click="closeMenu"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="#products"
            class="block py-2 px-4 hover:text-blue-400"
            @click="closeMenu"
            >Products</router-link
          >
        </li>
        <li>
          <router-link
            to="#about"
            class="block py-2 px-4 hover:text-blue-400"
            @click="closeMenu"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="#features"
            class="block py-2 px-4 hover:text-blue-400"
            @click="closeMenu"
            >Features</router-link
          >
        </li>
        <li>
          <router-link
            to="#contact"
            class="block py-2 px-4 hover:text-blue-400"
            @click="closeMenu"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
nav {
  /* background-color: rgba(0, 0, 0, 0.9); */
  transition: all 0.3s;
}
ul {
  display: none;
}
@media (min-width: 768px) {
  ul {
    display: flex;
  }
}
</style>
