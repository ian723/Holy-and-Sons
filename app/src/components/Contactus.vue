<template>
  <div>
    <section class="bg-blue-50 dark:bg-slate-800" id="contact">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
          <div class="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
            <p
              class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200"
            >
              Contact
            </p>
            <h2
              class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl"
            >
              Get in Touch
            </h2>
            <p
              class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400"
            >
              In hac habitasse platea dictumst
            </p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-stretch justify-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <!-- Left Section -->
            <div class="md:pr-6">
              <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <!-- Address, Contact, Working Hours -->
              <ul class="space-y-6">
                <li class="flex">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path
                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3
                      class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      Our Address
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Light house building along Kenyatta Avenue, Nakuru, Kenya
                    </p>
                  </div>
                </li>
                <li class="flex">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                      ></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3
                      class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      Contact
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Mobile: +254725882092
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      Mail: holysonsltd@gmail.com
                    </p>
                  </div>
                </li>
                <li class="flex">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3
                      class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"
                    >
                      Working hours
                    </h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      Mon - Fri: 08:00 - 17:00
                    </p>
                    <p class="text-gray-600 dark:text-slate-400">
                      Sat & Sun: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Right Section - Form and Map -->
            <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 class="mb-4 text-2xl font-bold dark:text-white">
                Ready to Get Started?
              </h2>
              <form id="contactForm">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div class="col-span-2 sm:col-span-1">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      class="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      class="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                    />
                  </div>
                  <div class="col-span-2">
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      class="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300"
                    ></textarea>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <!-- Map -->
              <div class="mt-8">
                <h2 class="mb-4 text-xl font-bold dark:text-white">
                  Our Location
                </h2>
                <div class="w-full h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3605577513303!2d36.06913381648718!3d-0.28510761959188413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d95bffee3eb%3A0xf9f5bab9efd1dad4!2sKenyatta%20Ave%2C%20Nakuru!5e0!3m2!1sen!2ske!4v1727692440373!5m2!1sen!2ske"
                    class="w-full h-full"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
