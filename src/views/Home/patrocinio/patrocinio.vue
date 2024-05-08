<template>
  <div id="patrocinio" class="">
    <p class="text-center mt-32">Patrocínio</p>
    <div class="w-full patrocinio container mx-auto flex justify-center gap-8">
      <div
        class="w-full flex items-center justify-center flex-col sm:flex-row gap-8"
      >
        <img
          class="min-w-[300px] w-[22%]"
          :src="dibra"
          alt="logo dibra dias branco participações"
        />
        <img class="min-w-[250px] w-[20%]" :src="sesc" alt="logo SESC" />
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          class="min-w-[150px] sm:min-w-[300px] w-[32%] flex flex-col sm:flex-row items-center sm:justify-between gap-8"
        >
          <img
            class="min-w-[150px] w-[15%]"
            :src="cearaHoje"
            alt="logo Ceará Hoje"
          />
          <img
            class="min-w-[150px] w-[15%]"
            :src="noveSete"
            alt="logo noveSete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import prefeitura from "@/assets/images/patrocinio/prefeitura.svg";
import dibra from "@/assets/images/patrocinio/dibra.svg";
import cultura from "@/assets/images/patrocinio/cultura_pf.svg";
import sesc from "@/assets/images/patrocinio/sesc.svg";
import fiec from "@/assets/images/patrocinio/fiec.svg";
import sesi from "@/assets/images/patrocinio/sesi.svg";
import bspar from "@/assets/images/patrocinio/bspar.svg";
import luiz from "@/assets/images/patrocinio/sao_luiz.svg";
import opovo from "@/assets/images/patrocinio/opovo.svg";
import geraldo from "@/assets/images/patrocinio/sao_geraldo.svg";
import cearaHoje from "@/assets/images/patrocinio/cearaHoje.png";
import noveSete from "@/assets/images/patrocinio/noveSete.jpg";
export default defineComponent({
  name: "Patrocinio",
  data() {
    return {
      show: false as boolean,
      prefeitura: prefeitura,
      dibra: dibra,
      cultura: cultura,
      sesc: sesc,
      fiec: fiec,
      sesi: sesi,
      bspar: bspar,
      luiz: luiz,
      opovo: opovo,
      geraldo: geraldo,
      cearaHoje: cearaHoje,
      noveSete: noveSete,
    };
  },
});
</script>
<style lang="scss">
.patrocinio {
  flex-wrap: wrap;
}
</style>
