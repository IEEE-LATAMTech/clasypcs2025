<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { 
  AlertCircle, 
  Mail, 
  User, 
  GraduationCap, 
  Building, 
  Heart, 
  CreditCard 
} from "lucide-vue-next";

interface RegistrationFormProps {
  // Personal Information
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  countryOfOrigin: string;
  identificationNumber: string;
  identificationType: string;
  
  // Academic Information
  universityName: string;
  studentOrProfessional: string;
  graduationDate: string;
  shirtSize: string;
  
  // IEEE Information
  membershipNumber: string;
  ieeeSection: string;
  registrationCategory: string;
  
  // Medical Information & Emergency Contact
  emergencyContactName: string;
  emergencyContactPhone: string;
  medicalCondition: string;
  allergies: string;
  dietaryRestrictions: string;
  
  // Payment Method and Terms
  paymentMethod: string;
  agreeToTerms: boolean;
}

const registrationForm = reactive<RegistrationFormProps>({
  // Personal Information
  fullName: "",
  email: "",
  phoneCountryCode: "+1",
  phoneNumber: "",
  countryOfOrigin: "",
  identificationNumber: "",
  identificationType: "National ID",
  
  // Academic Information
  universityName: "",
  studentOrProfessional: "Student",
  graduationDate: "",
  shirtSize: "M",
  
  // IEEE Information
  membershipNumber: "",
  ieeeSection: "",
  registrationCategory: "Student Member",
  
  // Medical Information & Emergency Contact
  emergencyContactName: "",
  emergencyContactPhone: "",
  medicalCondition: "",
  allergies: "",
  dietaryRestrictions: "",
  
  // Payment Method and Terms
  paymentMethod: "Credit Card",
  agreeToTerms: false,
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
  // Validate terms acceptance
  if (!registrationForm.agreeToTerms) {
    invalidInputForm.value = true;
    return;
  }
  
  invalidInputForm.value = false;
  console.log(registrationForm);

  // Create email content
  const emailBody = `
CLASYPCS 2025 - REGISTRATION

=== PERSONAL INFORMATION ===
Full Name: ${registrationForm.fullName}
Email: ${registrationForm.email}
Phone: ${registrationForm.phoneCountryCode} ${registrationForm.phoneNumber}
Country of Origin: ${registrationForm.countryOfOrigin}
${registrationForm.identificationType}: ${registrationForm.identificationNumber}

=== ACADEMIC INFORMATION ===
University: ${registrationForm.universityName}
Status: ${registrationForm.studentOrProfessional}
Graduation: ${registrationForm.graduationDate}
Shirt Size: ${registrationForm.shirtSize}

=== IEEE INFORMATION ===
Membership Number: ${registrationForm.membershipNumber}
IEEE Section: ${registrationForm.ieeeSection}
Registration Category: ${registrationForm.registrationCategory}

=== MEDICAL INFORMATION & EMERGENCY CONTACT ===
Emergency Contact: ${registrationForm.emergencyContactName}
Emergency Phone: ${registrationForm.emergencyContactPhone}
Medical Condition: ${registrationForm.medicalCondition || 'None'}
Allergies: ${registrationForm.allergies || 'None'}
Dietary Restrictions: ${registrationForm.dietaryRestrictions || 'None'}

=== PAYMENT METHOD ===
Preferred Method: ${registrationForm.paymentMethod}

Accepts terms and conditions: ${registrationForm.agreeToTerms ? 'Yes' : 'No'}
  `.trim();

  const mailToLink = `mailto:clasypcs2025@gmail.com?subject=CLASYPCS 2025 Registration - ${registrationForm.fullName}&body=${encodeURIComponent(emailBody)}`;
  
  window.location.href = mailToLink;
};

const countryCodes = [
  { code: "+1", country: "United States / Canada" },
  { code: "+54", country: "Argentina" },
  { code: "+591", country: "Bolivia" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+506", country: "Costa Rica" },
  { code: "+53", country: "Cuba" },
  { code: "+593", country: "Ecuador" },
  { code: "+503", country: "El Salvador" },
  { code: "+502", country: "Guatemala" },
  { code: "+504", country: "Honduras" },
  { code: "+52", country: "Mexico" },
  { code: "+505", country: "Nicaragua" },
  { code: "+507", country: "Panama" },
  { code: "+595", country: "Paraguay" },
  { code: "+51", country: "Peru" },
  { code: "+1", country: "Puerto Rico" },
  { code: "+1", country: "Dominican Republic" },
  { code: "+598", country: "Uruguay" },
  { code: "+58", country: "Venezuela" },
  { code: "+34", country: "Spain" },
];
</script>

<template>
  <section
    id="registration"
    class="container py-24 sm:py-32"
  >
    <div class="mb-8 text-center">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Join Us</h2>
      <h2 class="text-3xl md:text-4xl font-bold">Register for CLASYPCS 2025</h2>
      <p class="mt-4 text-muted-foreground">
        Complete all sections to secure your spot at the conference
      </p>
    </div>

    <Card class="bg-muted/60 dark:bg-card max-w-4xl mx-auto">
      <CardContent class="p-8">
        <form @submit.prevent="handleSubmit" class="space-y-12">
          
          <!-- Personal Information -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <User class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Personal Information</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5 md:col-span-2">
                <Label for="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Smith Garcia"
                  v-model="registrationForm.fullName"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.smith@university.edu"
                  v-model="registrationForm.email"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="countryOfOrigin">Country of Origin *</Label>
                <Input
                  id="countryOfOrigin"
                  type="text"
                  placeholder="Uruguay"
                  v-model="registrationForm.countryOfOrigin"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="phoneCountryCode">Country Code *</Label>
                <Select v-model="registrationForm.phoneCountryCode">
                  <SelectTrigger>
                    <SelectValue placeholder="Select country code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="country in countryCodes" :key="country.code + country.country" :value="country.code">
                        {{ country.code }} ({{ country.country }})
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="099123456"
                  v-model="registrationForm.phoneNumber"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="identificationType">Identification Type *</Label>
                <Select v-model="registrationForm.identificationType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="National ID">National ID / Cedula</SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="identificationNumber">{{ registrationForm.identificationType }} Number *</Label>
                <Input
                  id="identificationNumber"
                  type="text"
                  placeholder="12345678"
                  v-model="registrationForm.identificationNumber"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Academic Information -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <GraduationCap class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Academic Information</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5 md:col-span-2">
                <Label for="universityName">University Name *</Label>
                <Input
                  id="universityName"
                  type="text"
                  placeholder="University of the Republic"
                  v-model="registrationForm.universityName"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="studentOrProfessional">Academic Status *</Label>
                <Select v-model="registrationForm.studentOrProfessional">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Recent Graduate">Recent Graduate</SelectItem>
                      <SelectItem value="Professional">Professional</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="graduationDate">
                  {{ registrationForm.studentOrProfessional === 'Student' ? 'Expected Graduation Date' : 'Graduation Date' }} *
                </Label>
                <Input
                  id="graduationDate"
                  type="month"
                  v-model="registrationForm.graduationDate"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="shirtSize">Shirt Size *</Label>
                <Select v-model="registrationForm.shirtSize">
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <!-- IEEE Information -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <Building class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">IEEE Information</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5">
                <Label for="membershipNumber">IEEE Membership Number</Label>
                <Input
                  id="membershipNumber"
                  type="text"
                  placeholder="12345678"
                  v-model="registrationForm.membershipNumber"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="ieeeSection">IEEE Section</Label>
                <Input
                  id="ieeeSection"
                  type="text"
                  placeholder="Uruguay Section"
                  v-model="registrationForm.ieeeSection"
                />
              </div>

              <div class="flex flex-col gap-1.5 md:col-span-2">
                <Label for="registrationCategory">Registration Category *</Label>
                <Select v-model="registrationForm.registrationCategory">
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Student Chair">Student Chair</SelectItem>
                      <SelectItem value="Student Member">Student Member</SelectItem>
                      <SelectItem value="Member">Member</SelectItem>
                      <SelectItem value="Student and Young Professional">Student and Young Professional</SelectItem>
                      <SelectItem value="Professional Member">Professional Member</SelectItem>
                      <SelectItem value="Non-IEEE Member">Non-IEEE Member</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <!-- Medical Information & Emergency Contact -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <Heart class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Medical Information & Emergency Contact</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-1.5">
                <Label for="emergencyContactName">Emergency Contact Name *</Label>
                <Input
                  id="emergencyContactName"
                  type="text"
                  placeholder="Maria Smith"
                  v-model="registrationForm.emergencyContactName"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="emergencyContactPhone">Emergency Contact Phone *</Label>
                <Input
                  id="emergencyContactPhone"
                  type="tel"
                  placeholder="+1 555 123 4567"
                  v-model="registrationForm.emergencyContactPhone"
                  required
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="medicalCondition">Important Medical Condition</Label>
                <Textarea
                  id="medicalCondition"
                  placeholder="Describe any relevant medical conditions..."
                  rows="3"
                  v-model="registrationForm.medicalCondition"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <Label for="allergies">Allergies</Label>
                <Textarea
                  id="allergies"
                  placeholder="List any food or medication allergies..."
                  rows="3"
                  v-model="registrationForm.allergies"
                />
              </div>

              <div class="flex flex-col gap-1.5 md:col-span-2">
                <Label for="dietaryRestrictions">Dietary Restrictions</Label>
                <Textarea
                  id="dietaryRestrictions"
                  placeholder="Vegetarian, vegan, gluten-free, etc..."
                  rows="2"
                  v-model="registrationForm.dietaryRestrictions"
                />
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 border-b pb-2">
              <CreditCard class="w-5 h-5 text-primary" />
              <h3 class="text-xl font-semibold text-primary">Payment Method</h3>
            </div>
            
            <div class="flex flex-col gap-1.5">
              <Label for="paymentMethod">Preferred Payment Method *</Label>
              <Select v-model="registrationForm.paymentMethod">
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Credit Card">Credit Card</SelectItem>
                    <SelectItem value="Debit Card">Debit Card</SelectItem>
                    <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                    <SelectItem value="PayPal">PayPal</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <!-- Terms and Conditions -->
          <div class="space-y-4">
            <div class="flex items-start space-x-3 p-4 border rounded-lg">
              <input 
                id="agreeToTerms" 
                type="checkbox"
                v-model="registrationForm.agreeToTerms"
                required
                class="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <Label for="agreeToTerms" class="text-sm leading-relaxed">
                I agree to the use of my information for processing my registration and communications related to CLASYPCS 2025. 
                I have read and accept the 
                <a href="#" class="text-primary underline">terms and conditions</a> 
                of the event. *
              </Label>
            </div>
          </div>

          <!-- Error Alert -->
          <Alert v-if="invalidInputForm" variant="destructive">
            <AlertCircle class="w-4 h-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              You must accept the terms and conditions to continue with registration.
            </AlertDescription>
          </Alert>

          <!-- Submit Button -->
          <div class="flex justify-center pt-6">
            <Button type="submit" class="w-full md:w-auto px-12 py-3 text-lg font-semibold">
              Submit Registration
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>

    <!-- Contact Info -->
    <div class="mt-12 text-center">
      <div class="flex justify-center items-center gap-2 mb-2">
        <Mail class="w-4 h-4 text-primary" />
        <span class="font-semibold">Have questions?</span>
      </div>
      <p class="text-muted-foreground">
        Contact us at: <a href="mailto:clasypcs2025@gmail.com" class="text-primary underline">r9-syp@computer.org</a>
      </p>
    </div>
  </section>
</template>