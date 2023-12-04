<template>
  <div id="musical" class="background w-full min-h-screen flex items-center flex-col gap-4">
    <h3 class="mt-16 text-[38px] md:text-[48px] font-[600] text-center">
      Programação Musical
    </h3>
    <p class="text-[14px] text-[#7a7a7a] -mt-2">(sujeito à alteração)</p> 
    <div class="cards-musical mx-auto container flex gap-2 justify-center px-2 ">
      <div v-for="(musica, i) in musical" :key="i" class="min-w-[250px] w-[12%] mt-8 p-2 rounded-md"  :style="`background-image: url(${background})`" >
        <img class="rounded-t-md gap-8" :src="musica.image" alt="">
        <div class="w-full flex items-center flex-col mt-2">
          <h5 class="font-bold text-center text-[#EDE434]">
            {{musica.title}}
          </h5>
          <p class="text-[#ffffff] text-center text-[14px]">{{musica.cantor}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/background.jpg";
import musical1 from "@/assets/images/musical/1.jpg";
import musical2 from "@/assets/images/musical/2.jpg";
import musical3 from "@/assets/images/musical/3.jpg";
import musical4 from "@/assets/images/musical/4.jpg";
import musical5 from "@/assets/images/musical/5.jpg";
import musical6 from "@/assets/images/musical/6.jpg";
import musical7 from "@/assets/images/musical/7.jpg";
import musical8 from "@/assets/images/musical/8.jpg";
import musical9 from "@/assets/images/musical/9.jpg";
import musical10 from "@/assets/images/musical/10.jpg";
import musical11 from "@/assets/images/musical/11.jpg";
import musical12 from "@/assets/images/musical/12.jpg";
import musical13 from "@/assets/images/musical/13.jpg";

export default defineComponent({
  name: "Musical",
  data() {
    return {
      show: false as boolean,
      background: background,
      musical: [
        { image: musical1, title: "Ave Maria", cantor: "Charles Gounod" },
        { image: musical2, title: "Anjos Descem a Cantar", cantor: "Glória" },
        { image: musical3, title: "Boas Festas", cantor: "Assis Valente" },
        {
          image: musical4,
          title: "Jesus Alegria dos Homens",
          cantor: "J. S. Bach",
        },
        { image: musical5, title: "Bate o Sino", cantor: "J. Piermont" },
        {
          image: musical6,
          title: "Bom Natal",
          cantor: "Lúcia Carvalho / César Batalha",
        },
        { image: musical7, title: "Adeste Fidelis", cantor: "Wade" },
        { image: musical8, title: "Ave Maria", cantor: "Schubert" },
        { image: musical9, title: "Lascia ch'io pianga", cantor: "Händel" },
        {
          image: musical10,
          title: "Core 'ngrato",
          cantor: "Salvatore Cardillo",
        },
        {
          image: musical11,
          title: "Oh Holy Night",
          cantor: "A. Adam / Coltrane",
        },
        { image: musical12, title: "Alleluia", cantor: null },
        { image: musical13, title: "Noite Feliz", cantor: null },
      ],
    };
  },
});
</script>
<style lang="scss">
.background-concerto {
  background-position: center;
  background-repeat: no-repeat;
}
.cards-musical{
  flex-wrap: wrap;
}
</style>
