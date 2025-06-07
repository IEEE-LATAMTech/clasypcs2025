<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "🏨 Hotel Accommodation Included",
    description:
      "Stay at a comfortable, high-quality hotel just minutes away from the venue. Connect with fellow attendees and make the most of every moment.",
    pro: 0,
  },
  {
    title: "🏛️ Professional Event Venue",
    description:
      "All sessions and activities will be held in a fully equipped event hall, ideal for workshops, talks, and networking opportunities.",
    pro: 0,
  },
  {
    title: "🚌 Included Transportation",
    description: "Worry-free travel between the hotel and event venue is included, so you can focus on learning and connecting.",
    pro: 0,
  },
  {
    title: "🌆 City Vibes",
    description: "Take time to explore the local culture, food, and urban life — all just steps away from your accommodation.",
    pro: 0 ,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Ubication
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Where the Experience Happens    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Enjoy the perfect balance of comfort and professionalism. Our event takes place in a modern
       conference center within a premium hotel,offering everything you need to stay focused,
        connected, and inspired.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
