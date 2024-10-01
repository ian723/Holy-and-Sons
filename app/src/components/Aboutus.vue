<template>
  <div>
    <section class="py-16 relative xl:mr-0 lg:mr-5 mr-0">
      <div class="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        <div
          class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1"
        >
          <!-- Text Section -->
          <div
            class="w-full flex-col justify-center lg:items-start items-center gap-10 flex"
          >
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div
                class="flex-col justify-start lg:items-start items-center gap-4 flex"
              >
                <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                <div
                  class="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                >
                  <h2
                    class="text-indigo-700 text-3xl sm:text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
                  >
                    The Tale of Our Achievement Story
                  </h2>
                  <p
                    class="text-gray-500 text-sm sm:text-base font-normal leading-relaxed lg:text-start text-center"
                  >
                    Our achievement story is a testament to teamwork and
                    perseverance. Together, we've overcome challenges,
                    celebrated victories, and created a narrative of progress
                    and success.
                  </p>
                </div>
              </div>

              <!-- Achievement Cards -->
              <div
                class="w-full flex-col justify-center items-start gap-6 flex"
              >
                <div
                  class="w-full justify-start items-center gap-6 grid sm:grid-cols-2 grid-cols-1"
                >
                  <!-- First Row of Cards -->
                  <div
                    class="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 flex"
                  >
                    <h4
                      class="text-gray-900 text-xl sm:text-2xl font-bold font-manrope leading-8"
                    >
                      33+ Years
                    </h4>
                    <p
                      class="text-gray-500 text-sm sm:text-base font-normal leading-relaxed"
                    >
                      Influencing Digital Landscapes Together
                    </p>
                  </div>
                  <div
                    class="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 flex"
                  >
                    <h4
                      class="text-gray-900 text-xl sm:text-2xl font-bold font-manrope leading-8"
                    >
                      125+ Projects
                    </h4>
                    <p
                      class="text-gray-500 text-sm sm:text-base font-normal leading-relaxed"
                    >
                      Excellence Achieved Through Success
                    </p>
                  </div>
                </div>

                <!-- Second Row of Cards -->
                <div
                  class="w-full justify-start items-center gap-6 grid sm:grid-cols-2 grid-cols-1"
                >
                  <div
                    class="w-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 flex"
                  >
                    <h4
                      class="text-gray-900 text-xl sm:text-2xl font-bold font-manrope leading-8"
                    >
                      26+ Awards
                    </h4>
                    <p
                      class="text-gray-500 text-sm sm:text-base font-normal leading-relaxed"
                    >
                      Our Dedication to Innovation Wins Understanding
                    </p>
                  </div>
                  <div
                    class="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-500 ease-in-out flex-col justify-start items-start gap-2.5 flex"
                  >
                    <h4
                      class="text-gray-900 text-xl sm:text-2xl font-bold font-manrope leading-8"
                    >
                      99% Happy Clients
                    </h4>
                    <p
                      class="text-gray-500 text-sm sm:text-base font-normal leading-relaxed"
                    >
                      Mirrors our Focus on Client Satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Read More Button -->
            <button
              class="sm:w-fit w-full px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow transition-all duration-500 ease-in-out justify-center items-center flex"
            >
              <span
                class="text-indigo-600 text-sm sm:text-base font-medium group-hover:-translate-x-0.5 transition-all duration-500 ease-in-out"
                >Read More</span
              >
              <svg
                class="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-all duration-500 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
                stroke="currentColor"
              >
                <path
                  d="M6.75 4.5L11.25 9L6.75 13.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <!-- Image Section -->
          <div class="w-full lg:justify-start justify-center items-start flex">
            <div
              class="w-full sm:w-[564px] sm:h-[646px] h-auto sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative"
            >
              <img
                class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="About Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
