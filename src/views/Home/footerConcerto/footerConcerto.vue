<template>
  <div
    id="contact"
    class="background w-full min-h-[400px] mt-32 flex items-center flex-col gap-4 justify-center"
    :style="`background-image: url(${background})`"
  >
    <h3 class="text-white text-[38px] md:text-[48px] font-[600] text-center">
      O Concerto de Natal da Catedral
    </h3>
    <p class="text-[16px] md:text-[25px] text-white -mt-4 font-bold">
      concertodenataldacatedral@gmail.com
    </p>
    <p class="text-[12px] md:text-[16px] text-[#fffa]">
      Copyright ©{{ getCurrentYear() }} Todos os direitos reservados
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/background.jpg";
export default defineComponent({
  name: "Concerto",
  data() {
    return {
      show: false as boolean,
      background: background,
    };
  },
  methods: {
    getCurrentYear() {
      const now = new Date();
      return now.getFullYear();
    },
  },
});
</script>
<style lang="scss">
.background-concerto {
  background-position: center;
  background-repeat: no-repeat;
}
</style>
