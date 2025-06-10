<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <!-- Imagen agregada aquí -->
            <div class="mb-6">
              <img
                src="/images/community-banner.jpg"
                alt="CLASYPCS Community"
                class="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Instagram
                class="w-20 h-20 m-auto mb-4"
              />
              Ready to join this
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                Community?
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Join our vibrant Instagram community! Connect, share, and grow with
            like-minded enthusiasts. Click to dive in! ✨
          </CardContent>
           
          <CardFooter>
            <Button as-child>
              
                href="https://www.instagram.com/ieeeclasypcs?igsh=NDVhcjdmZ3p5ZWR6"
                target="_blank"
              >
                Join Instagram
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>