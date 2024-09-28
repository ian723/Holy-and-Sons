<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto">
      <!-- Show drone details -->
      <div v-if="drone" class="bg-gray-100 p-6 rounded-lg shadow-lg">
        <img
          :src="drone.image"
          alt="drone"
          class="w-full h-64 object-cover mb-4"
        />
        <h2 class="text-4xl font-bold mb-4">{{ drone.name }}</h2>
        <p class="text-lg text-gray-600 mb-6">{{ drone.description }}</p>
        <router-link to="/" class="text-blue-500 hover:underline"
          >Back to Home</router-link
        >
      </div>

      <!-- Display a message if the drone isn't found -->
      <div v-else>
        <p class="text-center text-red-500">Drone not found!</p>
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
  props: ["id"],
  data() {
    return {
      drone: null,
      drones: [
        {
          id: 1,
          name: "Drone Alpha",
          description: "High-performance drone for photography.",
          image:
            "https://blogs.icrc.org/law-and-policy/wp-content/uploads/sites/102/2022/03/Drone-image-1096x620.jpg",
        },
        {
          id: 2,
          name: "Drone Beta",
          description: "Industrial drone with great endurance.",
          image:
            "https://cdn.thewirecutter.com/wp-content/media/2023/08/drones-2048px-0718.jpg",
        },
        {
          id: 3,
          name: "Drone Gamma",
          description: "Surveying drone with precise mapping technology.",
          image:
            "https://mundogeo.com/wp-content/uploads/2024/03/18143629/drone-DJI-Mavic-3-Multispectral-revolucion%C3%A1rio-para-agricultura-e-mapeamento-756x400.jpg",
        },
      ],
    };
  },
  created() {
    this.fetchDroneDetails();
  },
  methods: {
    fetchDroneDetails() {
      // Find the drone based on the id in the route params
      const droneId = parseInt(this.$route.params.id);
      this.drone = this.drones.find((drone) => drone.id === droneId);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
