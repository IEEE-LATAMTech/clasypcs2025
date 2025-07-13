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
         url: "https://www.instagram.com/kris.r.a/",
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
         url: "https://www.instagram.com/wvfilho?igsh=MWw0NTB4Mmp5dHYybg==",
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
         url: "https://www.instagram.com/karen_dayaparra/",
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
         url: "https://www.instagram.com/rampmaster/",
       },
    ],
  },
  {
    imageUrl:
      "/imagenesTeam/dani.jpg",
    firstName: "Daniela",
    lastName: "Briseño Pompa",
    positions: ["Participants Committee", "Front-End Developer "],
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
  {
    imageUrl:
      "/imagenesTeam/cat.jpeg",
    firstName: "Laura",
    lastName: "Julio Gonzalez",
    positions: ["Design Co-Chair", ""],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/laura-catalina-julio/",
      },
      // {
      //   name: "Github",
      //   url: "https://github.com/DaBriNan",
      // },
    ],
  },
   {
    imageUrl:
      "/imagenesTeam/milton1.jpeg",
    firstName: "Milton",
    lastName: "Damian Marche",
    positions: ["Sponsor Committee", "IT Manager"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/milton-marche/",
      },
      
    ],
  },
  
  {
    imageUrl:
      "/imagenesTeam/ale.jpeg",
    firstName: "Alejandra",
    lastName: "Ponce",
    positions: ["Design Co-Chair", "Computer Systems Student"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alejandra-ponce-a94a36280/",
      },
      
    ],
  },
  {
    imageUrl:
      "/imagenesTeam/alejo.jpg",
    firstName: "Alejandro",
    lastName: "Escobar  Quinchia",
    positions: ["Program Committe", " "],
    socialNetworks: [
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/alejandro-escobar-quinch%C3%ADa/",
      // },
      // {
      //   name: "Github",
      //   url: "https://github.com/DaBriNan",
      // },
    ],
  },
  {
    imageUrl:
      "/imagenesTeam/michel.jpeg",
    firstName: "Michel",
    lastName: "Adelino",
    positions: ["Design Co-Chair", "Software Engineer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michel-adelino/",
      },
      // {
      //   name: "Github",
      //   url: "https://github.com/DaBriNan",
      // },
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
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"
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
