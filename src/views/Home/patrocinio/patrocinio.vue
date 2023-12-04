<template>
  <div id="patrocinio" class="">
    <p class="text-center  mt-32">Patrocínio</p>
    <div class="w-full patrocinio container mx-auto flex justify-center gap-16">
      <img class="min-w-[200px] w-[15%]" :src="prefeitura" alt="logo prefeitura de Fortaleza">
      <img class="min-w-[250px] w-[20%]" :src="dibra" alt="logo dibra dias branco participações">
      <img class="min-w-[250px] w-[20%]" :src="cultura" alt="logo da cultura da prefeitura de Fortaleza">
      <img class="min-w-[250px] w-[20%]" :src="sesc" alt="logo SESC">
      <img class="min-w-[250px] w-[20%]" :src="fiec" alt="logo FIEC">
      <img class="min-w-[200px] w-[15%]" :src="sesi" alt="logo SESI">
      <img class="min-w-[180px] w-[12%]" :src="bspar" alt="logo BSPAR">
      <img class="min-w-[20 0px] w-[15%]" :src="luiz" alt="logo Mercado São Luiz">
      <img class="min-w-[250px] w-[15%]" :src="opovo" alt="logo jornal OPOVO">
      <img class="min-w-[250px] w-[15%]" :src="geraldo" alt="logo São Geraldo">
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
      geraldo: geraldo
    };
  },
});
</script>
<style lang="scss">
.patrocinio {
  flex-wrap: wrap;
}
</style>
