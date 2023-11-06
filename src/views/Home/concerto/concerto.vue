<template>
  <div id="fotos" class="background w-full min-h-screen flex items-center flex-col gap-4 justify-center">
    <h3 class="mt-16 text-[38px] md:text-[48px] font-[600]  text-center">O Concerto de Natal da Catedral</h3>
    <div
      class="background-concerto container mx-auto h-[90vh]"
      :style="`background-image: url(${background})`"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/publico.jpg";
export default defineComponent({
  name: "Concerto",
  data() {
    return {
      show: false as boolean,
      background: background,
    };
  },
});
</script>
<style lang="scss">
.background-concerto {
  
  background-position: center;
  background-repeat: no-repeat;
}
</style>
