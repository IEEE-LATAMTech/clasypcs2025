<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "International collaboration",
    description:
      "Join interactive workshops with people from around the globe. Share ideas, work on cross-cultural projects, and broaden your professional horizons.",
  },
  {
    icon: "lineChart",
    title: "Authentic leadership",
    description:
      "Inspiring talks on how to lead with purpose. Learn to make impactful decisions, motivate others, and become a positive influence in your environment..",
  },
  {
    icon: "wallet",
    title: "Personal growth & professional branding",
    description:
      "Learn how to bring out the best version of yourself. From digital presence to interpersonal skills, build a personal brand that opens doors.",
  },
  {
    icon: "sparkle",
    title: " Networking & new opportunities",
    description:
      "Expand your network. Meet like-minded individuals, mentors, and companies looking for talent just like yours.",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Your springboard to the future
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Are you a university student or a young professional? This event is designed to boost your potential. 
          Discover powerful tools, connect with leaders, and get ready to stand out in an increasingly
           competitive world.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
