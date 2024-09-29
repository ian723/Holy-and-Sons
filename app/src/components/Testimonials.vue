<template>
  <section class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">What Our Clients Say</h2>

      <!-- Testimonial Carousel -->
      <div class="relative text-center">
        <div class="p-6 text-center">
          <!-- Testimonial Image -->
          <div class="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
            <img
              :src="testimonials[currentIndex].image"
              alt="testimonial image"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Testimonial Message -->
          <p class="italic">"{{ testimonials[currentIndex].message }}"</p>
          <!-- Testimonial Name and Title -->
          <h3 class="mt-4 font-bold">{{ testimonials[currentIndex].name }}</h3>
          <span class="text-sm text-gray-400">{{
            testimonials[currentIndex].title
          }}</span>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white"
        >
          &#8592;
        </button>
        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white"
        >
          &#8594;
        </button>
      </div>

      <!-- Dots Indicators -->
      <div class="flex justify-center mt-4 space-x-2">
        <span
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="goToTestimonial(index)"
          :class="{
            'bg-blue-500': index === currentIndex,
            'bg-gray-500': index !== currentIndex,
          }"
          class="w-3 h-3 rounded-full cursor-pointer"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // Tracks the current testimonial being displayed
      testimonials: [
        {
          name: "John Doe",
          title: "CEO of FlyHigh",
          message: "This is the best drone company I’ve worked with.",
          image: "https://randomuser.me/api/portraits/men/1.jpg", // Testimonial Image
        },
        {
          name: "Jane Smith",
          title: "Photographer",
          message: "Their drones have helped me capture stunning aerial shots!",
          image: "https://randomuser.me/api/portraits/women/2.jpg", // Testimonial Image
        },
        {
          name: "Alex Brown",
          title: "Filmmaker",
          message:
            "The quality of their drones is outstanding for my video projects.",
          image: "https://randomuser.me/api/portraits/men/3.jpg", // Testimonial Image
        },
        {
          name: "Olivia Green",
          title: "Engineer",
          message:
            "Reliable drones, exceptional customer service, highly recommended!",
          image: "https://randomuser.me/api/portraits/women/4.jpg", // Testimonial Image
        },
      ],
    };
  },
  methods: {
    // Navigate to the previous testimonial
    prevTestimonial() {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    // Navigate to the next testimonial
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    // Navigate to a specific testimonial
    goToTestimonial(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    // Auto-slide every 5 seconds
    this.autoSlide = setInterval(this.nextTestimonial, 5000);
  },
  beforeDestroy() {
    // Clear interval when component is destroyed
    clearInterval(this.autoSlide);
  },
};
</script>

<style scoped>
/* Add any specific styles here */
</style>
