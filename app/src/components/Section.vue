<template>
  <div class="container mx-auto px-4 py-10">
    <!-- First Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold">
          Unlock Limitless Possibilities With
          <span class="text-red-500">Our Drones</span>
        </h2>
        <p class="text-gray-600">
          Your gateway to aerial exploration and innovation. Whether you're a
          professional photographer, an enthusiast capturing breathtaking
          landscapes, or a business owner seeking to elevate your operations.
        </p>
      </div>
      <div class="relative">
        <img
          src="https://www.dronespace.co.ke/images/products/drones/dji/agras/t40/drone/drone-front.webp"
          alt="Drone in air"
          class="rounded-lg w-full object-cover h-80"
        />
        <div class="absolute bottom-4 right-4 bg-red-500 p-4 rounded-full">
          <img
            src="https://www.dronespace.co.ke/images/products/drones/dji/agras/t40/drone/drone-front.webp"
            alt="Drone Icon"
            class="w-8 h-8"
          />
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 items-center">
      <div>
        <img
          src="https://www.dronespace.co.ke/images/products/drones/dji/agras/t40/drone/drone-front.webp"
          alt="Commercial Drone"
          class="rounded-lg w-full object-cover h-80"
        />
      </div>
      <div class="space-y-4">
        <h3 class="text-3xl font-bold">
          The World's Most Versatile Commercial Drone
        </h3>
        <ul class="list-disc ml-5 text-gray-600 space-y-2">
          <li>
            <span class="font-bold text-red-500">Up to 40 minutes</span> of
            flight time
          </li>
          <li>Auto Pilot Mode - Ready to fly in just 5 minutes</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* You can add any global styles here if needed */
</style>
