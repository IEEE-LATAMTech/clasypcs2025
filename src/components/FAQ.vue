<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Will there be networking opportunities??",
    answer:
      "Absolutely! The event is built around collaboration. ",
    value: "item-2",
  },
  {
    question:
      "How does the scholarship work?",
    answer:
      "We offer a limited number of scholarships to cover full or partial costs of the event. ",
    value: "item-3",
  },
  {
    question: "How can I register?",
    answer: "You can sign up through our website by clicking [Register Now]. Make sure to register early — spots are limited and may fill up quickly.",
    value: "item-4",
  },
  {
    question:
      "When and where will the event take place?",
    answer: "The event will be held on October 03 and 04  at Montevideo, Uruguay. ",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Still have questions?
      <a
        href="#"
        class="text-muted-foreground"
      >
        <a
          href="#"
          class="underline"
          >Contact us</a
        >
      </a>
    </h3>
  </section>
</template>
