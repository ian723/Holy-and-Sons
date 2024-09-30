<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">Drone Details</h1>

      <!-- Filter Drones by Type -->
      <div class="mb-8">
        <label for="drone-type" class="block mb-2 text-lg font-medium"
          >Filter by Drone Type:</label
        >
        <select
          v-model="selectedType"
          @change="filterDrones"
          class="p-2 border border-gray-300 rounded"
        >
          <option value="">All Types</option>
          <option value="Photography">Photography</option>
          <option value="Industrial">Industrial</option>
          <option value="Surveying">Surveying</option>
        </select>
      </div>

      <!-- Show filtered drone details -->
      <div
        v-if="filteredDrones.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div
          v-for="drone in filteredDrones"
          :key="drone.id"
          class="bg-gray-100 p-6 rounded-lg shadow-lg"
        >
          <img
            :src="drone.image"
            alt="drone"
            class="w-full h-64 object-cover mb-4"
          />
          <h2 class="text-3xl font-bold mb-4">{{ drone.name }}</h2>
          <p class="text-lg text-gray-600 mb-6">{{ drone.description }}</p>
          <router-link to="/" class="text-blue-500 hover:underline"
            >Back to Home</router-link
          >
        </div>
      </div>

      <!-- Message if no drone found -->
      <div v-else>
        <p class="text-center text-red-500">
          No drones found for the selected type.
        </p>
        <router-link to="/" class="text-blue-500 hover:underline"
          >Back to Home</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DronePage",
  data() {
    return {
      selectedType: "",
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
      filteredDrones: [],
    };
  },
  created() {
    this.filterDrones();
  },
  methods: {
    filterDrones() {
      if (this.selectedType === "") {
        this.filteredDrones = this.drones;
      } else {
        this.filteredDrones = this.drones.filter(
          (drone) => drone.type === this.selectedType
        );
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
