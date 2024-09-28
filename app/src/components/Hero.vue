<template>
  <section id="carousel" class="h-screen relative overflow-hidden">
    <div class="carousel-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide h-full relative bg-fixed bg-center bg-cover"
        :style="{ backgroundImage: `url(${slide.image})` }"
        :class="{ active: index === currentIndex }"
      >
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          class="flex flex-col items-center justify-center h-full text-white relative px-4 md:px-8"
        >
          <h1
            class="text-3xl md:text-5xl font-extrabold animate-fadeInDown text-center"
          >
            {{ slide.title }}
          </h1>
          <p
            class="text-lg md:text-2xl mt-4 animate-fadeInUp text-center max-w-xl"
          >
            {{ slide.description }}
          </p>
          <button
            class="mt-6 px-6 md:px-8 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg transition-all duration-300 animate-bounce"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          title: "Explore the Future of Drones",
          description: "Innovative solutions for every industry.",
          image:
            "https://blogs.icrc.org/law-and-policy/wp-content/uploads/sites/102/2022/03/Drone-image-1096x620.jpg",
        },
        {
          title: "Revolutionize Your Business",
          description: "Harness the power of drone technology.",
          image:
            "https://cdn.thewirecutter.com/wp-content/media/2023/08/drones-2048px-0718.jpg",
        },
        {
          title: "Safety and Efficiency",
          description: "Drones for safer operations.",
          image:
            "https://mundogeo.com/wp-content/uploads/2024/03/18143629/drone-DJI-Mavic-3-Multispectral-revolucion%C3%A1rio-para-agricultura-e-mapeamento-756x400.jpg",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 6000);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
.carousel-wrapper {
  transition: transform 0.9s ease-in-out;
}
.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.9s ease-in-out;
}
.carousel-slide.active {
  opacity: 1;
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInDown {
  animation: fadeInDown 1.5s ease-out;
}
.animate-fadeInUp {
  animation: fadeInUp 1.5s ease-out;
}
</style>
