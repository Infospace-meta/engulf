<template>
  <!-- testimonial-content -->
  <div
    class="testimonials my-auto py-5 lg:mx-auto justify-center flex-col max-w-screen-7xl lg:px-20"
  >
    <div class="flex flex-col">
      <div class="text-2xl text-red-500 font-semibold m-4 text-center">
        TESTIMONIALS
      </div>
      <div class="flex overflow-x-auto space-x-5 p-4">
        <section
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex-shrink-0 rounded-md border relative md:shadow-xl md:w-1/2"
        >
          <div
            class="flex flex-col md:flex-row lg:w-[540px] w-screen items-center justify-center md:w-full"
          >
            <div
              class="flex items-center justify-center w-24 h-24 rounded-full"
            >
              <img
                :src="testimonial.imageUrl"
                class="w-full h-full object-cover rounded-full"
                :alt="testimonial.altText"
              />
            </div>
            <div class="w-2/3 md:p-5 flex flex-col max-md:flex-col-reverse">
              <p class="flex text-center text-green-800">
                {{ truncateText(testimonial.quote, 32) }}
              </p>
              <p class="flex md:justify-end justify-center">
                {{ testimonial.name.toUpperCase() }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const testimonials = ref([
  {
    imageUrl: "/src/assets/images/image2.jpg",
    altText: "Tailor Service 1",
    name: "immanuel Kimani",
    quote:
      '"Our primary focus is on providing top-notch investment services. With ProForex, you can trust that your investments are in capable hands."',
  },
  {
    imageUrl: "/src/assets/images/image2.jpg",
    altText: "Tailor Service 2",
    name: "immanuel Kimani",
    quote:
      "Our primary focus is on providing top-notch investment services. With ProForex, you can trust that your investments are in capable hands.",
  },
  {
    imageUrl: "/src/assets/images/image2.jpg",
    altText: "Tailor Service 3",
    name: "immanuel Kimani",
    quote:
      "Our primary focus is on providing top-notch investment services. With ProForex, you can trust that your investments are in capable hands.",
  },
  {
    imageUrl: "/src/assets/images/image2.jpg",
    altText: "Tailor Service 4",
    name: "immanuel Kimani",
    quote:
      "Our primary focus is on providing top-notch investment services. With ProForex, you can trust that your investments are in capable hands.",
  },
]);

function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length <= maxWords) {
    return text;
  } else {
    return words.slice(0, maxWords).join(" ") + "...";
  }
}
</script>
