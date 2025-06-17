<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check, Star, Zap } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  badge?: string;
}

const plans: PlanProps[] = [
  // Student Row
  {
    title: "Student CS Member",
    popular: 1,
    price: 135,
    description: "For current Computer Society student members with valid membership.",
    buttonText: "Register as CS Student",
    badge: "Best Value",
    benefitList: [
      "Computer Society member discount",
      "Conference access",
      "Student networking sessions",
      "Digital certificate",
      "Welcome package",
      "CS exclusive workshops",
    ],
  },
  {
    title: "Student IEEE Member", 
    popular: 0,
    price: 180,
    description: "For current IEEE student members (non-CS) with valid membership.",
    buttonText: "Register as IEEE Student",
    benefitList: [
      "IEEE member discount",
      "Conference access", 
      "Student networking sessions",
      "Digital certificate",
      "Welcome package",
      "IEEE member resources",
    ],
  },
  {
    title: "Student Non-Member",
    popular: 0,
    price: 240,
    description: "For students who are not IEEE or Computer Society members.",
    buttonText: "Register as Student",
    benefitList: [
      "Conference access",
      "Student networking sessions", 
      "Digital certificate",
      "Welcome package",
      "Access to all sessions",
      "Membership information booth",
    ],
  },
  // Professional Row  
  {
    title: "Professional CS Member",
    popular: 0,
    price: 195,
    description: "For current Computer Society professional members with valid membership.",
    buttonText: "Register as CS Professional",
    badge: "Professional Value",
    benefitList: [
      "Computer Society member discount",
      "Full conference access",
      "Professional networking dinner",
      "Premium certificate",
      "Professional welcome kit",
      "CS exclusive content",
      "Industry connections",
    ],
  },
  {
    title: "Professional IEEE Member",
    popular: 0, 
    price: 240,
    description: "For current IEEE professional members (non-CS) with valid membership.",
    buttonText: "Register as IEEE Professional",
    benefitList: [
      "IEEE member discount",
      "Full conference access",
      "Professional networking dinner", 
      "Premium certificate",
      "Professional welcome kit",
      "IEEE member benefits",
      "Industry connections",
    ],
  },
  {
    title: "Professional Non-Member",
    popular: 0,
    price: 360,
    description: "For professionals who are not IEEE or Computer Society members.",
    buttonText: "Register as Professional", 
    benefitList: [
      "Full conference access",
      "Professional networking dinner",
      "Premium certificate", 
      "Professional welcome kit",
      "Access to all sessions",
      "Membership information booth",
      "Industry connections",
    ],
  },
];
</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>
      
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Conference 
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          Registration
        </span>
      </h2>
      
      <p class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground">
        Choose your registration category based on your IEEE membership status. Computer Society and IEEE members receive exclusive discounts.
      </p>
    </div>

    <!-- Scholarship Banner -->
    <div class="mb-12">
      <div class="max-w-4xl mx-auto bg-gradient-to-r from-[#D247BF]/10 to-primary/10 rounded-xl border border-primary/20 p-6 text-center">
        <h3 class="text-xl font-bold mb-2 flex items-center justify-center gap-2">
          🎓 <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">Scholarships Available!</span>
        </h3>
        <p class="text-muted-foreground mb-4">
          Can't afford the full registration fee? Apply for our scholarship program and get the chance to attend with covered or reduced costs.
        </p>
        <Button as-child variant="outline" class="border-primary text-primary hover:bg-primary hover:text-white">
          <a href="#registration" class="flex items-center gap-2">
            <span>Apply for Scholarship</span>
            <span class="text-sm">→</span>
          </a>
        </Button>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="space-y-12">
      <!-- Student Section -->
      <div>
        <h3 class="text-2xl font-bold text-center mb-8 text-primary">
           Student Pricing
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card
            v-for="plan in plans.slice(0, 3)"
            :key="plan.title"
            :class="{
              'relative border-2 border-primary shadow-2xl shadow-primary/25 lg:scale-105': plan.popular === PopularPlan.YES,
              'border border-border': plan.popular === PopularPlan.NO,
            }"
            class="flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group h-full cursor-pointer"
          >
            <!-- Badge -->
            <div 
              v-if="plan.badge" 
              class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
            >
              <div 
                :class="{
                  'bg-gradient-to-r from-[#D247BF] to-primary text-white': plan.popular === PopularPlan.YES,
                  'bg-gradient-to-r from-green-500 to-green-600 text-white': plan.badge === 'Best Value',
                  'bg-gradient-to-r from-blue-500 to-blue-600 text-white': plan.badge === 'Professional Value',
                }"
                class="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              >
                <Star class="w-3 h-3 fill-current" />
                {{ plan.badge }}
              </div>
            </div>

            <CardHeader class="text-center pb-6" :class="{ 'pt-8': plan.badge }">
              <CardTitle class="text-xl font-bold mb-3">
                {{ plan.title }}
              </CardTitle>
              
              <CardDescription class="text-sm leading-relaxed mb-6">
                {{ plan.description }}
              </CardDescription>
              
              <div class="space-y-2">
                <div class="flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-110">
                  <span class="text-3xl font-bold">${{ plan.price }}</span>
                  <div class="text-left">
                    <div class="text-xs text-muted-foreground">USD</div>
                    <div class="text-xs text-muted-foreground">per person</div>
                  </div>
                </div>
                <p class="text-xs text-muted-foreground">Conference registration</p>
                <div class="mt-3 p-2 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                  <p class="text-xs text-green-700 dark:text-green-300 font-medium">
                    💡 Scholarship available
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardFooter class="px-6 pb-6">
              <Button
                as-child
                :class="{
                  'w-full bg-gradient-to-r from-[#D247BF] to-primary hover:opacity-90 text-white font-semibold shadow-lg': plan.popular === PopularPlan.YES,
                  'w-full': plan.popular === PopularPlan.NO,
                }"
                :variant="plan.popular === PopularPlan.NO ? 'outline' : 'default'"
                class="text-sm"
              >
                <a href="#registration" class="flex items-center justify-center w-full transition-all duration-200 hover:scale-105">
                  <Zap v-if="plan.popular === PopularPlan.YES" class="w-4 h-4 mr-2" />
                  {{ plan.buttonText }}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <!-- Professional Section -->
      <div>
        <h3 class="text-2xl font-bold text-center mb-8 text-primary">
           Professional Pricing
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card
            v-for="plan in plans.slice(3, 6)"
            :key="plan.title"
            :class="{
              'relative border-2 border-primary shadow-2xl shadow-primary/25 lg:scale-105': plan.popular === PopularPlan.YES,
              'border border-border': plan.popular === PopularPlan.NO,
            }"
            class="flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group h-full cursor-pointer"
          >
            <!-- Badge -->
            <div 
              v-if="plan.badge" 
              class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
            >
              <div 
                :class="{
                  'bg-gradient-to-r from-[#D247BF] to-primary text-white': plan.popular === PopularPlan.YES,
                  'bg-gradient-to-r from-green-500 to-green-600 text-white': plan.badge === 'Best Value',
                  'bg-gradient-to-r from-blue-500 to-blue-600 text-white': plan.badge === 'Professional Value',
                }"
                class="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              >
                <Star class="w-3 h-3 fill-current" />
                {{ plan.badge }}
              </div>
            </div>

            <CardHeader class="text-center pb-6" :class="{ 'pt-8': plan.badge }">
              <CardTitle class="text-xl font-bold mb-3">
                {{ plan.title }}
              </CardTitle>
              
              <CardDescription class="text-sm leading-relaxed mb-6">
                {{ plan.description }}
              </CardDescription>
              
              <div class="space-y-2">
                <div class="flex items-center justify-center gap-2 transition-all duration-300 group-hover:scale-110">
                  <span class="text-3xl font-bold">${{ plan.price }}</span>
                  <div class="text-left">
                    <div class="text-xs text-muted-foreground">USD</div>
                    <div class="text-xs text-muted-foreground">per person</div>
                  </div>
                </div>
                <p class="text-xs text-muted-foreground">Conference registration</p>
                <div class="mt-3 p-2 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                  <p class="text-xs text-green-700 dark:text-green-300 font-medium">
                    💡 Scholarship available
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardFooter class="px-6 pb-6">
              <Button
                as-child
                :class="{
                  'w-full bg-gradient-to-r from-[#D247BF] to-primary hover:opacity-90 text-white font-semibold shadow-lg': plan.popular === PopularPlan.YES,
                  'w-full': plan.popular === PopularPlan.NO,
                }"
                :variant="plan.popular === PopularPlan.NO ? 'outline' : 'default'"
                class="text-sm"
              >
                <a href="#registration" class="flex items-center justify-center w-full transition-all duration-200 hover:scale-105">
                  <Zap v-if="plan.popular === PopularPlan.YES" class="w-4 h-4 mr-2" />
                  {{ plan.buttonText }}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>

    <!-- Price Comparison Table -->
    <div class="mt-16">
      <h3 class="text-2xl font-bold text-center mb-8 text-primary">
        📊 Price Comparison
      </h3>
      <div class="max-w-2xl mx-auto bg-muted/50 rounded-lg p-6">
        <div class="overflow-x-auto">
          <table class="w-full text-center">
            <thead>
              <tr class="border-b border-border">
                <th class="py-3 px-4 text-left font-semibold">Category</th>
                <th class="py-3 px-4 font-semibold text-green-600">CS Member</th>
                <th class="py-3 px-4 font-semibold text-blue-600">IEEE Member</th>
                <th class="py-3 px-4 font-semibold text-gray-600">Non-Member</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border/50">
                <td class="py-4 px-4 text-left font-medium">Student</td>
                <td class="py-4 px-4 text-green-600 font-bold">$135</td>
                <td class="py-4 px-4 text-blue-600 font-bold">$180</td>
                <td class="py-4 px-4 text-gray-600 font-bold">$240</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-left font-medium">Professional</td>
                <td class="py-4 px-4 text-green-600 font-bold">$195</td>
                <td class="py-4 px-4 text-blue-600 font-bold">$240</td>
                <td class="py-4 px-4 text-gray-600 font-bold">$360</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 text-center text-sm text-muted-foreground">
          <p><strong>CS:</strong> Computer Society Member | <strong>IEEE:</strong> IEEE Member (non-CS) | <strong>Non:</strong> Non-IEEE Member</p>
        </div>
      </div>
    </div>

    <!-- Additional Info -->
    <div class="text-center mt-12">
      <p class="text-muted-foreground mb-6">
        All prices include conference materials, refreshments, and digital resources
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm text-muted-foreground mb-6">
        <div class="flex items-center justify-center gap-2">
          <Check class="w-4 h-4 text-green-500" />
          <span>Secure payment</span>
        </div>
        <div class="flex items-center justify-center gap-2">
          <Check class="w-4 h-4 text-green-500" />
          <span>Instant confirmation</span>
        </div>
        <div class="flex items-center justify-center gap-2">
          <Check class="w-4 h-4 text-green-500" />
          <span>Financial aid available</span>
        </div>
      </div>

      <div class="bg-muted/50 rounded-lg p-4 max-w-3xl mx-auto">
        <p class="text-sm text-muted-foreground">
          <strong>Membership Verification:</strong> Valid IEEE/CS membership required for discounted rates. 
          <strong>Student Status:</strong> Valid student ID required. 
          <strong>Scholarships:</strong> Financial assistance available - apply through our scholarship program.
         
        </p>
      </div>
    </div>
  </section>
</template>