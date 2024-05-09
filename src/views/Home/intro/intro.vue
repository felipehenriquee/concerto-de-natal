<template>
  <div id="home" class="background w-full h-screen flex items-center">
    <div class="w-full relative flex sm:items-center h-full overflow-hidden">
      <div class="w-full flex flex-col md:flex-row justify-center px-2 sm:px-8">
        <div class="w-full md:w-[40%] xl:w-1/2 flex items-center justify-center">
          <img class="w-[80%]" src="@/assets/images/vitral.png" alt="" />
        </div>
        <div class="w-full md:w-[60%] 2xl:w-1/2 flex flex-col justify-center">
          <h1
            class="mt-8 md:mt-[0] text-[30px] lg:text-[40px] xl:text-[80px] text-center text-black"
          >
            Concerto para as mães
          </h1>
          <h1
            class="text-[20px] lg:text-[30px] xl:text-[40px] text-center text-black mt-2 md:mt-8"
          >
            Dia 11 de maio de 2024 às 16:30h
          </h1>
          <h1
            class="text-[20px] lg:text-[30px] xl:text-[40px] text-center text-black mt-2 md:mt-8"
          >
            Catedral Metropolitana de Fortaleza
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/background.jpg";
export default defineComponent({
  name: "Home",
  data() {
    return {
      show: false as boolean,
      background: background,
    };
  },
});
</script>
<style lang="scss">
.background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
