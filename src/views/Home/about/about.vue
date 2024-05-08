<template>
  <div id="about" class="w-full min-h-screen flex items-center flex-col gap-4">
    <div class="container">
      <h3 class="mt-16 text-[38px] md:text-[48px] font-[600] text-center">
        O Concerto
      </h3>
      <div class="mt-8 flex flex-col gap-16">
        <div
          :class="`flex items-center ${
            card.class === 'left'
              ? 'flex-col sm:flex-row'
              : 'flex-col sm:flex-row-reverse'
          }`"
          v-for="(card, i) in cards"
          :key="i"
        >
          <img
            class="min-w-[300px] w-[90%] sm:w-[30%]"
            :src="card.image"
            alt="imagem"
          />
          <div
            :class="`background-card-concerto bg-[#f6f0fd] w-[90%] sm:w-[50%] min-w-[300px] sm:min-w-[450px]   min-h-[300px] ${
              card.class === 'left'
                ? 'ml-0 sm:ml-[-100px]'
                : 'mr-0 sm:mr-[-100px] z-10'
            } flex justify-center items-center`"
          >
            <p class="text-[17px] p-4 text-black">{{ card.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import background from "@/assets/images/background.jpg";
// import about1 from "@/assets/images/about/01.jpg";
import about2 from "@/assets/images/about/02.jpg";
// import about3 from "@/assets/images/about/03.png";
import about4 from "@/assets/images/about/05.jpg";
export default defineComponent({
  name: "About",
  data() {
    return {
      show: false as boolean,
      background: background,
      cards: [
        {
          image: about2,
          class: "left",
          content:
            "O Concerto para as Mães é um evento musical que tem como objetivo homenagear as mães e presenteá-las em decorrência desta data tão especial que é o Dia das Mães.",
        },

        {
          image: about4,
          class: "right",
          content:
            "O Concerto para as Mães será realizado sábado, dia 11 de Maio de 2024, com início as 16:30 h na Catedral Metropolitana de Fortaleza. O evento é aberto ao público e oferecido gratuitamente à população. Participe!",
        },
      ],
    };
  },
  methods: {},
});
</script>
<style lang="scss">
.background-card-concerto {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
