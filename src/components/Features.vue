<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Global Perspective",
    description:
      "Participate in workshops with students and professionals from all over the world. Collaborate on ideas that transcend borders.",
  },
  {
    icon: "badgeCheck",
    title: "Future-Ready Skills",
    description:
      "Master soft skills that matter: communication, leadership, adaptability, and personal branding — essential for tomorrow's workforce.",
  },
  {
    icon: "goal",
    title: " Inspiring Speakers",
    description:
      "Learn directly from leaders, innovators, and changemakers who are shaping industries and communities worldwide.",
  },
  {
    icon: "pictureInPicture",
    title: "Real Networking",
    description:
      "Meet peers, mentors, and recruiters in dynamic networking spaces. Build meaningful connections for life and career.",
  },
  {
    icon: "mousePointerClick",
    title: "Purpose-Driven Content",
    description:
      "Every session is designed to equip you with actionable insights — no fluff, just real value tailored to your growth.",
  },
  {
    icon: "newspaper",
    title: "Personalized Experience",
    description:
      "Choose your track. Customize your schedule. This isn’t a one-size-fits-all event — it’s your journey, your way.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Features
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      What Makes Us Different
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      We’re not just another event — we’re a launchpad for your global potential. 
      Designed to challenge, connect, and inspire, this is where bold ideas meet real-world impact.


    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
