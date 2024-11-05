
<template>
  <header class="pb-6 bg-white lg:pb-0">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <!-- lg+ -->
          <nav class="flex items-center justify-between h-16 lg:h-20">
              <div class="flex-shrink-0">
                  <a href="#" title="" class="flex">
                     <div class="text-2xl font-bold">SageBlend</div>
                  </a>
              </div>

              <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100" @click="toggleMenu">
                  <!-- Menu open: "hidden", Menu closed: "block" -->
                  <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                  </svg>

                  <!-- Menu open: "block", Menu closed: "hidden" -->
                  <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>

              <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                  <RouterLink
              @click.native="closeMobileNav"
              to="/" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home</RouterLink>

                  <RouterLink
              @click.native="closeMobileNav"
              to="/about" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About Us </RouterLink>

                  <RouterLink
              @click.native="closeMobileNav"
              to="/contact" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </RouterLink>

                  <RouterLink
              @click.native="closeMobileNav"
              to="/service" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Our Services </RouterLink>
              </div>

              <RouterLink
              @click.native="closeMobileNav"
              to="/" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </RouterLink>
          </nav>

          <!-- xs to lg -->
          <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden" :class="{ 'hidden': !menuOpen }">
              <div class="flow-root">
                  <div class="flex flex-col px-6 -my-2 space-y-1">
                      <RouterLink
              @click.native="closeMobileNav"
              to="/" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </RouterLink>

                      <   <RouterLink
              @click.native="closeMobileNav"
              to="/about" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About Us </RouterLink>

                      <   <RouterLink
              @click.native="closeMobileNav"
              to="/contact" href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </RouterLink>

                      <   <RouterLink
              @click.native="closeMobileNav"
              to="/service" href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Our Services </RouterLink>
                  </div>
              </div>

              <div class="px-6 mt-6">
                  <   <RouterLink
              @click.native="closeMobileNav"
              to="/" href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </RouterLink>
              </div>
          </nav>
      </div>
  </header>
</template>

<script>
  export default {
      data() {
          return {
              menuOpen: false
          }
      },

      methods: {
          toggleMenu() {
              this.menuOpen = !this.menuOpen;
          }
      }
  }
</script>