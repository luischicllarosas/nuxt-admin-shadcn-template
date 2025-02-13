<script setup lang="ts"></script>

<template>
  <div class="flex h-screen">
    <LayoutMenu />

    <div class="flex flex-1 flex-col">
      <!-- <nav class="bg-blue-500 p-4">
        <div class="container mx-auto flex items-center justify-between">
          <a href="#" class="text-xl font-bold text-white">Mi Aplicación</a>
          <div></div>
        </div>
      </nav> -->
      <LayoutNavbar />

      <!-- <main class="flex-1 p-6">
        <div class="container mx-auto">
          <h1 class="mb-4 text-3xl font-bold">Contenido Principal</h1>
          <p class="text-gray-800">
            Este es el contenido principal de tu página. Puedes agregar aquí cualquier tipo de
            información, como texto, imágenes, formularios, etc.
          </p>
        </div>
      </main> -->
      <main class="flex-1 p-6">
        <NuxtPage />
      </main>
      <LayoutFoot />
    </div>
  </div>
</template>
