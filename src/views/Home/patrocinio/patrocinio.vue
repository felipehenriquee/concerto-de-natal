<template>
  <div id="patrocinio" class="">
    <div class="w-full patrocinio container mx-auto mt-32 flex justify-center gap-8">
      <img class="min-w-[250px] w-[20%]" :src="prefeitura" alt="logo prefeitura de Fortaleza">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import prefeitura from "@/assets/images/patrocinio/prefeitura.svg";
export default defineComponent({
  name: "Patrocinio",
  data() {
    return {
      show: false as boolean,
      prefeitura: prefeitura,
    };
  },
});
</script>
<style lang="scss">
.patrocinio {
  flex-wrap: wrap;
}
</style>
