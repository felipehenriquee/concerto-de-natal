<template>
  <div class="background w-full flex flex-col gap-4 mt-16">
    <div class="flex pb-8">
      <carousel :wrap-around="true" :breakpoints="breakpoints">
        <slide v-for="slide in images" :key="slide">
          <img class="w-full" :src="slide" alt="" />
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import slide1 from "@/assets/images/slide/01.jpg";
import slide2 from "@/assets/images/slide/02.jpg";
import slide3 from "@/assets/images/slide/03.jpg";
import slide4 from "@/assets/images/slide/04.jpg";
import slide5 from "@/assets/images/slide/05.jpg";
import slide6 from "@/assets/images/slide/06.jpg";
import slide7 from "@/assets/images/slide/07.jpg";
import slide8 from "@/assets/images/slide/08.jpg";
import slide9 from "@/assets/images/slide/09.jpg";
import slide10 from "@/assets/images/slide/10.jpg";
import slide11 from "@/assets/images/slide/11.jpg";
import slide12 from "@/assets/images/slide/12.jpg";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default defineComponent({
  name: "Fotos",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      show: false as boolean,
      images: [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9,
        slide10,
        slide11,
        slide12,
      ],
      breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        600: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        800: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1000: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        // 1024 and up
        1200: {
          itemsToShow: 4.5,
          snapAlign: "start",
        },
        1500: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
});
</script>
<style lang="scss">
.background-concerto {
  background-position: center;
  background-repeat: no-repeat;
}
.carousel__next {
  background: red;
  background-image: url("@/assets/images/background.jpg");
  background-size: contain;
  width: 50px;
  color: #eaa61f;
  height: 50px;
  border-radius: 100%;
  &:hover {
    color: white;
  }
}
.carousel__prev {
  background: red;
  background-image: url("@/assets/images/background.jpg");
  background-size: contain;
  width: 50px;
  color: #eaa61f;
  height: 50px;
  border-radius: 100%;
  &:hover {
    color: white;
  }
}
</style>
