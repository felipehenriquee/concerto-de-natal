<template>
  <div
    id="home"
    class="background w-full h-screen flex items-center"
    :style="`background-image: url(${background})`"
  >
    <div class="w-full relative flex sm:items-center h-full overflow-hidden">
      <div class="w-full lg:w-[60%] max-w-[1000px] px-2 sm:px-8">
        <h1
          class=" mt-[25%] sm:mt-0 text-[50px] md:text-[80px] text-center text-[#eaa61f]"
        >
          Concerto de Natal da Catedral
        </h1>
        <h1
          class="text-[30px] md:text-[40px] text-center text-[#eaa61f] mt-2 md:mt-8"
        >
          25.11.2023
        </h1>
      </div>
      <img
        class="sm:w-[38%] sm:min-w-[280px] absolute right-[-10px] md:right-[-20px] bottom-[-20px] md:bottom-[-50px]"
        src="@/assets/images/catedral.png"
        alt=""
      />
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
