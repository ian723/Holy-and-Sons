<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12">Explore Our Drones</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Drone Card 1 -->
        <div
          v-for="drone in drones"
          :key="drone.id"
          class="bg-white shadow-md rounded-lg p-8 text-center"
        >
          <p class="text-gray-500 text-sm mb-2">{{ drone.type }} Drone</p>
          <h2 class="text-3xl font-bold mb-2">{{ drone.name }}</h2>
          <p class="text-lg text-gray-700 mb-4">{{ drone.description }}</p>
          <div class="flex justify-center space-x-6 mb-4">
            <router-link
              :to="'/drones/' + drone.id"
              class="text-blue-500 font-medium hover:underline"
              >Learn More ></router-link
            >
          </div>
          <img :src="drone.image" :alt="drone.name" class="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      drones: [
        {
          id: 1,
          name: "Drone Alpha",
          type: "Photography",
          description: "High-performance drone for photography.",
          image:
            "https://blogs.icrc.org/law-and-policy/wp-content/uploads/sites/102/2022/03/Drone-image-1096x620.jpg",
        },
        {
          id: 2,
          name: "Drone Beta",
          type: "Industrial",
          description: "Industrial drone with great endurance.",
          image:
            "https://cdn.thewirecutter.com/wp-content/media/2023/08/drones-2048px-0718.jpg",
        },
        {
          id: 3,
          name: "Drone Gamma",
          type: "Surveying",
          description: "Surveying drone with precise mapping technology.",
          image:
            "https://mundogeo.com/wp-content/uploads/2024/03/18143629/drone-DJI-Mavic-3-Multispectral-revolucion%C3%A1rio-para-agricultura-e-mapeamento-756x400.jpg",
        },
        {
          id: 4,
          name: "Drone Delta",
          type: "Photography",
          description: "Lightweight drone for aerial photography.",
          image:
            "https://www.zettafarms.com/wp-content/uploads/2024/01/2952.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* You can add any additional styling here */
</style>