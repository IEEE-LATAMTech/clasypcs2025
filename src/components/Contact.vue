<script setup lang="ts">
import { Card, CardContent } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Mail, CalendarX } from "lucide-vue-next";

const applicationDeadline = "September 15, 2025";
</script>

<template>
  <section
    id="registration"
    class="container py-24 sm:py-32"
  >
    <div class="mb-8 text-center">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Registration Status</h2>
      <h2 class="text-3xl md:text-4xl font-bold">CLASYPCS 2025 Registration</h2>
      <p class="mt-4 text-muted-foreground">
        Thank you for your interest in our conference
      </p>
    </div>

    <Card class="bg-muted/60 dark:bg-card max-w-3xl mx-auto">
      <CardContent class="p-8">
        
        <!-- Banner principal de aplicaciones cerradas -->
        <div class="text-center space-y-6">
          <div class="flex justify-center">
            <CalendarX class="w-16 h-16 text-red-500" />
          </div>
          
          <Alert class="border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
            <AlertCircle class="w-5 h-5" />
            <AlertTitle class="text-xl font-semibold">Registration Closed</AlertTitle>
            <AlertDescription class="text-base mt-2">
              The registration period for CLASYPCS 2025 has officially ended on <strong>{{ applicationDeadline }}</strong>.
              <br><br>
              We appreciate all the interest shown in our conference. All applications are currently under review, 
              and selected participants will be notified soon.
            </AlertDescription>
          </Alert>

          <div class="space-y-4 text-center">
            <h3 class="text-lg font-semibold text-primary">What happens next?</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div class="p-4 bg-muted/50 rounded-lg">
                <div class="font-semibold text-foreground mb-2">📋 Review Process</div>
                Applications are being carefully evaluated by our selection committee
              </div>
              <div class="p-4 bg-muted/50 rounded-lg">
                <div class="font-semibold text-foreground mb-2">📧 Notifications</div>
                Selected participants will receive email confirmation soon
              </div>
              <div class="p-4 bg-muted/50 rounded-lg">
                <div class="font-semibold text-foreground mb-2">🎉 Conference</div>
                Get ready for an amazing CLASYPCS 2025 experience!
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Contact Info -->
    <div class="mt-12 text-center">
      <div class="flex justify-center items-center gap-2 mb-2">
        <Mail class="w-4 h-4 text-primary" />
        <span class="font-semibold">Have questions?</span>
      </div>
      <p class="text-muted-foreground">
        Contact us at: <a href="mailto:r9-syp@computer.org" class="text-primary underline">r9-syp@computer.org</a>
      </p>
    </div>
  </section>
</template>