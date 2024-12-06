<template>
  <div id="patrocinio" class="">
    <p class="text-center  mt-32">Patrocínio</p>
    <div class="w-full patrocinio container mx-auto flex justify-center gap-10 mt-2">
      <img class="min-w-[170px] w-[10%]" :src="sfiec" alt="logo SESC">
      <img class="min-w-[250px] w-[20%]" :src="sesc" alt="logo SESC">
      <img class="min-w-[250px] w-[20%]" :src="dibra" alt="logo dibra dias branco participações">
      <img class="min-w-[250px] w-[20%]" :src="marquise" alt="logo dibra dias branco participações">
      <img class="min-w-[250px] w-[18%]" :src="ecofor" alt="logo dibra dias branco participações">
    </div>
    <p class="text-center  mt-4">Apoio</p>
    <div class="w-full patrocinio container mx-auto flex justify-center gap-16">
      <img class="min-w-[150px] w-[10%] mt-4" :src="shalom" alt="logo SESC">
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
import shalom from "@/assets/images/patrocinio/shalom.jpeg";
import marquise from "@/assets/images/patrocinio/marquise.svg";
import sfiec from "@/assets/images/patrocinio/sfiec.svg";
import ecofor from "@/assets/images/patrocinio/ecofor.svg";
export default defineComponent({
  name: "Patrocinio",
  data() {
    return {
      show: false as boolean,
      dibra: dibra,
      sesc: sesc,
      shalom: shalom,
      marquise: marquise,
      sfiec: sfiec,
      ecofor: ecofor,
    };
  },
});
</script>
<style lang="scss">
.patrocinio {
  flex-wrap: wrap;
}
</style>
