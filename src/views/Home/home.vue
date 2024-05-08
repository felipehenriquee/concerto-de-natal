<template>
  <Navbar />
  <div class="bg-[#fdfdfd]">
    <Intro /><!-- Capa do site  -->
    <About /><!-- Sobre o concerto  -->
    <Musical /><!-- programação  -->
    <Patrocinio /><!-- pratrocinio  -->

    <FooterConcerto /><!-- rodapé  -->
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
const Intro = defineAsyncComponent(() => import("./intro/intro.vue"));
const Concerto = defineAsyncComponent(() => import("./concerto/concerto.vue"));
const Fotos = defineAsyncComponent(() => import("./fotos/fotos.vue"));
const About = defineAsyncComponent(() => import("./about/about.vue"));
const Musical = defineAsyncComponent(() => import("./musical/musical.vue"));
const FooterConcerto = defineAsyncComponent(
  () => import("./footerConcerto/footerConcerto.vue")
);
const Patrocinio = defineAsyncComponent(
  () => import("./patrocinio/patrocinio.vue")
);
import banner from "@/assets/images/banner.png";
export default defineComponent({
  name: "Home",
  components: {
    Intro,
    Concerto,
    Fotos,
    About,
    Musical,
    FooterConcerto,
    Patrocinio,
  },
  data() {
    return {
      show: false as boolean,
      banner: banner,
    };
  },
});
</script>
