<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";
import InstagramIcon from "@/icons/InstagramIcon.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/imagenesTeam/chrisR.jpg",
    firstName: "Christian",
    lastName: "Rojas Anaya",
    positions: ["General Chair", "Junior Penetration Tester"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/christian-rojas-anaya-a5183928a/",
      },
      // {
      //   name: "Github",
      //   url: "https://github.com/leoMirandaa",
      // },
       {
         name: "Instagram",
         url: "https://x.com/leo_mirand4",
       },
    ],
  },
  {
    imageUrl:
      "/imagenesTeam/waldir.jpeg",
    firstName: "Waldir",
    lastName: "Ventura Filho",
    positions: ["Finance Committe", "Financial Planning Specialist"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/waldir-ventura-filho/",
      },
      {
         name: "Instagram",
         url: "https://x.com/leo_mirand4",
       },
    ],
  },
  {
    imageUrl:
      "/imagenesTeam/karen.jpeg",
    firstName: "Karen",
    lastName: "Dayana Tovar",
    positions: ["Program Co-Chair", "Machine Learning Scientist"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karen-tovar-parra/",
      },
      {
         name: "Instagram",
         url: "https://x.com/leo_mirand4",
       },
    ],
  },

  {
    imageUrl:
      "/imagenesTeam/roberto.jpeg",
    firstName: "Roberto",
    lastName: "Moreno Pérez",
    positions: ["Program Co-Chair", "Business Inteligence"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rmorenp/",
      },
      {
         name: "Instagram",
         url: "https://x.com/leo_mirand4",
       },
    ],
  },
  {
    imageUrl:
      "/imagenesTeam/dani.jpg",
    firstName: "Daniela",
    lastName: "Briseño Pompa",
    positions: ["Program Co-Chair", "Front-End Developer "],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniela-brise%C3%B1o-1820ab29a/",
      },
      {
        name: "Github",
        url: "https://github.com/DaBriNan",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;

    case "Github":
      return GithubIcon;

    case "X":
      return XIcon;
    
      case "Instagram":
      return InstagramIcon;
  }
};
</script>

<template>
  <section
    id="team"
    class="container lg:w-[75%] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Team</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        The CLASYPCS 2025 Team
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6"
            >{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          v-for="(position, index) in positions"
          :key="index"
          :class="{
            'pb-0 text-muted-foreground ': true,
            'pb-4': index === positions.length - 1,
          }"
        >
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a
            v-for="{ name, url } in socialNetworks"
            key="name"
            :href="url"
            target="_blank"
            class="hover:opacity-80 transition-all"
            :aria-label="`Visit our ${name} page`"
          >
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
