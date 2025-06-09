<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

import {
  Binary,
  // Vegan,
  // Ghost,
  // Puzzle,
  // Squirrel,
  // Cookie,
  // Drama,
} from "lucide-vue-next";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "binary",
    name: "Computer Society",
  }
  // {
  //   icon: "vegan",
  //   name: "Acmelogo",
  // },
  // {
  //   icon: "ghost",
  //   name: "Acmesponsor",
  // },
  // {
  //   icon: "puzzle",
  //   name: "Acmeipsum",
  // },
  // {
  //   icon: "squirrel",
  //   name: "Acme",
  // },
  // {
  //   icon: "cookie",
  //   name: "Accmee",
  // },
  // {
  //   icon: "drama",
  //   name: "Acmetech",
  // },
];

const iconMap: Record<
  string,
  | typeof Binary
  // | typeof Vegan
  // | typeof Ghost
  // | typeof Puzzle
  // | typeof Squirrel
  // | typeof Cookie
  // | typeof Drama
> = {
  binary: Binary,
  // vegan: Vegan,
  // ghost: Ghost,
  // puzzle: Puzzle,
  // squirrel: Squirrel,
  // cookie: Cookie,
  // drama: Drama,
};
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Our  Sponsors</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ icon, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component
              :is="iconMap[icon]"
              class="mr-2"
              stroke-width="3"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
