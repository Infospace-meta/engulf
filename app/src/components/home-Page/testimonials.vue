<template>
  <div class="min-h-screen">
    <div class="blogs">
      <div class="flex flex-row justify-center items-center">
        <div
          class="rounded-xl flex flex-col lg:flex-row gap-10 items-center justify-center"
        >
          <div
            v-for="(blog, blogIndex) in blogs"
            :key="blogIndex"
            class="shadow-2xl rounded-b-xl w-96"
          >
            <div class="rounded-t-xl">
              <img :src="blog.imageUrl" :alt="blog.altText" class="w-auto" />
            </div>
            <div class="flex items-center justify-center p-5 bg-slate-50">
              <p class="text-lg text-slate-600">
                {{ truncateText(blog.title, 7) }}
              </p>
            </div>
            <div class="border-t border-slate-300 w-5/6 flex mx-4"></div>
            <div class="flex items-center justify-center p-5 bg-slate-50">
              <p class="text-md">{{ truncateText(blog.summary, 14) }}</p>
            </div>
            <div class="border-t border-slate-300 w-5/6 flex mx-4"></div>
            <div
              class="flex items-center justify-center p-5 rounded-b-xl bg-slate-50"
            >
              <button
                class="bg-gradient-to-r from-green-700 to-green-500 text-white py-1 px-5 rounded-md"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonials lg:pt-48 my-20">
      <div class="flex flex-col lg:px-96">
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const blogs = ref([
  {
    imageUrl: "/src/assets/images/image2.jpg",
    altText: "Tailor Service 1",
    title: "Capital Size: 500 to 1000 USD",
    summary:
      "The implementation of blockchain technology lorem ipsum and the implementation of the blockchain technology lorem ipsum of the blockchain technology lorem ipsum of the blockchain technology lorem , and the implementation of the blockchain technology lorem matrixm ipsum and the implementation of the blockchain technology lore",
  },
  {
    imageUrl: "/src/assets/images/image2.jpg",
    altText: "Tailor Service 1",
    title: "Capital Size: 500 to 1000 USD",
    summary: "Weekly 30% to 70% return",
  },
  {
    imageUrl: "/src/assets/images/image2.jpg",
    altText: "Tailor Service 1",
    title: "Capital Size: 500 to 1000 USD",
    summary: "Weekly 40% to 100% return",
  },
]);

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
