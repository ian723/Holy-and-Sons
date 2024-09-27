<template>
  <nav class="bg-gray-900 text-white fixed w-full z-20">
    <div class="container mx-auto flex justify-between items-center p-4">
      <a href="#" class="text-3xl font-bold">DroneWeb</a>
      <button @click="toggleMenu" class="text-xl md:hidden">☰</button>
      <ul
        :class="{ block: menuOpen, hidden: !menuOpen }"
        class="md:flex space-x-4"
      >
        <li>
          <router-link to="#home" class="hover:text-blue-400" @click="closeMenu"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="#products"
            class="hover:text-blue-400"
            @click="closeMenu"
            >Products</router-link
          >
        </li>
        <li>
          <router-link
            to="#about"
            class="hover:text-blue-400"
            @click="closeMenu"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="#features"
            class="hover:text-blue-400"
            @click="closeMenu"
            >Features</router-link
          >
        </li>
        <li>
          <router-link
            to="#contact"
            class="hover:text-blue-400"
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
  background-color: rgba(0, 0, 0, 0.9);
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
