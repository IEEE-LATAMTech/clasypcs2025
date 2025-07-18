<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

//const router = useRouter();
const route = useRoute();

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronsDown, Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

interface RouteProps {
  href: string;
  label: string;
  isRouterLink?: boolean;
}

// Rutas para la página principal
const homeRoutes: RouteProps[] = [
   {
    href: "#registration",
    label: "Apply for a scholarship"
  },
  {
    href: "/aboutUs",
    label: "Past events",
    isRouterLink: true
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#services",
    label: "Location",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

// Rutas para la página AboutUs
const aboutUsRoutes: RouteProps[] = [
  {
    href: "/",
    label: "Back to Home",
    isRouterLink: true
  }
];

// Computed property para mostrar las rutas correctas según la página actual
const routeList = computed(() => {
  return route.path === '/aboutUs' ? aboutUsRoutes : homeRoutes;
});

const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md': true,
    }"
  >
    <router-link
      to="/"
      class="font-bold text-lg flex items-center"
    >
       <img
        src="../assets/favicon.png"
        alt="CLASYPCS 2025 Logo"
        class="rounded-lg w-9 h-9 mr-2 border object-cover"
      />
      CLASYPCS 2025
    </router-link>

    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu
            @click="isOpen = true"
            class="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <router-link
                  to="/"
                  class="flex items-center"
                >
                  <ChevronsDown
                    class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border text-white"
                  />
                  CLASYPCS 2025
                </router-link>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label, isRouterLink } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <router-link
                  v-if="isRouterLink"
                  @click="isOpen = false"
                  :to="href"
                >
                  {{ label }}
                </router-link>
                <a
                  v-else
                  @click="isOpen = false"
                  :href="href"
                >
                  {{ label }}
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <div class="flex gap-1">
              <Button
                v-for="{ href, label, isRouterLink } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <router-link
                  v-if="isRouterLink"
                  :to="href"
                >
                  {{ label }}
                </router-link>
                <a
                  v-else
                  :href="href"
                >
                  {{ label }}
                </a>
              </Button>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>