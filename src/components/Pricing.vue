<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CalendarX } from "lucide-vue-next";

const registrationDeadline = "September 10, 2025";
</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Registration Status
      </h2>
      
      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Conference 
        <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          Registration
        </span>
      </h2>
      
      <p class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground">
        Thank you for your interest in CLASYPCS 2025
      </p>
    </div>

    <!-- Main Closed Registration Banner -->
    <Card class="bg-muted/60 dark:bg-card max-w-4xl mx-auto">
      <CardContent class="p-8">
        
        <div class="text-center space-y-6">
          <div class="flex justify-center">
            <CalendarX class="w-16 h-16 text-red-500" />
          </div>
          
          <Alert class="border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
            <AlertCircle class="w-5 h-5" />
            <AlertTitle class="text-xl font-semibold">Registration Period Closed</AlertTitle>
            <AlertDescription class="text-base mt-2">
              The registration period for CLASYPCS 2025 has officially ended on <strong>{{ registrationDeadline }}</strong>.
              <br><br>
              All registration categories (Student and Professional) are no longer accepting new applications.
              We appreciate the overwhelming interest shown in our conference.
            </AlertDescription>
          </Alert>


        </div>
      </CardContent>
    </Card>

    
  </section>
</template>